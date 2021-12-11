<template>
  <div class="item">
    <div class="left">
      <el-checkbox
        :value="todo.done"
        class="check"
        @change="toggleStatus(todo.id)"
      ></el-checkbox>
      <!-- <input ref="editBox" @blur="editing = false" @keyup.enter="editTodo" @keyup.escape="editing = false"  :value="todo.text" type="text"> -->
      <el-input
        v-if="editing"
        class="edit"
        ref="editBox"
        @blur="editing = false"
        @keyup.enter.native="editTodo"
        @keyup.escape.native="editing = false"
        v-model="text"
      ></el-input>
      <span v-else @dblclick="edit">{{ todo.text }}</span>
    </div>
    <div class="right">
      <el-button
        type="danger"
        icon="el-icon-delete"
        size="mini"
        @click="deleteTodo(todo.id)"
      ></el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  props: ["todo"],
  data() {
    return {
      text: this.todo.text,
      editing: false,
    }
  },
  methods: {
    async edit() {
      this.editing = true
      await this.$nextTick()
      this.$refs.editBox.focus()
    },
    editTodo() {
      var text = this.text
      if (text) {
        this.$store.commit("changeTodoText", {
          id: this.todo.id,
          text,
        })
        this.$refs.editBox.value = ""
      }
      this.editing = false
    },
    ...mapMutations({
      deleteTodo: "deleteTodo",
      toggleStatus: "toggleTodoStatus",
    }),
    // deleteTodo() {
    //   this.$store.commit('deleteTodo', this.todo.id)
    // },
    // toggleStatus() {
    //   this.$store.commit('toggleTodoStatus', this.todo.id)
    // }
  },
}
</script>
<style scoped>
.check{
  padding-right: 10px;
}
.left{
  position:relative
}
.edit{
  position: absolute;
  width: 200px;
  top: -10px;
  
}
</style>
