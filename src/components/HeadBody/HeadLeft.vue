<template>
  <div class="left-container">
    <div class="pic">
      <img
        src="@/assets/2.jpg"
        alt=""
        id="touxiang"
        @mouseover="senter"
        @mouseout="leave($event)"
        @touchend="senter"
        @touchstart="leave($event)"
      />
    </div>
    <!-- <img
      src="@/assets/2.jpg"
      alt=""
      id="touxiang"
      @mouseover="senter"
      @mouseout="leave($event)"
      @touchend="senter"
      @touchstart="leave($event)"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'HeadLeft',
  dtat() {
    return {}
  },
  methods: {
    senter() {
      document.getElementById('touxiang').classList.add('styleobj')
    },
    leave: (e) => {
      document.getElementById('touxiang').classList.remove('styleobj')
      e.target.style.transition = ' all 2s'
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #fff;

  // background-image: url('@/assets/2.jpg') ;
  img {
    // width: 2.2rem;
    height: 2.826rem;
  }
}

.styleobj {
  padding-top: 0.0533px;
  transition: all 1s;
  height: 2.826rem;
  border-radius: 40%;
  box-shadow: 0px 0.213rem 0.32rem 0.213rem gainsboro;
  transform: scale(1.1);
  overflow: hidden;
}
</style>
