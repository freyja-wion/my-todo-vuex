<template>
  <div>
    <el-card class="box-card" shadow="always" body-style="padding:0 20px">
      <TodoItem
        v-for="todo of visibleTodos"
        :key="todo.id"
        :todo="todo"
      ></TodoItem>
    </el-card>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue"
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["visibleTodos", "isAllChecked"]),
    // ...{
    //   visibleTodos() {
    //     return this.$store.getters.visibleTodos
    //   },
    //   isAllChecked() {
    //     return this.$store.getters.isAllChecked
    //   }
    // }

    // visibleTodos() {
    //   return this.$store.getters.visibleTodos
    // },
    // isAllChecked() {
    //   return this.$store.getters.isAllChecked
    // }
  },
  components: {
    TodoItem,
  },
}
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-card {
  width: 480px;
}
</style>
