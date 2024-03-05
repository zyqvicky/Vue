<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名给APP</button>
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
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
};
</script>

<style scoped>
    .school {
        background-color: pink;
        padding: 5px;
    }
</style>
