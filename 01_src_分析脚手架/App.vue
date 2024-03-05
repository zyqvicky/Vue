<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchooL></SchooL>
        <StudenT></StudenT>
    </div>
</template>

<script>
import StudenT from "./components/StudenT.vue"
import SchooL from "./components/SchooL.vue"

export default {
    name: "App",
    components: {
        SchooL,
        StudenT,
    },
};
</script>