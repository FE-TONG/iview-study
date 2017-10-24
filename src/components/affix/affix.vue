<template>
    <div>
        <div :class="classes">
            <solt>

            </solt>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-affix';

    function getScroll(target, top) {
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';
        let ret = target[prop];
        if (typeof ret !== 'number') {
            ret = window.document.documentElement[method];
        }
        return ret;
    }
    function getOffset(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = getScroll(window, true);
        const scrollLeft = getScroll(window);
        const docEl = window.document.body;
        const clientTop = docEl.clientTop || 0;
        const clientLeft = docEl.clientLeft || 0;
        return {
            top: rect.top + scrollTop - clientTop,
            left: rect.left + scrollLeft - clientLeft
        };
    }
export default {
    name: 'Affix',
    props: {
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: {
            type: Number,
        }
    },
    data(){
        return {
            affix: false,
            styles: {}
        }
    },
    computed:{
        offsetType () {
            let type = 'top';
            if (this.offsetBottom >= 0) {
                type = 'bottom';
            }
            return type;
        },
        classes(){
            return [
                {
                    xxx: true,
                    [`${prefixCls}`]: this.affix
                }
            ]
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
        handleScroll(){
            const affix = this.affix;
            /* 
                this.offsetType == 'top' &&( 当前元素距离顶部的距离 - this.offsetTop)< 可见距离高度

            */
        }
    }
}
</script>
