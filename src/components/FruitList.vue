<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { FormType, FruitListType } from "@/types/Fruit";

const fruitList = ref<FruitListType>([]);
const form = ref<FormType>({
  keyword: "",
});

const isLoading = ref<boolean>(false);

const rules = computed(() => ({
  keyword: { required },
}));

const v$ = useVuelidate(rules, form);

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

async function getAllFruit() {
  const response = await fetch(`${apiBaseUrl}/lists`);
  const result = await response.json();
  fruitList.value = result.data;
  console.log("all List", result);
}

async function insertFruit() {
  const res = await v$.value.$validate();
  if (!res) return;

  isLoading.value = true;

  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
    body: JSON.stringify({
      "insert-text": form.value.keyword,
    }),
  });
  form.value.keyword = "";
  v$.value.$reset();

  const data = await response.json();
  isLoading.value = false;
  console.log("data", data);

  getAllFruit();
}

function validateState(name: string, text: string) {
  return v$.value[name]?.$dirty && v$.value[name]?.$error ? text : "";
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
        v-model="form.keyword"
        label="테이블에 추가할 과일을 입력해주세요."
        hide-details
        :error-messages="validateState('keyword', 'error')"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" :loading="isLoading" block
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<style scoped lang="scss"></style>
