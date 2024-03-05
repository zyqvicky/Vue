<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>

export default {
    name:'School',
    props: ['getSchoolName'],
    data() {
        return {
            name:'yeye',
            address: '湖北武汉',
        }
    },
    mounted() {
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件，收到了数据',data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    }
};
</script>

<style scoped>
    .school {
        background-color: pink;
        padding: 5px;
    }
</style>
