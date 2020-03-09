<template>
  <div class="Piano">
    <div class="piano">
      <div class="wooden wooden-left"></div>
      <div class="main">
        <div class="button-wrapper">
          <div class="button-square rec" @click="recordSwitch" :class="recordState?'active':''">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="button-square play" @click="playRecord" :class="playState?'active':''">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="button-square keys" :class="keysState?'active':''" @click="keysState=!keysState">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="mapping">
            <div class="mapping-button" :class="mappingState==='real'?'':'active'" @click="switchMapping" >
            </div>
          </div>
          <div class="button-square sustain" @click="switchSustain" :class="sustainState?'active':''">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="screen-wrapper">
            <div class="screen">
              <div class="screen-inner">
                <div v-if="!soundsChoose">{{screenContent}}</div>
                <div v-else class="lists">
                  <li @click="switchSound('piano')">01 Piano</li>
                  <li @click="switchSound('guitar')">02 Guitar</li>
                </div>
              </div>
            </div>
          </div>
          <div class="button-square sounds" :class="soundsChoose?'active':''" @click="soundsChoose = !soundsChoose">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="button-square auto">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="button-square songs">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="tempo-wrapper">
            <div class="tempo-up" @click="switchVolume('up')">
                <div class="point-wrapper">
                  <div class="point-row">
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                  </div>
                  <div class="point-row">
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                  </div>
                  <div class="point-row">
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                  </div>
                </div>
            </div>
            <div class="tempo-down" @click="switchVolume('down')">
              <div class="point-wrapper">
                <div class="point-row">
                  <div class="point"></div>
                  <div class="point"></div>
                  <div class="point"></div>
                </div>
                <div class="point-row">
                  <div class="point"></div>
                  <div class="point"></div>
                  <div class="point"></div>
                </div>
                <div class="point-row">
                  <div class="point"></div>
                  <div class="point"></div>
                  <div class="point"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-square metro" @click="switchMetro" :class="metroState ? 'active' : ''">
            <div class="lamp"></div>
            <div class="point-wrapper">
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
              <div class="point-row">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="keys-wrapper">
          <div class="block">
            <div class="top"></div>
          </div>
          <div class="keys" v-for="item in pianoConfig" :key="item.value">
            <li>
              <div v-if="keysState" class="whiteKeyValue" @click="play(item.value)" :class="`${findKey(mapping,item.value)}`.length > 2 ? 'small' : 'whiteKeyValue'">{{findKey(mapping,item.value)}}</div>
              <key v-bind:type="true" v-bind:down="down.includes(item.value)"  @play="play(item.value)" />
              <div class="blackKeyValue" @click="play(item.subValue)"  v-if="mappingState==='real'&&keysState" >{{findKey(mapping,item.subValue)}}</div>
              <div class="blackKeyValue alt" @click="play(item.subValue)"  v-if="mappingState==='max'&&item.subValue&&keysState" >{{`${findKey(mapping,item.subValue)}`.replace('#','')}}</div>
              <key v-show="item.subValue" v-bind:type="false" v-bind:down="down.includes(item.subValue)"  @play="play(item.subValue)" />
            </li>
          </div>
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
import pianoConfig from '../config/pianoConfig'
import samplerInit from '../lib/samplerInit'
import keysMatch from '../config/keysMatch'
import key from '@/components/key.vue'
import * as Tone from 'tone'

let sampler
let interval

export default {
  name: 'Piano',
  components: {
    key
  },
  data () {
    return {
      pianoConfig: pianoConfig,
      on: [],
      down: [],
      mapping: keysMatch.real,
      keysState: false,
      mappingState: 'real',
      sustainState: false,
      tempo: 0,
      metroState: false,
      screenContent: 'PLAY',
      soundsChoose: false,
      recordState: false,
      record: [],
      playState: false
    }
  },
  created () {
    const { files, baseUrl } = samplerInit.init()
    sampler = new Tone.Sampler(files, function () {
      sampler.toDestination()
      this.playNode = function (value) {
        sampler.triggerAttackRelease(value, '2n')
      }
    }.bind(this), baseUrl)
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'F11') e.preventDefault()
      if (!e.altKey && !this.on.includes(e.key)) {
        this.play(this.mapping[e.key])
        this.on.push(e.key)
        this.down.push(this.mapping[e.key])
        if (this.recordState) this.record.push(this.mapping[e.key])
      }
      if (e.altKey && !this.on.includes('#' + e.key)) {
        this.play(this.mapping['#' + e.key])
        this.on.push('#' + e.key)
        this.down.push(this.mapping['#' + e.key])
        if (this.recordState) this.record.push(this.mapping['#' + e.key])
      }
    })
    document.addEventListener('keyup', (e) => {
      this.on = this.arrayRemove(this.on, e.key)
      this.down = this.arrayRemove(this.down, this.mapping[e.key])
      if (e.altKey) {
        this.on = this.arrayRemove(this.on, '#' + e.key)
        this.down = this.arrayRemove(this.down, this.mapping['#' + e.key])
      }
    })
  },
  methods: {
    playNode (value) {
    },
    play (value) {
      if (sampler.loaded) {
        this.screenContent = value.replace('s', '#')
        this.playNode(value.replace('s', '#'))
      }
    },
    arrayRemove (arr, value) {
      return arr.filter((ele) => {
        return (ele !== value)
      })
    },
    findKey (obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value))
    },
    switchMapping () {
      if (this.mappingState === 'real') this.mappingState = 'max'
      else this.mappingState = 'real'
      this.mapping = keysMatch[this.mappingState]
    },
    switchSustain () {
      this.sustainState = !this.sustainState
      const time = this.sustainState ? '2n' : '4n'
      this.playNode = function (value) {
        sampler.triggerAttackRelease(value, time)
      }
    },
    switchVolume (action) {
      const value = action === 'up' ? '-1' : '1'
      console.log(this.tempo)
      this.tempo -= value
      sampler.volume.value = this.tempo
      this.screenContent = this.tempo + 'DEC'
    },
    switchMetro () {
      this.metroState = !this.metroState
      if (this.metroState) {
        interval = setInterval(() => {
          sampler.triggerAttackRelease('c7', '2n')
        }, 1000)
      } else clearInterval(interval)
    },
    switchSound (sound) {
      const { files } = samplerInit.init()
      this.soundsChoose = false
      this.screenContent = 'LOADING'
      sampler = new Tone.Sampler(files, function () {
        sampler.toDestination()
        this.playNode = function (value) {
          sampler.triggerAttackRelease(value, '2n')
        }
        this.screenContent = 'PLAY'
      }.bind(this), `/${sound}/`)
    },
    recordSwitch () {
      this.recordState = !this.recordState
      if (this.recordState) {
        this.playState = false
        this.record = []
        const recordInterval = setInterval(() => {
          if (!this.recordState) clearInterval(recordInterval)
          this.record.push('')
        }, 10)
      }
    },
    playRecord () {
      if (!this.recordState) {
        this.playState = !this.playState
        if (this.playState) {
          let i = 0
          const length = this.record.length
          const interval = setInterval(() => {
            if (i === length || this.recordState) {
              clearInterval(interval)
              this.playState = false
            }
            if (this.record[i]) {
              this.play(this.record[i])
            }
            i++
          }, 10)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @font-face{
    font-family: 'Segment14';
    src : url('../assets/fonts/Segment14.otf');
  }
  .Piano{
    background-color: #D3D9DF;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
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
        box-shadow: #4a4d51 10px 5px 7px ;
      }
      .wooden-left{
        box-shadow: #080808 5px 2px 7px ;
        z-index: 1;
        position: relative;
      }
      .wooden-left:after{
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 42px 0 136px 24px;
        border-color: transparent transparent transparent #080b0d90;
        top:146px;
        right: -28px;
      }
      .main{
        height: 98%;
        background-color: #2c2b2c;
        box-shadow: #4a4d51 10px 5px 7px ;
        .button-wrapper{
          padding: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          height: 150px;
          background-color: #2e2f2f;
          width: 1308px;
          box-shadow: #4a4d51 0px 4px 7px;
          position: relative;
          .button-square:before{
            color: #c0c0c0;
            font-size: 11px;
            font-weight: bold;
            position: absolute;
            top:-26px;
            z-index: 2;
          }
          .rec:before{
            color: #9d3333;
            content: 'REC';
            font-weight: 900;
          }
          .play:before{
            content: 'PLAY';
          }
          .keys:before{
            content: 'KEYS';
          }
          .sustain:before{
            content: 'SUSTAIN';
          }
          .sounds:before{
            content: 'SOUNDS';
          }
          .auto:before{
            content: 'AUTO';
            color: #7f95ac;
          }
          .songs:before{
            content: 'SONGS';
          }
          .metro:before{
            content: 'METRO';
          }
          .button-square.active{
            .lamp{
              width: 12px;
              height: 12px;
              border: 1px solid #3e3738;
              border-radius: 50%;
              background-image: linear-gradient(to right bottom,#a50727,#84061e);
              margin-bottom: 5px;
              z-index: 2;
              box-shadow: #84061e90 0 0 15px;
            }
          }
          .button-square{
            position: relative;
            margin-top: 30px;
            width: 51px;
            height: 57px;
            background-image: linear-gradient(to right bottom,#47484d,#424244);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            z-index: 1;
            box-shadow: #03070b 5px 1px 3px ;
            .lamp{
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-image: linear-gradient(to right bottom,#3a1f19,#382219);
              position: relative;
              margin-bottom: 5px;
              border: 1px solid #3e3738;
            }
            .lamp:after{
              content: '';
              position: absolute;
              left: 3px;
              top: 4px;
              height: 2px;
              width: 2px;
              border-radius: 50%;
              background-image: linear-gradient(to left bottom,#796452,#fde5bb) ;
            }
            .point-wrapper{
              width: 24px;
              height: 24px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .point-row{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .point{
                  width: 4px;
                  height: 4px;
                  border-radius: 50%;
                  background-image: linear-gradient(to right bottom,#4d4e50 0%,#43444b 60%,#23272c 70%,#23262a 100%);
                }
              }
            }
          }
          .mapping:before{
            content: 'MAPPING';
            color: #c0c0c0;
            font-size: 11px;
            font-weight: bold;
            position: absolute;
            top:-26px;
          }
          .mapping:after{
            content: 'MAX';
            color: #c0c0c0;
            width: 70px;
            font-size: 11px;
            font-weight: bold;
            position: absolute;
            bottom: -20px;
            left: -10px;
          }
          .mapping{
            margin-top: 30px;
            margin-bottom: 4px;
            height: 53px;
            width: 53px;
            background-image: linear-gradient(to right,#7b7b7d,#29333f);
            border-radius: 50%;
            box-shadow: #03070b 3px 2px 5px ;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .mapping-button.active:after{
              right: 35px;
              bottom: 9px;
              transform: rotate(130deg);
              border-color: transparent transparent transparent #fffbff;
            }
            .mapping-button{
              background-color: #d9dbe1;
              width: 25px;
              height: 25px;
              border-radius: 50px;
              border-top: 2px solid #84828c;
              border-left: 3px solid #83838c;
              border-bottom: 2px solid #393c41;
              border-right: 1px solid #181c21;
              box-shadow: #03070b 2px 1px 3px ;
            }
            .mapping-button:before{
              content: 'REAL';
              color: #c0c0c0;
              width: 70px;
              font-size: 11px;
              font-weight: bold;
              position: absolute;
              bottom: -20px;
              right: -50px;
            }
            .mapping-button:after{
              position: absolute;
              content: '';
              border-style: solid;
              border-width: 3px 0 3px 8px;
              border-color: transparent transparent transparent #637184;
              right: 9px;
              bottom: 9px;
              transform: rotate(50deg);
            }
            }
          .tempo-wrapper:before{
            border-top: 3px solid #1a1e2190;
            content: 'TEMPO';
            color: #c0c0c0;
            width: 64px;
            height: 19px;
            text-align: center;
            line-height: 19px;
            font-size: 11px;
            font-weight: bold;
            position: absolute;
            top: 31px;
            z-index: 10;
            padding-bottom: 10px;
          }
          .tempo-wrapper {
            margin-top: 20px;
            width: 68px;
            height: 88px;
            position: relative;
            .tempo-up {
              width: 50px;
              height: 50px;
              background: linear-gradient(45deg, transparent 50%,#686668 50%,#4a4a4d 100%);
              border-radius: 7px;
              transform-origin:bottom right;
              transform: rotate(-45deg) translateY(0px) translateX(27px);
              border-right: 4px #191d21 solid;
              position: relative;
              z-index: 2;
              .point-wrapper{
                left: 24px;
                top: 6px;
              }
            }
            .tempo-up:active{
              background: linear-gradient(45deg, transparent 50%,#4d4e51 50%,#3f4145 100%);
            }
            .point-wrapper{
              position: relative;
              transform: rotate(45deg);
              width: 15px;
              height: 15px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .point-row{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .point{
                  width: 3px;
                  height: 3px;
                  border-radius: 50%;
                  background-image: linear-gradient(to right bottom,#4d4e50 0%,#43444b 60%,#23272c 70%,#23262a 100%);
                }
              }
            }
            .tempo-down {
              width: 50px;
              height: 50px;
              background: linear-gradient(45deg, transparent 50%,#4a4a4d 50%,#686668 100%);
              border-radius: 7px;
              transform-origin:left top;
              transform: rotate(135deg)  translateY(-52px) translateX(-45px);
              border-top: 4px #191d21 solid;
              z-index: 1;
              .point-wrapper{
                left: 27px;
                top: 6px;
              }
            }
            .tempo-down:active{
              background: linear-gradient(45deg, transparent 50%,#3f4145 50%,#4d4e51 100%);
            }
          }
          .screen-wrapper{
            width: 270px;
            height: 110px;
            border-radius: 2px;
            border: 10px solid #36393f;
            border-right-color: #2e3336;
            border-bottom-color: #313439;
            border-left-color: #363b42;
            box-shadow: #292829 7px 3px 4px,0px 0px 4px #414347,0px 2px 4px #9d9a95;
            .screen{
              border: 10px solid;
              border-image: linear-gradient(#1e252e, #101821) 10;
              border-right: 17px solid;
              border-left: 17px solid;
              width: 246px;
              height: 89px;
              .screen-inner{
                border-radius: 3px;
                border: 3px solid #949aa5;
                border-right-color: #9c9aa5;
                border-bottom-color: #94969c;
                border-left:5px solid #999ba2;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(#fffbf7 0%,#d3d0ce 15%,#c0bfc0 50%,#d3d0ce 85%,#fffbf7 100%);
                font-family: 'Segment14';
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ececec;
                font-size: 36px;
                .lists{
                  font-size: 16px;
                  width: 100%;
                  line-height: 18px;
                  background-color: #bbb8bb;
                  li{
                    border: #c0bdbd 1px solid;
                    border-left: none;
                    border-right: none;
                    text-align: center;
                    cursor: pointer;
                  }
                  li:hover{
                    background-color: #9b9b9d;
                  }
                  li:active{
                    background-color: #858687;
                  }
                }
              }
            }
          }
        }
        .space{
          height: 36px;
          width: 1308px;
          background-color: #262729;
          box-shadow: 0px -5px 2px #2a2829;
        }
        .keys-wrapper{
          height: 210px;
          width: 1308px;
          background-color: #2e2f31;
          display: flex;
          flex-direction: row;
          box-shadow: #131418 30px 15px 5px ;
          .block{
            width: 58px;
            height: 210px;
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
              position: relative;
              .whiteKeyValue{
                position: absolute;
                color: #6e6e6e;
                font-size: 24px;
                line-height: 24px;
                width: 100%;
                bottom: 24px;
                z-index: 1;
                text-align: center;
              }
              .blackKeyValue{
                position: absolute;
                color: #6e6e6e;
                font-size: 22px;
                right: 19px;
                line-height: 22px;
                width: 100%;
                top: 24px;
                z-index: 1;
                text-align: center;
              }
              .alt:before{
                content: 'Alt';
                color: #c0bdbd90;
                top: 24px;
                width: 100%;
                left: 1px;
                font-size: 12px;
                line-height: 22px;
                position: absolute;
              }
              .small{
                color: #6e6e6e;
                position: absolute;
                font-size: 14px;
                line-height: 24px;
                width: 100%;
                bottom: 24px;
                z-index: 1;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
