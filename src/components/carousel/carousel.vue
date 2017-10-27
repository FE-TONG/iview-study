<template>
    <div ref="carousel" :class="wrapClass">
        <button :class="leftButton">
            <Icon type="back"></Icon>
        </button>
        <div class="list" :style="{'height': height}">
            <slot></slot>
        </div>
        <button :class="rightButton">
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
            list(){
                /* 
                    我以为可以直接在 当前this上拿到item的，多想了
                    先看看源码可以不。  现在使用children
                */
                console.log(this);
                let length = this.$children.length;
                return length;
            },
            wrapClass(){
                return `${prefixCls}`
            },
            leftButton(){
                return [
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-hover`,
                    `left`
                ]
            },
            rightButton(){
                return [
                    `ivu-carousel-arrow`,
                    `ivu-carousel-arrow-hover`,
                    `right`
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

        },
        methods: {

        }
    }
</script>
