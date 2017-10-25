<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead">
            <slot name="title"></slot>
        </div>
        <div :class="extraClasses" v-if="showExtra">
            <slot name="extra"></slot>
        </div>
        <div :class="bodyClasses" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-card';
    const defaultPadding = 16;
    
    export default {
        props: {
            bordered: Boolean,
            disHover: Boolean,
            shadow: Boolean,
            padding: {
                type: Number,
                default: defaultPadding
            },
        },
        data(){
            return {
                showHead: false,
                showExtra: false
            }
        },
        mounted () {
            this.showHead = this.$slots.title !== undefined;
            this.showExtra = this.$slots.extra !== undefined;
        }
    }
</script>
