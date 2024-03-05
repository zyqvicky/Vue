<template>
  <div class="app">
    <h1>{{ msg }}学生姓名为：{{ studentname }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递（使用@或者v-on） -->
    <!-- <Student v-on:atguigu="getStudentName"/> -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递（ref） -->
    <!-- @click是原生事件 但是组件自动默认为自定义绑定事件 -->
    <!-- <Student ref="student" @click="show"/> -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name:'App',
    components: {
        School,
        Student
    },
    data() {
        return {
            msg:'你好啊!',
            studentname:''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('APP收到了学校名：',name);
        },
        getStudentName(name,...params) {
            console.log('APP收到了学生名：',name,params);
            this.studentname = name
        },
        m1(){
            console.log('demo事件被触发了');
        },
        show() {
            alert(123)
        }
    },
    mounted() {
        this.$refs.student.$on('atguigu',this.getStudentName)
        //灵活性更高
    },
}
</script>

<style>
    .app {
        background-color: orange;
        padding: 5px;
    }
</style>
