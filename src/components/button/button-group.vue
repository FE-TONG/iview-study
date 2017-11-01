<template>
    <div class="ivu-btn-group">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "ive-btn-group";
import { oneOf } from "../../utils";
export default {
  name: "buttonGroup",
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["large", "small", "default"]);
      }
    },
    vertical: {
      type: Boolean
    },
  },
  data() {
    return {
      
    };
  },
  computed: {},
  mounted() {
       
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
