<template>
    <div>

    </div>
</template>

<script>
import {oneOf} from '../../utils';
export default {
    name: 'AutoComplete',
    props: {
        value:{
            type: Number | String,
        },
        data: {
            type: Array,
            default: []
        },
        clearable:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        placeholder:{
            type: String,
        },
        size:{
            validator(value){
                return oneOf(value, ['large', 'small', 'default'])
            }
        },
        icon:{
            type: String,
        }
    }
}
</script>
