<template>
    <span v-if="dot" :class="classes" ref="badge">
        <slot></slot>
        <sup :class="dotClasses" v-show="badge"></sup>
    </span>
    <span v-else :class="classes" ref="badge">
        <slot></slot>
        <sup v-if="count" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
    </span>
</template>
<script>
    const prefixCls = 'ivu-badge';

    export default {
        name: 'Badge',
        props: {
            count: [Number, String],
            overflowCount: {
                type: [Number, String],
                default: 99
            },
            dot:{
                type: Boolean,
                default: false
            },
            className: {
                type: String
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                ]
            },

        }

    }
</script>
