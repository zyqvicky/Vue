<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>当前求和为：{{ number }}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前student组件实例</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'左笑笑',
            sex: '女',
            number:0
        }
    },
    methods: {
        add() {
            console.log('add回调被调用');
            this.number++
        },
        sendStudentName() {
            // 出发Student实例身上的atguigu事件
            this.$emit('atguigu',this.name,1,2,3)
            this.$emit('click')
        },
        unbind() {
            this.$off('atguigu') // 解绑一个自定义事件
            // this.$off(['atguigu','demo']) // 解绑多个自定义事件 用数组形式写
            // this.$off() // 所有自定义事件全部解绑
        },
        death() {
            this.$destroy() //销毁了当前Student组件的实例，销毁后所有实例的自定义事件不奏效
        },
        
    }
};
</script>

<style scoped>
    .student {
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>