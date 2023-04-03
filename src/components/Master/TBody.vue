<template>
  <div class="tbody-container">
    <BodyEducation></BodyEducation>

    <BodySkil></BodySkil>
    <BodySchool></BodySchool>
    <BodyEvaluate></BodyEvaluate>
  </div>
</template>

<script>
import BodyEducation from '@/components/MiddleBody/BodyBox/BodyEducation.vue'
import BodySkil from '@/components/MiddleBody/BodyBox/BodySkil.vue'
import BodySchool from '@/components/MiddleBody/BodyBox/BodySchool.vue'
import BodyEvaluate from '@/components/MiddleBody/BodyBox/BodyEvaluate.vue'

export default {
  name: 'MyTBody',
  components: {
    BodyEducation,
    BodySkil,
    BodySchool,
    BodyEvaluate
  }
}
</script>

<style lang="less" scoped>
.tbody-container {
  display: flex;
  flex-direction: column;
  flex: 3;
  width: 100%;
  // background-color: pink;
}
</style>
