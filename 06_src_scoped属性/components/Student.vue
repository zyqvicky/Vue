<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'左笑笑',
            sex: '女',
        }
    },
};
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>