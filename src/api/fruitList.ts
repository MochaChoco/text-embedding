const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getAllFruitApi() {
  return await fetch(`${apiBaseUrl}/lists`);
}

export async function insertFruitApi(keyword: string) {
  return await fetch(apiBaseUrl, {
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
}
export async function findFruitApi(keyword: string) {
  return await fetch(`${apiBaseUrl}?s=${keyword}`);
}
