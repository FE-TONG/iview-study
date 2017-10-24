<template>
    <div>
        <div :class="wrapclasses">
            <slot name="icon" v-if="showIcon"></slot>
            <slot></slot>
            <slot name="desc"></slot>
            <slot :class="closeClasses" v-if="closable" name="close">
                <i>关闭功能</i>
            </slot>
        </div>
    </div>
</template>
<script>
const prefixCls = 'ive-alert';
const arr = ['info', 'success', 'warning', 'error'];
function oneOf(){
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
export default {
    name: 'alert',
    props: {
        type: {
            validator(value){
                return oneOf(value, arr)
            },
            default: 'info'
        },
        // 是否开启 关闭功能
        closable: {
            type: Boolean,
            default: false
        },
        // 是否开启 图标显示功能
        showIcon: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {

        }
    },
    computed: {
        wrapclasses(){
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-with-icon`]: this.showIcon,
                    [`${prefixCls}-with-desc`]: this.desc,
                    [`${prefixCls}-with-banner`]: this.banner
                }   
            ];
        },
        closeClasses(){
            return `${prefixCls}-close`;
        }
    },
    mounted(){
        this.desc = this.$slots.desc !== undefined;
    }
}
</script>
