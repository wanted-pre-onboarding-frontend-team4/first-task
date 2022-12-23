# 원티드 프리온보딩 프론트엔드 4팀 - first task



> 원티드 프리온보딩 선발과제 (Todo List) 리팩토링
>
> 기간 : 2022년 12월 20일 ~ 2022년 12월 23일

<br />

## 📖 목차

- [팀원명](#💪팀원명)
- [배포링크](#📌배포링크)
- [협업과정](#😊협업과정)
- [팀 코드 컨벤션](#💡팀-코드-컨벤션)
- [폴더구조](#📁폴더구조)
- [Best Practice 및 채택 근거](#✅Best-Practice-및-채택-근거)
- [사용기술](#🛠사용기술)



<br />



## 💪팀원명

| 예선(팀장)                                | 다님(팀원)                            | 용훈(팀원)                            | 미진(팀원)                              |
| ----------------------------------------- | ------------------------------------- | ------------------------------------- | --------------------------------------- |
| [YesunPark](https://github.com/YesunPark) | [dahhnym](https://github.com/dahhnym) | [KKKHun2](https://github.com/KKKHun2) | [mijinyun](https://github.com/mijinyun) |

| 혜진(팀원)                                | 정민(팀원)                                | 성환(팀원)                              | 수민(팀원)                              |
| ----------------------------------------- | ----------------------------------------- | --------------------------------------- | --------------------------------------- |
| [hyejineee](https://github.com/hyejineee) | [jeongmin7](https://github.com/jeongmin7) | [tlsrb100](https://github.com/tlsrb100) | [tnals545](https://github.com/tnals545) |



<br />



## 📌배포링크





<br />



## 😊협업과정

본 프로젝트는 하나의 결과물을 내기 위해 동료학습을 중점으로 하여 진행하였습니다. 각자 자신이 구현한 코드에 대해 **'어떠한 목적을 갖고 해당 방식을 선택하여 기능을 구현하였는가'**의 설명과 **팀원들이 구현한 코드에 대한 피드백** 및 리팩토링하는 방식으로 Best Practice를 채택하였습니다.

- Best Pracitce를 찾아가기 전, 최적화된 과정을 찾고자 토론을 통해 아래와 같이 **과제를 나눌 단위**를 지정하였습니다.
  1. **UI** : 컴포넌트의 재사용성, 가독성을 고려한 코드인가
  2. **인증 /인가**
  3. TodoList **CRUD**
  4. **prettier , eslint** 설정
  5. **코드 병합**

- 개발하기에 앞서 초기에 과제를 위와 같이 큰 단위들로 나눈 뒤 같이 프로그래밍하는 방식의 프로세스를 선택하였습니다. 팀원 모두 화면 공유 기능을 사용하며 함께 실시간으로 코드를 작성하며 디버깅하면서 에러에 대해 함께 고민하고 대처하며 다양한 피드백을 주고 받으며 해결해나갔습니다.



<br />

#### 💡팀 코드 컨벤션

- git commit message  컨벤션

| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그, 기능 수정                                              |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| Setting          | prettier, eslint 등 전역 설정 변경, 삭제, 추가하는 경우      |
| ReadMe           | 리드미파일 추가, 수정, 삭제                                  |



<br />





## ✅Best Practice 및 채택 근거

#### 1.폴더구조

- **기능별, 관심사별로 폴더를 생성**하여 파일을 분리해두었기에 **전체 프로젝트의 구조와 기능 파악이 쉽기 때문에** 개발 효율성을 향상시킬 수 있습니다.
- 아래와 같이 api 폴더를 따로 생성해주며 컴포넌트 내에서 api기능이 분리되기 때문에 컴포넌트 자체의 전체적인 기능을 **직관적으로 확인**할 수 있습니다. 

[링크보기↗](https://github.com/hyejineee/wanted-pre-onboarding-frontend)



<br />



#### 2.UI

- 공통적인 스타일 부분의 **코드 중복을 방지하여 재사용성을 높여줍니다.** 이를 통해 클린코드가 가능해지며 개발 작업시간을 단축할 수 있습니다. 
- 전체적으로 통일된 UI를 제공하여 사용자 측면에서 안정감있는 서비스를 사용한다고 느낄 수 있습니다.
- 또한, 전체적으로 공통되는 스타일 중 전체 color등을  theme.jsx 로 따로 관리하여 필요할 때마다 props로 불러와 사용할 수 있는 점에 있어 재사용성이 좋습니다.

[링크 보기↗](https://github.com/YesunPark/wanted-pre-onboarding-frontend)

```jsx
const BoxStyle = ({ bgColor, className, children }) => {
  return (
    <TitleContainer color={bgColor} className={className}>
      {children}
    </TitleContainer>
  );
};
```



<br />

#### 3.유효성검사

- 단순한 메서드만 사용한 것이 아닌 정규표현식을 사용하며 추후에 발생할 에러에 대한 방지 또는 유효성 검사 조건이 추가되더라도 원활히 유지보수가 가능합니다.
- 사전과제가 요구사항으로는 사용자의 불편함을 초래할 수 있으며 보안상의 문제(비밀번호)가 있을 수 있기 때문에  좀 더 구체적인 조건을 추가할 필요성을 충족시켜줍니다.

[링크 보기↗](https://github.com/tnals545/wanted-pre-onboarding-frontend/blob/d58db4fe70272020453956513584e389875e815b/src/pages/LogIn.jsx)

```jsx
// 이메일 유효성 검사
const emailRegex = /([\w-.!#$%&'*+-/=?^_`{|}~]+)@([\w]+\.)([a-zA-Z]{2,4}|[0-9]{1,3})$/;

// 비밀번호 유효성 검사
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
```

<br />



#### 4.인증/인가

- 로그인/회원가입 과정에서 에러가 발생해도 프로그램이 종료되지 않도록 try~catch문을 사용해 예외처리를 하여 각 에러 발생시 에러 종류에 따라 효율적으로 대응할 수 있습니다.
- 에러 핸들링 처리가 없다면 회원가입이 되었는지 알 수 없으며 사용자 입장에서는 불필요한 이유로 계속 회원가입을 시도할 수 있습니다. 또한, auth 관련 api를 한 모듈에 선언해서 import해서 사용하는 방식, 모든 api 요청 함수의 header에 token을 일일이 쓰기보다는 setHeaderToken 함수를 따로 만들어 사용하는 방식, 로그인/회원가입 요청하는 signIn, signUp 함수에 인자 넘겨줄때도 body 변수에 담아서 깔끔하게 처리해주신 부분이 유지보수측면이나 가독성 측면에서 좋다고 생각됩니다.

[링크보기↗](https://github.com/tlsrb100/wanted-pre-onboarding-frontend/blob/355cbd8b0d6ae547b4246e7ac340615394d00ae9/src/components/Auth/InputForm.jsx)

```jsx
const submitLoginInfoHandler = async (body) => {
    try {
      if (selectedButton === '로그인') {
        const res = await signIn(body);
        const accessToken = res.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        alert(`로그인되었습니다`);
        navigate('/todo');
      } else if (selectedButton === '회원가입') {
        const res = await signUp(body);
        const accessToken = res.data.access_token;
        alert(`회원가입되었습니다`);
        localStorage.setItem('accessToken', accessToken);
      }
    } catch (error) {
      alert(`인증 에러 : ${error.response.data.message}`);
    }
  };
```







<br />

#### 5.토큰에 따른 리다이렉트

- 단순히 로그인 → TodoList 로 이동이 아닌 주소창에 바로 todolist로 이동할 url 입력할때를 고려했다는 점이 모든 경우의 수를 생각했다는 점에서 사용자 경험 측면을 굉장히 많이 고려하면서 구현한 로직입니다.
- alert창을 구현하는것은 ux측면에서 꼭 필요한 기능입니다. 왜 “/“창으로 넘어가는지 알 수 없다면 사이트의 오류라고 생각할 수 도 있고 사용자가 불필요한 행동을 반복할 수 있기 때문입니다. 

[링크보기](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/948dbc8f0463c52986ba63cf907175512b092790/src/pages/todo/Todo.jsx)

```jsx
useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/');
    }
  }, [navigate]);
```







<br />

#### 6.CRUD 로직 분리

- api 모듈화를 통해 반복되는 로직을 분리하기때문에 재사용성이 높아지며, 유지보수가 용이합니다. 
- 직관적인 네이밍을 통해 각 함수의 역할에 대해서 이해하기가 쉬우며 이를 바탕으로 다른 개발자들이 보기에, 즉, 협업하기에 명확하여 코드에 대한 이해도를 향상시킵니다.
- axios instance를 생성하고 재사용해서 반복되는 코드를 줄이고자 하였습니다.

[링크보기](https://github.com/tlsrb100/wanted-pre-onboarding-frontend/blob/355cbd8b0d6ae547b4246e7ac340615394d00ae9/src/apis/todo.js)

```jsx
import { apiClient } from './auth';

const createTodo = async (body) => {
  const res = await apiClient.post('/todos', body);
  return res;
};

const getTodo = async () => {
  const res = await apiClient.get('/todos');
  return res;
};

const updateTodo = async (body, id) => {
  const res = await apiClient.put(`/todos/${id}`, body);
  return res;
};

const deleteTodo = async (id) => {
  const res = await apiClient.delete(`/todos/${id}`);
  return res;
};

export { createTodo, getTodo, updateTodo, deleteTodo };
```



<br />



#### 7.not found 페이지

- ux적으로 사용자가 주소를 잘못 입력했을 때 해당페이지를 보여줌으로서 뒤로가기 혹은 주소 수정을 유도해 해당 페이지를 벗어날 수 있도록 해주는 작업이 필요하다고 생각합니다. 또한, 사용자의 편의성을 위해서 꼭 필요하지만 주니어가 놓치기 쉬운 부분을 잘 캐치해서 구현해주셨습니다.
- 유효하지않은 경로 접근시 not found 페이지를 보여주는것이 사용자에게 피드백을 주는것이기 때문에 사용자 경험측면에서 좋은방법이 생각합니다. 또한, 404 페이지를 만듦으로써 프로젝트의 완성도를 높일 수 있습니다.

=> not found 페이지 캡쳐해서 넣으면 될 듯









## 📁폴더구조



<br />

## 🛠사용기술

`React` `Javascript` `react-router-dom` `styled-components` 



<br />

