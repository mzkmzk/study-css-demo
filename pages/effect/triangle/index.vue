<template>
  <ShowDemo
    :html="html"
    :css="css"
  >
    <div
      slot="show-content"
      class="base__show"
    >
      <div
        class="triangle"
        :class="nowDirection"
      />

      <div class="">
        <el-button
          v-for="(direction, index) in directions"
          :key="`direction-${index}`"
          type="primary"
          @click="changeDirection(direction)"
        >
          {{ direction }}
        </el-button>
      </div>
    </div>
  </ShowDemo>
</template>

<script>
import ShowDemo from '~/components/common/showDemo/index'

export default {
  components: {
    ShowDemo
  },
  data () {
    return {
      nowDirection: 'arrow-up',
      directions: ['arrow-up', 'arrow-right', 'arrow-down', 'arrow-left']

    }
  },
  computed: {
    html () {
      return `<i class="triangle ${this.nowDirection}" />`
    },
    css () {
      const arrowMap = {
        'arrow-up': `
        .arrow-up {
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;

          border-bottom: 100px solid blue;
        }
        `,
        'arrow-down': `.arrow-down {
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;

          border-top: 100px solid blue;
        }`,
        'arrow-right': `.arrow-right {
          border-top: 100px solid transparent;
          border-bottom: 100px solid transparent;

          border-left: 100px solid blue;
        }`,
        'arrow-left': `.arrow-left {
          border-top: 100px solid transparent;
          border-bottom: 100px solid transparent;

          border-right:100px solid blue;
        }`
      }
      return this.$formatCode(`.triangle {
        width: 0;
        height: 0;
      }

      ${arrowMap[this.nowDirection]}
      `, 'scss')
    }
  },
  methods: {
    changeDirection (value) {
      this.nowDirection = value
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
     margin-top: 100px;
   }
   margin-bottom: 20px;
}

.triangle {
  width: 0;
  height: 0;
}

.arrow-up {
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;

  border-bottom: 100px solid blue;
}

.arrow-down {
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;

  border-top: 100px solid blue;
}

.arrow-right {
  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;

  border-left: 100px solid blue;
}

.arrow-left {
  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;

  border-right:100px solid blue;
}
</style>
