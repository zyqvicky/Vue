<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition只能用于一个元素
        transition-group可以用于多个元素-->
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">zxx！</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1 {
        background-color: pink;
    }

    
</style>