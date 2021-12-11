<template>
  <span>未完成：{{ count }} </span>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters({
      count: "leftCount",
    }),

    // count() {
    //   return this.$store.getters.leftCount
    // }
  },
}
</script>
