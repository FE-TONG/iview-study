<template>
    <button :type="htmlType" class="" :disabled="disabled" @click="handleClick">
        <i v-if="loading">我是loading, 转啊转啊</i>
        <i v-if="icon">我是i标签</i>
        <slot></slot>
    </button>
</template>
<script>
const prefixCls = "ive-button";
import { oneOf } from "../../utils";
export default {
  name: "button",
  props: {
    type: {
      validator(value) {
        return oneOf(value, [
          "primary",
          "ghost",
          "dashed",
          "text",
          "info",
          "success",
          "warning",
          "error"
        ]);
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ["large", "small", "default"]);
      }
    },
    long: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {},
  mounted() {
        //   默认显示
        //   通过判断 有没有 slots , 来显示有没有
      /*  有  obj !== undefined   true显示， 
        没有 undefined !== undefined    false不显示
      */
    this.showSlot = this.$slots.default !== undefined;
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
