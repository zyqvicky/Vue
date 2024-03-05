// 可以把多个组件共用的配置提取成一个混入对象，直接引入即可
export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
}

export const mixin1 = {
    data() {
        return {
            x:100,
            y:200,
        }
    },
}
