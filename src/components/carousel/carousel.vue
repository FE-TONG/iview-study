<template>
    <div ref="carousel" :class="wrapClass">
        <button :class="ButtonCls" class="left">
            <Icon type="back"></Icon>
        </button>
        <div class="list" :style="{'height': height}">
            <slot></slot>
        </div>
        <button :class="ButtonCls" class="right">
            <Icon type="more"></Icon>
        </button>

        <ul :class="dotsWarp">
            <li v-for="(item,index) in list" :key="index" :class="{'ivu-carousel-active': value}">
                <button class=""></button>
            </li>
        </ul>
    </div>
</template>

<script>
    const prefixCls = 'ivu-carousel';
    import { oneOf } from "../../utils";
    import Button from "../Button/";
    import Icon from "../icon";
    export default {
        name: 'Carousel',
        components: {
            Icon
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            height: {
                type: [String, Number],
                default: 'auto'
            },  
            loop:{
                type: Boolean,
            },
            autoplay: Boolean,
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            dots: {
                validator(value) {
                    return oneOf(value, ["inside", "outside", "none"]);
                },
                default: 'inside'
            },
            trigger: {
                validator(value) {
                    return oneOf(value, ["click", "hover"]);
                },
                default: 'click'
            },
            arrow: {
                validator(value) {
                    return oneOf(value, ["hover", "always", "never"]);
                },
                default: 'hover'
            },
            easing: {
                type: String,
                default: 'ease'
            }
        },
        data(){
            return {
                oldValue: null,

            }
        },
        computed: {
            wrapClass(){
                return `${prefixCls}`
            },
            ButtonCls(){
                return [
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-hover`,
                ]
            },
            dotsWarp(){
                return [
                    `${prefixCls}-dots`,
                    `${prefixCls}-dots-${this.dots}`,
                ]
            }
        },
        mounted(){
            this.findChild();
        },
        methods: {
            // find option component
            findChild(){
                console.log(this)
                this.$children.forEach((child)=>{
                    let name = child.$options.componentName;
                    console.log(name)
                    if(name){
                        
                    }else if(child.$children.length){
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                })
            },

        }
    }
</script>
