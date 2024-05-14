<script lang="ts" setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import sanitizeHtml from "sanitize-html";
import { FormType, FruitListType } from "@/types/fruit";
import { findFruitApi } from "@/api/fruitList";

const fruitList = ref<FruitListType>([]);
const form = ref<FormType>({
  keyword: "",
});

const isLoading = ref<boolean>(false);

const rules = computed(() => ({
  keyword: { required },
}));

const v$ = useVuelidate(rules, form);

async function searchFruit() {
  const res = await v$.value.$validate();
  if (!res) return;

  const pureKeyword = sanitizeHtml(form.value.keyword, {
    allowedTags: [],
    nonTextTags: ["style", "script", "textarea", "option", "noscript"],
  });
  if (pureKeyword === "") return;

  isLoading.value = true;

  const response = await findFruitApi(pureKeyword);
  form.value.keyword = "";
  v$.value.$reset();

  const result = await response.json();
  isLoading.value = false;
  fruitList.value = result.data;

  console.log("fruit List", result);
}

function validateState(name: string, text: string) {
  return v$.value[name]?.$dirty && v$.value[name]?.$error ? text : "";
}
</script>

<template>
  <v-container class="container">
    <h3>검색 결과 목록</h3>
    <v-list class="list-container mt-2" lines="one">
      <v-list-item v-for="fruit in fruitList" :key="fruit.seq">
        <v-card>
          <p>
            {{ `${fruit.seq + 1}. ${fruit.name} - 유사도 : ${fruit.score}` }}
          </p>
        </v-card>
      </v-list-item>
    </v-list>
    <v-form @submit.prevent="searchFruit">
      <v-text-field
        class="mt-4"
        v-model="form.keyword"
        label="검색할 과일을 입력해주세요."
        hide-details
        :error-messages="validateState('keyword', 'error')"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" :loading="isLoading" block
        >Search</v-btn
      >
    </v-form>
  </v-container>
</template>

<style scoped lang="scss"></style>
