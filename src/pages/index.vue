<template>
  <HelloWorld />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const apiBaseUrl =
  "https://wap9y42o98.execute-api.ap-northeast-2.amazonaws.com/text-embedding";

async function searchText(keyword: string) {
  const response = await fetch(`${apiBaseUrl}?s=${keyword}`);
  const data = await response.json();
  console.log("data", data);
}

async function getAllText() {
  const response = await fetch(`${apiBaseUrl}/lists`);
  const data = await response.json();
  console.log("data", data);
}

async function insertText(keyword: string) {
  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
    body: JSON.stringify({
      "insert-text": keyword,
    }),
  });
  const data = await response.json();
  console.log("data", data);
}

onMounted(function () {
  searchText("사과1");
  getAllText();

  // insertText("체리");
});
</script>
