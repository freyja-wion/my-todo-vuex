<template>
  <el-card class="box-card">
    <div class="status-container">
      <el-radio-group v-model="show" size="medium" class="status-button">
        <el-radio-button label="全部"></el-radio-button>
        <el-radio-button label="未完成"></el-radio-button>
        <el-radio-button label="已完成"></el-radio-button>
      </el-radio-group>
      <div class="clear">
        <TodoLeftCount></TodoLeftCount>
        <ClearTodo />
      </div>
    </div>
  </el-card>
</template>
<script>
import TodoLeftCount from "./TodoLeftCount.vue"
import ClearTodo from "./ClearTodo.vue"
import { mapMutations } from "vuex"

export default {
  methods: {
    ...mapMutations(["setVisible"]),
    // setVisible(type) {
    //   this.$store.commit('setVisible', type)
    // }
  },
  computed: {
    show: {
      get() {
        return this.$store.state.show
      },
      set(val) {
        this.$store.commit("setVisible", val)
      },
    },
    // ...mapState(['show']),
    // show() {
    //   return this.$store.state.show
    // }
  },
  components: {
    TodoLeftCount,
    ClearTodo,
  },
}
</script>
<style scoped>
.status-container {
  display: flex;
  flex-direction: column;
}
.box-card {
  margin-top: 5px;
}
.status-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:18px;
}
.clear {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
</style>
