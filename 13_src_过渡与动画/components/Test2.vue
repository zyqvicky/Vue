<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition只能用于一个元素
        transition-group可以用于多个元素-->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">zxx！</h1>
        </transition-group>
    </div>
</template>

<script>
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

    /* 进入的起点 */ /* 离开的终点 */
    .hello-enter,.hello-leave-to {
        transform: translateX(-100%);
    }

    .hello-enter-active,.hello-leave-active {
        transition: 0.5s;
    }

    /* 进入的终点 */ /* 离开的起点 */
    .hello-enter-to,.hello-leave {
        transform: translateX(0);
    }
    
</style>