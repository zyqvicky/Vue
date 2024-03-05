<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
// 引入mixin
import {mixin,mixin1} from '../mixin'

export default {
    name:'School',
    data() {
        return {
            name:'yeye',
            address: '湖北武汉',
        }
    },
    mixins:[mixin,mixin1]
};
</script>

<style>

</style>