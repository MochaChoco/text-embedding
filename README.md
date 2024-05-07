# Text Embedding (Front-end)

AI를 이용한 Text Embedding 프로젝트입니다. 검색어를 입력하면 해당 검색어와 유사한 단어를 지닌 목록이 출력됩니다.

해당 Git Repository에는 Front-end 코드만 업로드된 상태입니다.

![](https://velog.velcdn.com/images/swj9077/post/42ba73a0-07f1-4daf-ba6b-96911607cb28/image.png)

## 개발 환경

개발 환경은 다음과 같습니다.

1. Front-end : Vue3 + Vuetify + Typescript
2. Back-end : Python + Aws Lambda + AWS API Gateway
3. Database : MongoDB Atlas + Pymongo
4. Model : OpenAI Embedding API

## 구현 기능

1. Client-side에서 간단한 form validation 기능 구현
2. Python + Aws Lambda + AWS API Gateway로 Serverless 환경 구축
3. OpenAI Embedding API를 활용한 Text Embedding 검색 기능 구현
4. Pymongo 라이브러리로 DB 입력 기능 구현

## 테스트 방법

1. 우측 하단의 input 영역에 임의의 과일 이름을 몇 개 입력합니다. (생략하셔도 됩니다.)
2. 좌측 하단의 input 영역에 임의의 과일 이름을 입력합니다.
3. "검색 결과 목록"에 입력한 과일과 유사한 과일이 결과로 나왔는지 확인합니다.

## 테스트 주소

아래의 링크에서 직접 테스트 해볼 수 있습니다.

[테스트 주소로 바로가기](https://mochachoco.github.io/text-embedding)

&nbsp;

# 설치 및 실행

로컬에서 설치 및 실행 방법은 다음과 같습니다. 현재 Access-Control-Allow-Origin에 localhost가 등록되지 않은 상태이므로, 위의 테스트 주소에서 테스트 하시는 것을 권장드립니다.

## 1. npm일 경우

```
npm install  // dependency 설치
npm run dev  // 로컬 환경 실행

http://localhost:3000/text-embedding
```

## 2. yarn일 경우

```
yarn install  // dependency 설치
yarn dev      // 로컬 환경 실행

http://localhost:3000/text-embedding
```

&nbsp;

# 상세 설명

프로젝트에 대한 상세 설명은 다음 링크를 참고 부탁드립니다.

[작성자 velog 바로 가기](https://velog.io/@swj9077/AI%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-Text-Embedding%EC%9C%BC%EB%A1%9C-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0)
