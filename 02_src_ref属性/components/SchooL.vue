<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'SchooL',
    data() {
        return {
            name:'zxx',
            address:'湖北武汉'
        }
    }
};
</script>

<style>
    .school {
        background-color: pink;
    }
</style>