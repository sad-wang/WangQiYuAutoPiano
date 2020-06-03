<template>
  <div class="container">
    <div class="inner">
      <form action="">
        <title>创作新乐曲</title>
        <section>
          乐曲标题：<input type="text">
        </section>
        <section>
          乐曲乐谱：<textarea></textarea>
        </section>
        <section>
          乐曲歌词：<textarea></textarea>
        </section>
        <button>上传</button>
      </form>
      <div class="tips">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload'
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #d3d9df;
  width: 100%;
  height: 100vh;
  .inner{
    width: 1300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    form{
      width: 820px;
      background-color: #ffffff95;
      box-shadow: 5px 5px 15px 10px #00000010;
      border-radius: 20px;
      height: 800px;
    }
  }
}
</style>
