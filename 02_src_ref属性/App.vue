<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
        <SchooL ref="sch"/>
    </div>
</template>

<!-- ref
    1、用来给子组件或者元素注册引用信息（id的替代）
-->

<script>
import SchooL from "./components/SchooL";
export default {
    name: "App",
    components: { SchooL },
    data() {
        return {
            msg: "你好呀！",
        };
    },
    methods: {
        showDom() {
            // 获取真实dom
            console.log(this.$refs.title);
            console.log(this.$refs.btn);

            // 获取school组件的实例对象
            console.log(this.$refs.sch);
        },
    },
};
</script>