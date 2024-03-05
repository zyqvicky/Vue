export default {
    install(Vue) {
        Vue.filter('mySlice', function (value) {
            return value.slice(0,3)
        })

        Vue.directive('fbind', {
        bind(element, binding) {
            element.value = binding.value
        },
        // 指令所在元素被插入页面
        inserted(element) {
            element.focus()
        },
        // 指令所在的模板被重新解析
        update(element, binding) {
            element.value = binding.value
        }
    })

        // 给vue原型上添加一个方法 vm 和 vc 都能用
        Vue.prototype.hello = () => (alert('你好呀！'))
}
}

