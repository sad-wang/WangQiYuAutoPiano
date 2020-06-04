<template>
  <div class="container">
    <div class="inner">
      <form >
        <div class="title">创作新乐曲</div>
        <section>
          <div class="subtitle">乐曲标题：</div><input v-model="title" type="text">
        </section>
        <section>
          <div class="subtitle">乐曲乐谱：</div><textarea v-model="sheet"></textarea>
        </section>
        <section>
          <div class="subtitle">演奏模式(real或max)：</div><input v-model="mode" type="text">
        </section>
        <section>
          <div class="subtitle">乐曲歌词：</div><textarea v-model="lyrics"></textarea>
        </section>
        <button @click="upload">上传</button>
      </form>
      <div class="tips">
        <div class="title">语法规则</div>
        <div class="table">
          <div class="row">
            <div>同时按下三个键</div>
            <div>[abc]</div>
          </div>
          <div class="row">
            <div>一定间隔按下三个键</div>
            <div>a&nbsp;b&nbsp;c</div>
          </div>
          <div class="row">
            <div>延音</div>
            <div>a——</div>
          </div>
          <div class="row">
            <div>小节线</div>
            <div>|</div>
          </div>
        </div>
      </div>
    </div>
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
  name: 'upload',
  data () {
    return {
      title: null,
      sheet: null,
      mode: null,
      lyrics: null,
      review: [],
      user: null
    }
  },
  inject: ['eventHub'],
  mounted () {
    this.eventHub.$on('getUser', (res) => {
      this.user = res.data
    })
  },
  methods: {
    upload () {
      if (this.user) {
        app
          .callFunction({
            name: 'uploadSheet',
            data: {
              title: this.title,
              sheet: this.sheet,
              mode: this.mode,
              lyrics: this.lyrics
            }
          })
          .then(res => alert('上传成功'), error => alert('上传失败', error))
      } else alert('请先登录')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #d3d9df;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  .inner{
    height: 700px;
    padding-top: 0px;
    .title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    form{
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      width: 520px;
      background-color: #ffffff95;
      box-shadow: 5px 5px 15px 10px #00000010;
      border-radius: 20px;
      height: 700px;
      section{
        width: 300px;
        .subtitle{
          font-size: 18px;
          font-weight: lighter;
        }
        input:focus{ box-shadow: 0 0 4px 1px #00000020; }
        input{ margin: 10px 0 20px 0; padding: 0 20px; outline-style: none; width: 300px; height: 45px; border-radius: 17px; border: 2px solid #32323230;}
        textarea:focus{ box-shadow: 0 0 4px 1px #00000020; }
        textarea {
          border-radius: 17px;
          resize: none;
          width: 300px; height: 130px;
          border: 2px solid #32323230;
          margin: 10px 0 20px 0;
          outline: none;
          padding: 20px;
        }
      }
    }
    .tips{
      padding: 20px 0;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      width: 280px;
      height: 300px;
      margin-left: 30px;
      background-color: #ffffff95;
      box-shadow: 5px 5px 15px 10px #00000010;
      border-radius: 20px;
      .table{
        display: flex;
        flex-direction: column;
        width: 200px;
        .row{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 45px;
          font-weight: bold;
          font-size: 14px;
          div:last-child{
            color: #1295DB;
          }
        }
      }
    }
    button{
      width: 45px;
      height: 45px;
      border: 2px solid #32323230;
      background-color: #fff;
      outline: none;
    }
  }
}
</style>
