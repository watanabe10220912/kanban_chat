<template>
    <div class="todo-items">
        <span>{{title}}</span><br>
            <button v-on:click="addItem">追加</button>
            <button v-on:click="removeItem" >削除</button>
            <div
            v-for="(item, key) in items"
            v-bind:key="key"
            class="todo-items"
            >
            <span>{{item.name}}</span><br>
            <textarea v-model="item.content" name="" cols="30" rows="10">
            </textarea>
            </div>
    </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    status: String
  },
  data() {
    return {
      title: this.status,
      items: [
        {
          name: "今日の予定",
          content: "今日は何もすることがない"
        },
        {
          name: "明日の予定",
          content: "明日は何もすることがない"
        }
      ]
    };
  },
  methods: {
    addItem: function() {
        this.items.push({name:"とりあえずの予定",content:"いつだってやるべきことなどない"})
    },
    removeItem:function(){
        this.items.pop();
    }
  }
};
</script>
<style scoped>
.todo-items {
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 3px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
}
</style>

