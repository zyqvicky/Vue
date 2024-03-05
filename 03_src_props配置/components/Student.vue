<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'我是宇宙无敌最强',
            // props先读取 优先级更高
            myAge: this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // 顺序不一定按照标签里写的
    // props:['name','sex','age']  // 简单声明接收

    // 接收的同时对数据进行类型限制
    // props: {
    //     name:String,
    //     sex:String,
    //     age:Number,
    // }

    // 接受的同时对数据类型限制 + 默认值指定 + 必要性限制
    props: {
        name: {
            type: String,  // name的类型是字符串
            required: true  // name是否是必须的
            },
        age: {
            type:Number,
            default: 99   // 默认值
        },
        sex: {
            type: String,
            required: true
        }
        // required 和 default 一般不同时出现
    }
};
</script>

<style>

</style>