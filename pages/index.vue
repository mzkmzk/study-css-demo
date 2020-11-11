<template>
  <div>
    <h1 class="index__title">
      study-css-demo
    </h1>
    <div
      class="index__container"
    >
      <h3 class="index__type-title">
        css3
      </h3>
      <IndexList
        class="index__index-list"
        :list="css3List"
      />
      <h3 class="index__type-title">
        css2
      </h3>
      <IndexList :list="css2List" />
    </div>
  </div>
</template>

<script>
import IndexList from '~/components/index/list'

export default {
  components: {
    IndexList
  },
  data () {
    return {
      css3List: [
        {
          title: 'linear-gradient',
          links: [
            { name: '基本语法', url: '/css3/linear-gradient/base' }
          ]
        }
      ],
      css2List: [

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index__title {
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  color: #409EFF;
  font-size: 40px;
}

.index__container{

  margin: 0 10%;

}

.index__type-title {
  font-size: 28px;
  margin-bottom: 5px;
  color: #909399

}

.index__index-list:not(:last-child) {
  margin-bottom: 50px;
}
</style>
