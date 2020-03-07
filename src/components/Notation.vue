<template>
  <div class="Notation">
    <div class="notation">
      <div class="left">
        <div class="pages"></div>
        <div class="page-left"></div>
      </div>
      <div class="right">
        <div class="page-right"></div>
        <div class="pages"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notation'
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
