<template>
  <el-button v-if="hasCompleted" @click="clear" type="danger" size="medium"
    >清除已完成任务</el-button
  >
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  methods: {
    ...mapMutations({
      clear: "clearCompletedTodo",
    }),
    // clear() {
    //   this.$store.commit('clearCompletedTodo')
    // },
  },
  computed: {
    ...mapGetters(["hasCompleted"]),
    // hasCompleted() {
    //   return this.$store.getters.hasCompleted
    // },
  },
}
</script>
