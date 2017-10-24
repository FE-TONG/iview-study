<template>
    <span :class="classes">
        <img v-if="src" :src="src" alt="">
        <Icon :type="icon" v-else-if="icon"></Icon>
        <span 
            ref="children" 
            :class="[prefixCls + '-string']" 
            :style="childrenStyle" v-else>
            <slot></slot>
        </span>
    </span>  
</template>
<script>
import Icon from "../icon";
import { oneOf } from "../../utils";
const prefixCls = "ive-avatar";
export default {
  name: "Avatar",
  components: { Icon },
  props: {
    src: String,
    icon: String,
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default"
    },
    shape: {
      validator(value) {
        return oneOf(value, ["circle", "square"]);
      },
      default: "circle"
    }
  },
  data() {
    return {
      prefixCls,
      scale: 1,
      isSlotShow: false
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.shape}`,
        `${prefixCls}-${this.size}`,
        {
          [`${prefixCls}-image`]: !!this.src,
          [`${prefixCls}-icon`]: !!this.icon
        }
      ];
    },
    childrenStyle() {
      let style = {};
      if (this.isSlotShow) {
        style = {
          msTransform: `scale(${this.scale})`,
          WebkitTransform: `scale(${this.scale})`,
          transform: `scale(${this.scale})`,
          position: "absolute",
          display: "inline-block",
          left: `calc(50% - ${Math.round(
            this.$refs.children.offsetWidth / 2
          )}px)`
        };
      }
      return style;
    }
  },
  mounted() {
    this.setScale();
  },
  updated() {
    this.setScale();
  },
  methods: {
    setScale() {
      this.isSlotShow = !this.src && !this.icon;
      console.log(this.$ref);
      if (this.$refs.children) {
        const childrenWidth = this.$refs.children.offsetWidth;
        const avatarWidth = this.$el.getBoundingClientRect().width;
        // add 4px gap for each side to get better performance
        if (avatarWidth - 8 < childrenWidth) {
          this.scale = (avatarWidth - 8) / childrenWidth;
        } else {
          this.scale = 1;
        }
      }
    }
  }
};
</script>
