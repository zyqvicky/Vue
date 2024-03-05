<template>
  <div>
    <Student name="左笑笑" sex="女" :age="18"/>
    <hr>
    <Student name="张三" sex="男"/>

  </div>
</template>

<script>
import Student from './components/Student'
export default {
    name:'App',
    components: {
        Student
    }
}
</script>
