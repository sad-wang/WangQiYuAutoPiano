<template>
  <div class="container">
    <div class="point-wrapper" v-for='x in 4' :key="x">
      <div class="point-row">
        <div class="point" v-for='x in 4' :key="x"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'point-wrapper'
}
</script>

<style lang="scss" scoped>
.container { width: 24px; height: 24px; display: flex; flex-direction: column; justify-content: center; align-items: center;
}
.point-wrapper{ width: 24px; height: 24px; display: flex; flex-direction: column; justify-content: space-around;
  .point-row{ display: flex; flex-direction: row; justify-content: space-between; align-items: center;
    .point{ width: 4px; height: 4px; border-radius: 50%; background-image: linear-gradient(to right bottom,#4d4e50 0%,#43444b 60%,#23272c 70%,#23262a 100%);
    }
  }
}
</style>
