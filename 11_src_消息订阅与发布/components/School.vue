<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是School组件，收到了数据',data);
        // })
        this.pubId = pubsub.subscribe('hello',(msgName,data)=> {
            console.log(this);
            console.log('有人发布了hello消息，hello回调执行了',msgName,data);
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    }
};
</script>

<style scoped>
    .school {
        background-color: pink;
        padding: 5px;
    }
</style>
