<template>
  <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>

</template>

<script>
import SearchBar from "@/components/room/SearchBar";

export default {
  name: "ManageIndex",
  components: {
    SearchBar
  }
}
</script>

<style scoped>

</style>
