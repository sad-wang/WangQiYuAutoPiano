<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <div v-if="false" class="mask">
      <div id="login">
        <div class="tab">
          <li>登录</li>
          <li>注册</li>
        </div>
        <div class="content">
          <input type="text">
          <input type="password">
        </div>
        <div class="button">登录</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  cursor: default;
  user-select: none ;
}
ul,ol,li{list-style:none}
a{text-decoration: none;}
img{vertical-align:top;border:none}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mask {
    width: 100%;
    height: 100%;
    background-color: #00000080;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    #login{
      position: absolute;
      width: 400px;
      height: 350px;
      left: calc(50vw - 200px);
      top: calc(50vh - 175px );
      border-radius: 35px;
      padding: 45px;
      background-color: #252525;
      box-shadow: 0 2px 10px 8px #ff6b4750;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .tab{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        color: #fb734c;
        font-size: 20px;
        li:last-child{
          color: silver;
        }
      }
      .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input:focus{
          box-shadow: 0 0 4px 1px #ff6b4799;
        }
        input{
          padding: 10px;
          caret-color: #fb734c;
          outline-style: none;
          width: 222px;
          height: 33.3px;
          border-radius: 17px;
          border: 2px solid #323232;
          background-color: #252525;
        }
        input:first-child{
          margin-bottom: 20px;
        }
      }
      .button{
        align-self: center;
        width: 226px;
        height: 33.9px;
        border-radius: 17px;
        background-image: linear-gradient(to right, #ff6b47, #ff8451, #fda060);
        color: #fff;
        font-size: 16px;
        line-height: 33.9px;
        text-align: center;
      }
      }
  }
}
</style>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  },
  data () {
    return {
    }
  }
}
</script>
