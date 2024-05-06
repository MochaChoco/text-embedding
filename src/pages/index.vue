<template>
  <HelloWorld />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

async function search_text(keyword: string) {
  const response = await fetch(
    `https://n4vwwvk2m8.execute-api.us-east-1.amazonaws.com/text-embedding-stage/search?search-text=${keyword}`
  );
  const data = await response.json();
  console.log("data", data);
}

onMounted(function () {
  search_text("사과");
});
</script>
