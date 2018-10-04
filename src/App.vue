<template>
<div>
<h1>
    とぅーどぅーりすと
</h1>
<br>
<ToDoList class="to-do-list" :status="title.todo">
</ToDoList>
<ToDoList class="to-do-list" :status="title.doing">
</ToDoList>
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ToDoList from "./components/ToDoList.vue";
export default {
  name: "app",
  data: function() {
    return {
      title: {
        todo: "すべきこと",
        doing: "してること",
        done: "おわったこと"
      }
    };
  },
  components: {
    HelloWorld,
    ToDoList
  }
};
</script>
<style scoped>
.to-do-list {
  display: inline-block;
  vertical-align: top;
}
</style>


