<template>
  <div class="index__list">
    <div
      v-for="(ele, index) in list"
      :key="`index__list-${index}`"
      class="index__list-item"
    >
      <el-card class="box-card">
        <div slot="header" class="">
          <span class="index__list-item-title">{{ ele.title }}</span>
        </div>
        <NuxtLink
          v-for="(linkInfo, indexLink) in ele.links"
          :key="`index__list-item-link-${indexLink}`"
          target="_blank"
          class="index__list-item-link"
          :to="linkInfo.url"
        >
          {{ linkInfo.name }}
        </NuxtLink>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.index__list{
  display: flex;
}

.index__list-item-title {
  font-size: 18px;
}
.index__list-item {
  flex-basis: 350px;
  display: flex;
  flex-direction: column;
}

.index__list-item-link {
  font-size: 14px;
  margin-bottom: 18px;
  color: #303133;
}

</style>
