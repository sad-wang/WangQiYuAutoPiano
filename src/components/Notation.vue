<template>
  <div class="Notation">
    <div class="notation">
      <div class="left">
        <div class="pages"></div>
        <div class="page-left">
          <div class="content">
            <div style="color: #000;font-weight: bolder;padding-bottom: 10px">Mapping: real</div>
            <span v-for="(node,index) in songbie" :key="index">
              {{findKey(real, songbie[index])}}
            </span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="page-right">
         <div class="content" style="height:100%;display:flex;flex-direction: column;justify-content: space-around;align-items: center;">
           <div>长亭外 古道边</div>
           <div>芳草碧连天</div>
           <div>夕阳山外山
           </div>
           <div>天之涯 地之角</div>
           <div>知交半零落</div>
           <div>一瓢浊酒尽余欢</div>
           <div>今宵别梦寒</div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notation',
  data () {
    return {
      songbie: ['g5', 'e5', 'g5', 'c6', 'g5', 'e5', 'b5', 'a5', 'f5', 'c6', 'g5', 'e5', 'g5', 'e5', 'c5', 'd5', 'e5', 'c5', 'd5', 'c5', 'd5', 'b4', 'g4', 'b4', 'g5', 'e5', 'g5', 'c6', 'g5', 'e5', 'b5', 'a5', 'f5', 'c6', 'g5', 'e5', 'g5', 'd5', 'd5', 'e5', 'f5', 'b4', 'b4', 'c5', 'g4', 'e4', 'g4', 'as4', 'as4', 'f4', 'a4', 'c5', 'e4', 'g4', 'c5', 'd4', 'f4', 'b4', 'a4', 'b4', 'e4', 'g4', 'c5', 'f4', 'a4', 'b4', 'c5', 'a4', 'c4', 'f4', 'a4', 'g4', 'e4', 'c4', 'd4', 'b3', 'd4', 'f4', 'g4', 'e4', 'g4', 'e4', 'g4', 'c5', 'b4', 'f4', 'a4', 'c5', 'e4', 'g4', 'd4', 'g4', 'd4', 'e4', 'd4', 'f4', 'g3', 'c4', 'e4', 'a5', 'c6', 'c6', 'b5', 'a5', 'b5', 'c6', 'a5', 'b5', 'c6', 'a5', 'a5', 'g5', 'e5', 'c5', 'd5', 'g4', 'g5', 'e5', 'g5', 'c6', 'b5', 'a5', 'c6', 'g5', 'g5', 'd5', 'e5', 'f5', 'b4', 'e5', 'c5', 'g4'],
      real: {
        Tab: 'c3',
        q: 'd3',
        w: 'e3',
        e: 'f3',
        r: 'g3',
        t: 'a3',
        y: 'b3',
        u: 'c4',
        i: 'd4',
        o: 'e4',
        p: 'f4',
        z: 'g4',
        x: 'a4',
        c: 'b4',
        v: 'c5',
        b: 'd5',
        n: 'e5',
        m: 'f5',
        ',': 'g5',
        '.': 'a5',
        '/': 'b5',
        Shift: 'c6',
        1: 'cs3',
        2: 'ds3',
        4: 'fs3',
        5: 'gs3',
        6: 'as3',
        8: 'cs4',
        9: 'ds4',
        a: 'fs4',
        s: 'gs4',
        d: 'as4',
        g: 'cs5',
        h: 'ds5',
        k: 'fs5',
        l: 'gs5',
        ';': 'as5'
      }
    }
  },
  mounted () {

  },
  methods: {
    findKey (obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value))
    }
  }
}
</script>

<style scoped lang="scss">
.Notation{
  flex: 1;
  width: 100%;
  background-color: #D3D9DF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  .notation{
    height: 345px;
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
