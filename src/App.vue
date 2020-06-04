<template>
  <div id="app">
    <header>
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-piano"></use>
        </svg>
      </div>
      <div class="title">AutoPiano</div>
      <div class="links">
        <li @click="clickHeader">{{userData}}</li>
        <router-link v-on:click.native="toUpload" to="/upload"><li ><svg class="icon" aria-hidden="true"><use xlink:href="#icon-upload"></use></svg>上传</li></router-link>
        <router-link to="/"><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shouye"></use></svg>首页</li></router-link>
      </div>
    </header>
    <router-view/>
    <section class="mask" v-if="formState" @click.self="closeForm">
      <div id="login">
        <div class="tab">
          <li :class="formType==='login' ? '': 'unselect'" @click="toLogin">登录</li>
          <li :class="formType==='login' ? 'unselect': ''" @click="toRegister">注册</li>
        </div>
        <div class="content" v-if="formType==='login'">
          <input v-model='loginID' type="text" placeholder="请输入账号">
          <input v-model='loginPwd' type="password" placeholder="请输入密码">
        </div>
        <div class="content" v-else>
          <input v-model='registerName' type="text" placeholder="请输入用户名">
          <input v-model='registerID' type="text" placeholder="请输入账号">
          <input v-model='registerPwd' type="password" placeholder="请输入密码">
        </div>
        <div class="button" @click="submit">{{formType==='login'? '登录':'注册'}}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
* { margin:0; padding:0; box-sizing: border-box; cursor: default; user-select: none; }
ul,ol,li {list-style:none; }
a {text-decoration: none; }
#app { width: 100vw; height: 100vh; display: flex; flex-direction: column;
  justify-content: space-evenly;
  background-color: #D3D9DF;}
@font-face{ font-family: 'Mr-De-Haviland-Regular'; src : url('./assets/fonts/Mr-De-Haviland-Regular.ttf'); }
.icon { width: 1em; height: 1em; vertical-align: -0.23em; fill: #bbb }
header { width: 100%; height: 30px; box-sizing: border-box; padding: 0 15px; background: #333; color: #bbb; font-size: 14px; display: flex; flex-direction: row; align-items: center;
  .logo { font-size: 24px; flex: 1; text-align: left; }
  .title { margin-top: 7px; text-align: center; font-family: 'Mr-De-Haviland-Regular',cursive; font-size: 28px; line-height: 30px; letter-spacing: 0.1em; font-weight: lighter; }
  .links { flex: 1; display: flex; flex-direction: row-reverse; align-items: center;
    li { margin: 0 10px; color: #bbb;
      .icon { font-size: 18px; }
    }
  }
}
.mask { width: 100%; height: 100%; background-color: #00000080; position: absolute; left: 0; top: 0; z-index: 10;
  #login{ position: absolute; width: 400px; height: 350px; left: calc(50vw - 200px); top: calc(50vh - 175px ); border-radius: 35px; padding: 0 45px 45px; background-color: #252525; box-shadow: 0 2px 10px 6px #00000080; display: flex; flex-direction: column; justify-content: space-evenly;
    .tab{ display: flex; flex-direction: row; justify-content: space-evenly; color: #fb734c; font-size: 20px;
      .unselect { color: silver; }
    }
    .content{ height: 50%;width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;
      input:focus{ box-shadow: 0 0 4px 1px #ff6b4799; }
      input{ color: #fb734c; margin-bottom: 10px; padding: 10px; caret-color: #fb734c; outline-style: none; width: 222px; height: 33.3px; border-radius: 17px; border: 2px solid #323232; background-color: #252525; }
      input:last-child{ margin-bottom: 0px;}
    }
    .button{ align-self: center; width: 226px; height: 33.9px; border-radius: 17px; background-image: linear-gradient(to right, #ff6b47, #ff8451, #fda060); color: #fff; font-size: 16px; line-height: 33.9px; text-align: center; }
  }
}
</style>

<script>
import tcb from 'tcb-js-sdk'
import Vue from 'vue'
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
  name: 'App',
  data () {
    return {
      data: false,
      userData: '登录',
      formState: false,
      formType: 'login',
      loginID: null,
      loginPwd: null,
      registerID: null,
      registerName: null,
      registerPwd: null,
      user: null,
      eventHub: new Vue(),
      musicSheetData: null
    }
  },
  mounted () {
    app
      .callFunction({
        // 调用getUser 云函数
        name: 'getMusicSheet',
        // 调用参数
        data: { }
      })
      .then((res) => {
        this.musicSheetData = res.result
        this.eventHub.$emit('getMusicSheetData', { data: this.musicSheetData })
      }, error => {
        console.log(error)
      })
  },
  provide () {
    return {
      eventHub: this.eventHub
    }
  },
  methods: {
    toUpload: function () {
      if (!this.user) alert('请先登录')
      this.eventHub.$emit('openForm')
    },
    clickHeader: function () {
      this.eventHub.$emit('openForm')
      if (this.userData === '登录') {
        this.formState = true
      } else {
        this.userData = '登录'
      }
    },
    closeForm: function () {
      this.formState = false
      this.eventHub.$emit('closeForm')
      this.registerPwd = null
      this.registerID = null
      this.registerName = null
      this.loginPwd = null
      this.loginID = null
    },
    toLogin: function () {
      this.formType = 'login'
    },
    toRegister: function () {
      this.formType = 'register'
    },
    submit: async function () {
      if (this.formType === 'login') {
        app
          .callFunction({
            // 调用getUser 云函数
            name: 'getUser',
            // 调用参数
            data: { name: this.loginID, password: this.loginPwd }
          })
          .then((res) => {
            this.loginPwd = null
            this.loginID = null
            if (res.result.state) {
              alert('登陆成功')
              this.user = res.result.user
              this.userData = res.result.user.user_name + ' 登出'
              this.closeForm()
              this.eventHub.$emit('getUser', { data: this.user })
            } else alert('用户名或密码错误')
          }, error => {
            console.log(error)
          })
      }
      if (this.formType === 'register') {
        app
          .callFunction({
            // 调用getUser 云函数
            name: 'createUser',
            // 调用参数
            data: { name: this.registerName, password: this.registerPwd, id: this.registerID }
          })
          .then(() => {
            this.registerPwd = null
            this.registerID = null
            this.registerName = null
            alert('创建成功')
            this.formType = 'login'
          }, error => {
            alert('创建失败', error)
          })
      }
    }
  }
}
</script>
