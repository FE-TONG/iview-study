<template>
    <transition name="fade">
        <div v-if="!closed" :class="wrapClasses">
            <span :class="iconClasses" v-if="showIcon">
                <slot name="icon">
                    <Icon :type="iconType"></Icon>
                </slot>
            </span>
            <span :class="messageClasses"><slot></slot></span>
            <span :class="descClasses"><slot name="desc"></slot></span>
            <a :class="closeClasses" v-if="closable" @click="close">
                <slot name="close">
                    <Icon type="ios-close-empty"></Icon>
                </slot>
            </a>
        </div>
    </transition>
</template>
<script>
function oneOf(value, arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == value){
            return true;
        }
    }
    return false;
}
const prefixCls = 'ive-alert';
export default {
    name: 'alert',
    props:{
        type: {
            validator(value){
                return oneOf(value, ['info', 'success', 'warning', 'error']);
            },
            default: 'info'
        },
        closable:{
            type: Boolean,
            default: false
        },
        showIcon:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            closed: false,

        }
    },
    computed:{
        wrapClasses(){
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-with-icon`]: this.showIcon
                }
            ];
        },
        iconClasses(){
            return `${prefixCls}-icon`;
        },
        messageClasses(){

        },
        descClasses(){

        },
        closeClasses(){

        },
        
        iconType(){

        }
    },
    mounted () {
        // this.desc = this.$slots.desc !== undefined;
    },
    methods:{
        close(e){
            this.closed = true;
            this.$emit('on-close', e);
        }
    }
}
</script>

