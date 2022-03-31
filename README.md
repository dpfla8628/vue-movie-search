# vue-movie-app
## start project

- Vue CLI를 전역 모드(-g)로 설치
```
npm i @vue/cli@4.1.2 -g
```
- vue 프로젝트 생성
```
create vue test
```
- Vue UI
: Vue CLI 는 그래픽 인터페이스(GUI)를 사용하여 프로젝트를 작성하고 관리하는 기능을 제공
```
vue ui
```
- Vuetify
: UI components를 사용해 손쉽고 빠르게 프로젝트의 UI를 구성할 수 있습니다.
: 플러그인, 의존성, 컴파일 실행 등을 할 수 있다
```
vue add vuetify
or
vue ui plugin에서 설치
```
- Vuex
: 상태 관리 패턴(Store)을 사용
```
npm install vuex --save
or
vue ui plugin에서 설치
```

- 영화 api
http://www.omdbapi.com/?i=tt3896198&apikey=e4aaee62
- axios 설치 (npm install axios)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
