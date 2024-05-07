<script lang="ts" setup>
import { onMounted, ref } from "vue";

const fruitList = ref([]);
const keyword = ref<string>("");

const isLoading = ref<boolean>(false);

const apiBaseUrl =
  "https://wap9y42o98.execute-api.ap-northeast-2.amazonaws.com/text-embedding";

async function searchText() {
  const response = await fetch(`${apiBaseUrl}?s=${keyword.value}`);
  const data = await response.json();
  console.log("data", data);
}

async function getAllFruit() {
  const response = await fetch(`${apiBaseUrl}/lists`);
  const result = await response.json();
  fruitList.value = result.data;
  console.log("all List", result);
}

async function insertFruit() {
  isLoading.value = true;

  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
    body: JSON.stringify({
      "insert-text": keyword.value,
    }),
  });
  keyword.value = "";

  const data = await response.json();
  isLoading.value = false;
  console.log("data", data);

  getAllFruit();
}

onMounted(function () {
  getAllFruit();
});
</script>

<template>
  <v-container class="container">
    <h3>전체 과일 목록</h3>
    <v-list class="list-container mt-2" lines="one">
      <v-list-item v-for="fruit in fruitList" :key="fruit.seq">
        <v-card>
          <p>
            {{ `${fruit.seq + 1}. ${fruit.name}` }}
          </p>
        </v-card>
      </v-list-item>
    </v-list>
    <v-form @submit.prevent="insertFruit">
      <v-text-field
        class="mt-4"
        v-model="keyword"
        label="테이블에 추가할 과일을 입력해주세요."
        hide-details
      ></v-text-field>
      <v-btn class="mt-2" type="submit" :loading="isLoading" block
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">
.container {
  width: 50vw;

  .list-container {
    height: calc(100vh - 190px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
