<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="10" class="container">
        <el-col :span="10">
          <el-checkbox
            size="medium"
            class="selectAll"
            :value="isAllChecked"
            @change="toggleAll"
            >全选/反选</el-checkbox
          >
        </el-col>
        <el-col :span="14">
          <el-input
            size="medium"
            v-model.trim="text"
            @keyup.enter.native="addTodo"
            placeholder="请输入内容,按回车键确认"
          ></el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    ...mapMutations({
      // 调用组件的toggleAll方法相当于调用store的mutations中的toggleAllTodoStatus方法
      toggleAll: "toggleAllTodoStatus",
    }),
    // toggleAll() {
    //   this.$store.commit('toggleAllTodoStatus')
    // },
    addTodo() {
      if (this.text) {
        this.$store.commit("addTodo", this.text)
        this.text = ""
      }
    },
  },
  computed: {
    // 组件的isAllChecked来源于store的getters的同名字段
    ...mapGetters(["isAllChecked"]),
    // isAllChecked() {
    //   return this.$store.getters.isAllChecked
    // }
  },
}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
}
.box-card{
  margin-bottom: 5px;
}
</style>
