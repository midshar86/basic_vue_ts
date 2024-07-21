<template>
  <div>
    <ul class="list">
      <li v-for="item in films" :key="item.filmId">
        <img :src="item.poster" alt="movieposter" />
        <div class="filmInfo">
          <h3>{{ item.name }}</h3>
          <p>
            <span>观众评分: </span><span>{{ item.grade }}</span>
          </p>
          <p>
            <span>国家:</span><span>{{ item.nation }}</span>
          </p>
          <p>
            <span>主演:</span
            ><span v-for="actor in item.actors" :key="actor.name"
              >{{ actor.name }}
            </span>
          </p>
        </div>
        <button>购票</button>
      </li>
    </ul>
  </div>
</template>

<script>
import req from '@/api'
import store from '@/store'
export default {
  data() {
    return {
      films: []
    }
  },
  methods: {
    print() {
      console.log(this.$route)
    }
  },
  mounted() {
    this.print()
    req
      .get('/user/details', {
        headers: {
          authorization: store.state.userInfo.token
        }
      })
      .then((res) => {
        if (res.code === 200 && res.msg === '用户信息获取成功!') {
          this.films = res.details.data.films
        }
        console.log(this.films)
      })
      .catch((err) => console.log(err))
  }
}
</script>

<style lang="less" scoped>
.list {
  list-style: none;
  li {
    display: flex;
    margin: 10px 0;
    line-height: normal;
    img {
      display: block;
      width: 150px;
      height: 200px;
      margin-right: 20px;
    }
    .filmInfo {
      text-align: left;
      flex: 1;
      h3 {
        font-size: 25px;
        color: #f10;
        margin: 15px 0;
      }
      p {
        margin: 15px 0;
        font-size: 12px;
        &:nth-child(2) {
          span {
            &:last-child {
              color: orange;
              font-weight: bold;
            }
          }
        }
      }
    }
    button {
      width: 60px;
      height: 26px;
      border-radius: 5px;
      background-color: orange;
      color: white;
      outline: none;
      border: none;
      font-size: 12px;
      align-self: center;
      cursor: pointer;
    }
  }
}
</style>
