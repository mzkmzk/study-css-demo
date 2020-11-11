<template>
  <div>
    <div class="show-demo__content">
      <slot name="show-content" />
    </div>
    <div class="show-demo__code">
      <div>
        <highlight-code slot="codeText" lang="html">
          {{ html }}
        </highlight-code>
      </div>
      <div>
        <highlight-code slot="codeText" lang="scss">
          {{ css }}
        </highlight-code>
      </div>
      <div>
        <highlight-code slot="codeText" lang="javascript">
          {{ js }}
        </highlight-code>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    html: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    js: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.show-demo__content{
  display: flex;
  justify-content: center;
}

.show-demo__code {
  display: flex;

  & div{
    flex-basis: 33.33%
  }
}

</style>
