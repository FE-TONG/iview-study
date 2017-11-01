<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-breadcrumb';
    export default {
        name: 'breadcrumb',
        props: {
            separator: {
                type: [String , Object],
                default: '/'
            }
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`
                ]
            }
        },
        mounted () {
            this.updateChildren();
        },
        updated () {
            this.$nextTick(() => {
                this.updateChildren();
            });
        },
        methods: {
            updateChildren () {
                this.$children.forEach((child) => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator () {
                this.updateChildren();
            }
        }

    }
</script>
