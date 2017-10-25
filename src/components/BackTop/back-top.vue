<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <Icon type="good-filling"></Icon>
            </div>
        </slot>
    </div>
</template>
<script>
    import Icon from '../icon';
    const prefixCls = 'ive-back-top';
    export default {
        name: 'BackTop',
        components: {
            Icon
        },
        props: {
            height: {
                type: Number,
                default: 100
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            // 滚动动画持续时间，单位 毫秒
            duration: {
                type: Number,
                default: 30
            }, 
        },
        data(){
            return {
                prefixCls,
                show: false
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.show,
                    }
                ]
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                };
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, false);
            window.addEventListener('resize', this.handleScroll, false);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll, false);
            window.removeEventListener('resize', this.handleScroll, false);    
        },
        methods: {
            handleScroll () {
                this.show = window.pageYOffset >= this.height;
            },
            back(e){
                console.log(this)
                this.$emit('on-click', e)
            }
        }
    }
</script>

<style lang="scss">
    // @backtop-prefix-cls: ~"@{css-prefix}back-top";
    .ive-back-top{
        display: none;
        &.ive-back-top-show{
            display: block;
        }
    }
    .ivu-affix, .ive-back-top {
        position: fixed;
        z-index: 10;
    }
</style>
