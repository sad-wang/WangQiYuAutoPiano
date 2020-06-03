<template>
  <div class="PageHeader">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-piano"></use>
      </svg>
    </div>
    <div class="title">AutoPiano</div>
    <div class="links">
      <li class="toIndex">
        登录
      </li>
      <router-link to="/upload">
        <li class="toIndex">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-upload"></use>
          </svg>
          上传
        </li>
      </router-link>
      <router-link to="/">
        <li class="toIndex">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          首页
        </li>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped lang="scss">
  @font-face{
    font-family: 'Mr-De-Haviland-Regular';
    src : url('../assets/fonts/Mr-De-Haviland-Regular.ttf');
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .PageHeader{
    width: 100%;
    height: 45px;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #333;
    color: #bbb;
    .logo{
      font-size: 34px;
      flex: 1;
      text-align: left;
    }
    .title{
      margin-top: 7px;
      flex: 2;
      text-align: center;
      font-family: 'Mr-De-Haviland-Regular',cursive;
      font-size: 42px;
      line-height: 45px;
      letter-spacing: 0.1em;
      font-weight: lighter;
    }
    .links{
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      li{
        color: #bbb;
        margin: 0 10px;
        .icon{
          font-size: 18px;
          fill:#bbb
        }
      }
    }
  }
</style>
