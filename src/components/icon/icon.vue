<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
const prefixCls = "ive-icon";
export default {
    name : 'Icon',
    props: {
        type: String,
        size: [String, Number],
        color: String
    },
    computed:{
        classes() {
            return `${prefixCls} icon iconfont icon-${this.type}`;
        },
        styles(){
            let style = {};
            if(this.size){
                style['fontSize'] = `${this.size}px`
            }
            if(this.color){
                style['color'] = this.color;
            }
            return style;
        }
    }
}
</script>
