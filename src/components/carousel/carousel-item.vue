<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ivu-carousel-item';
export default {
  name: 'carouselItem',
  props: {

  },
  data(){
      return {
          prefixCls,
      }
  },
  mounted(){
      console.log('carouselItem')
  }
}
</script>
