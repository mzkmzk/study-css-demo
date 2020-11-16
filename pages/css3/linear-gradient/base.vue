<template>
  <div>
    <h3 style="color: #409EFF">
      展示
    </h3>
    <ShowDemo
      :html="html"
      :js="js"
      :css="css"
    >
      <div
        slot="show-content"
        class="base__show"
      >
        <div
          class="base-linear-gradient"
          :style="{
            backgroundImage: `linear-gradient(${angle}, red 100px, yellow 200px)`
          }"
        />
        <div>
          <el-button
            v-for="(angleNum, index) in angles"
            :key="`angle-change-${index}`"
            type="primary"
            @click="changeAngel(angleNum)"
          >
            {{ angleNum }}deg
          </el-button>
        </div>
      </div>
    </ShowDemo>
  </div>
</template>

<script>
import ShowDemo from '~/components/common/showDemo/index'
export default {
  components: {
    ShowDemo
  },
  data () {
    return {
      angles: [0, 45, 90, 135, 180, 225, 270, 315, 360, 405],
      angle: '0deg',
      html: '<div class="base-linear-gradient" />',
      js: ''
    }
  },
  computed: {
    css () {
      return `.base-linear-gradient {
        width: 400px;
        height: 400px;
        background-image:linear-gradient(${this.angle}, red 100px, yellow 200px);
      }`
    }
  },
  methods: {
    changeAngel (angleNum) {
      this.angle = `${angleNum}deg`
    }
  }
}
</script>

<style lang="scss" scoped>
.base__show {
  display: flex;
  flex-direction: column;
  align-items: center;
   & div+  div {
     margin-top: 20px;
   }
   margin-bottom: 20px;
}
.base-linear-gradient {
  width: 400px;
  height: 400px;
}
</style>
