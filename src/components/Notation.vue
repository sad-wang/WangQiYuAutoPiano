<template>
  <div class="Notation" v-if="showState">
    <div :key="item" :style="{top: parseInt(Math.random()*9)*30 + 'px',left: -parseInt(Math.random()*5)*300+'px'}" class="review" v-for="item in review">{{item}}</div>
    <div class="notation">
      <div class="left">
        <div class="pages"></div>
        <div class="page-left">
          <div class="content" style="letter-spacing: 0.1em; padding: 50px">
            <div style="color:#000;letter-spacing: normal">{{title}}</div>
            <div style="font-size: 12px;letter-spacing: normal">mode:{{mode}}</div>
             <div style="font-size: 13px">{{sheet}}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="page-right">
         <div class="content">
           <div style="color:#000;letter-spacing: normal">{{title}}</div>
           {{lyrics}}
         </div>
        </div>
      </div>
    </div>
    <div class="button" @click="toprompt">留言</div>
  </div>
</template>

<script>
import tcb from 'tcb-js-sdk'
const app = tcb.init({
  env: 'sadpiano-1a5b0c'
})
app
  .auth({
    persistence: 'session'
  })
  .anonymousAuthProvider()
  .signIn()
export default {
  name: 'Notation',
  data () {
    return {
      sheet: null,
      lyrics: null,
      showState: false,
      review: []
    }
  },
  inject: ['eventHub'],
  mounted () {
    this.eventHub.$on('showSheet', (res) => {
      this.showState = true
      this.lyrics = res.data.lyrics.split('\\n').join('\n')
      this.sheet = res.data.sheet.split('\\n').join('\n')
      this.mode = res.data.mode
      this.title = res.data.title
      this.review = res.data.review
      this._id = res.data._id
    })
    this.eventHub.$on('hideSheet', () => {
      this.showState = false
    })
  },
  methods: {
    toprompt () {
      const review = prompt('请留言')
      this.review.push(review)
      app
        .callFunction({
          name: 'review',
          // 调用参数
          data: {
            _id: this._id,
            review: this.review
          }
        })
        .then((res) => {
          alert('留言成功', this.review, this._id)
        }, error => {
          alert('留言失败', error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.button{
  margin-left: 10px;
  width: 45px;
  height: 30px;
  border: 2px solid #32323230;
  font-size: 14px;
  line-height: 25px;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  align-self: flex-end;
}
.Notation{
  .review { height: 30px; padding: 0 10px; font-size: 14px; color: #0b0b0c;position: absolute;line-height: 30px;
    background-color: #ffffff60;border-radius: 10px; animation: drive 23s infinite linear;left: 0;top: 0}
  @keyframes drive { from { transform: translateX(0); } to { transform: translateX(calc(100vw + 1500px)); } }
  width: 100%; background-color: #D3D9DF; display: flex; justify-content: center; align-items: center;position: relative;overflow: hidden;
  .notation{
    height: 305px;
    width: 500px;
    display: flex;
    flex-direction: row;
    .left{
      width: 50%;
      height: 100%;
      background-color: #f1f1f1;
      border-left: 7px solid #eaeaea;
      border-right: 1px solid #b9b9b9;
      border-top: 10px solid #f3f3f3;
      border-bottom: 10px solid #eaeaea;
      display: flex;
      flex-direction: row;
      box-shadow: 3px 0 5px #868686;
      .pages{
        width: 20px;
        height: 100%;
        background-image: linear-gradient(to right,#f4f4f4 0%,#f7f7f7 100%);
      }
      .page-left{
        width: 100%;
        height: 100%;
        box-shadow: 3px 0 5px #868686;
        background-image: linear-gradient(to right,#f0f0f0 0%,#f1f1f1 10%,#d9d9d9 78%,#b1b1b1 100%);
        .content{
          padding: 20px;
          font-size: 16px;
          color: gray;
          white-space: pre-line;
          height:100%;display:flex;flex-direction: column;justify-content: space-evenly;align-items: center;
        }
      }
    }
    .right{
      width: 50%;
      height: 100%;
      background-color: #e2e2e2;
      border-right: 10px solid #dddddd;
      border-top: 10px solid #f3f3f3;
      border-bottom: 10px solid #d6d6d6;
      display: flex;
      flex-direction: row;
      box-shadow: 3px 0 5px #868686;
      .page-right{
        width: 100%;
        height: 100%;
        box-shadow: 3px 0 5px #868686;
        background-image: linear-gradient(to right,#f8f8f8 0%,#fafafa 22%,#d4d4d4 90%,#c8c8c8 100%);
        .content{
          padding: 40px;
          font-size: 16px;
          color: gray;
          white-space: pre-line;
          height:100%;display:flex;flex-direction: column;justify-content: space-evenly;align-items: center;
        }
      }
      .pages{
        width: 15px;
        height: 100%;
        background-image: linear-gradient(to right,#6c6c6c80 0%,#86868680 100%);
      }
    }
  }
}
</style>
