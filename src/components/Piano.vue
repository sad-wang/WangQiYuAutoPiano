<template>
  <div class="Piano">
    <div class="piano">
      <div class="wooden"></div>
      <div class="main">
        <div class="button-wrapper"></div>
        <div class="space"></div>
        <div class="keys-wrapper">
          <div class="block">
            <div class="top"></div>
          </div>
          <div class="keys">
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div><div class="black-key"></div></li>
            <li><div class="white-key"></div></li>
          </div>
<!--          <div id="p-wrapper">-->
<!--            <ul id="piano">-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div><span></span></li>-->
<!--              <li><div class="anchor"></div></li>-->
<!--            </ul>-->
<!--          </div>-->
          <div class="block">
            <div class="top"></div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="wooden"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Piano'
}
</script>

<style scoped lang="scss">
  .Piano{
    background-color: #D3D9DF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .piano{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 430px;
      width: 1380px;
      .wooden{
        width: 36px;
        background-image: linear-gradient(to bottom right, #281c18, #180e0c);
        height: 100%;
      }
      .main{
        height: 98%;
        background-color: #2c2b2c;
        .button-wrapper{
          height: 150px;
          background-color: #2e2f2f;
          width: 1308px;
        }
        .space{
          height: 36px;
          width: 1308px;
          background-color: #262729;
          box-shadow: 0px -5px 2px #2a2829;
        }
        .keys-wrapper{
          height: 207px;
          width: 1308px;
          background-color: #2e2f31;
          display: flex;
          flex-direction: row;
          box-shadow: #131418 7px 17px 5px ;
          .block{
            width: 58px;
            height: 207px;
            .top{
              height: 15px;
              width: 58px;
              background-color: #2e2f2f ;
            }
          }
          .keys{
            width: 1192px;
            height: 207px;
            border-top: 15px solid #0d0d10;
            li{
              display: inline-block;
              position: relative;
              height: 198px;
              .white-key{
                width: calc(1192px / 36);
                height: 195px;
                background-color: #dfdfe4;
                border-right: 1px #0b0b0c solid;
                border-left: 1px #2a2b2c  solid;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                position: relative;
              }
              .white-key:hover{
                height: 198px;
                border-right: 1px #0b0b0c solid;
                border-left: 1px #2a2b2c  solid;
              }
              .white-key:hover:after{
                content: '';
                position: absolute;
                border-style: solid;
                border-width: 198px 0 0 9px;
                border-color: transparent transparent transparent #62708499;
                bottom: 0;
              }
              .black-key{
                position: absolute;
                width: 18px;
                height: 135px;
                left: -10px;
                top:0;
                background-image: linear-gradient(to bottom, #101112 0%, #1b2127 10%, #1b2127 10%);
                border-top: #1a1e25 5px solid;
                border-left: #232223 4px solid;
                border-bottom: #3e3e40 13px solid;
                border-right: 5px #010203 solid;
                box-shadow: #364b62 10px 2px 5px ;
              }
              .black-key:hover{
                border-top: #1a1e25 8px solid;
                border-left: #232223 4px solid;
                border-bottom: #3e3e40 8px solid;
                border-right: 5px #010203 solid;
                box-shadow: #364b62 5px 2px 5px ;
              }
              .black-key:active{
                border-top: #1a1e25 8px solid;
                border-left: #232223 4px solid;
                border-bottom: #3e3e40 8px solid;
                border-right: 5px #010203 solid;
                box-shadow: #364b62 15px 2px 5px ;
              }
            }
          }
        }
      }
    }
  }
</style>
