# Oreo_Workation_Project

### [ 워케이션을 즐기는 사람들의 장소 공유 커뮤니티 ](https://oreo-workation-project.vercel.app/)

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [팀소개](#Oreo-소개)
3. [프로젝트 계기](#프로젝트-계기)
4. [주요기능](#주요기능)
5. [개발기간](#개발기간)
6. [기술스택](#기술스택)
7. [와이어프레임](#와이어프레임)
8. [프로젝트 파일 구조](#프로젝트-파일-구조)
9. [Trouble Shooting](#trouble-shooting)
10. [소감한마디](#소감-한-마디)

## 👨‍🏫 프로젝트 소개

- 주제 : 워케이션(Work + vacation의 합성어로, 일을 하면서 휴가를 동시에 즐기는 근무 형태)
- 내용 : “여기가 일하면서 쉬거나 놀기 좋더라~” 자랑과 공유를 동시에 할 수 있고, ‘좋아요’ 버튼을 눌러 놓은 게시물만 따로 볼 수 있다.

## Oreo 소개

|                   김병엽                    |                        안수영                         |                     이석원                      |
| :-----------------------------------------: | :---------------------------------------------------: | :---------------------------------------------: |
|                   O. 팀장                   |                       Re. 팀원                        |                     O. 팀원                     |
|                    ENTJ                     |                         INFJ                          |                      ISTP                       |
|        로그인, 회원가입, 마이페이지         |              디테일페이지, 피드 작성 폼               |                   메인페이지                    |
|   [@BY.log](https://velog.io/@quxx/posts)   | [@ssyeong121.log](https://velog.io/@ssyeong121/posts) | [@coding_Story](https://record165.tistory.com/) |
| [Byoung-yup](https://github.com/Byoung-yup) |         [soo0297](https://github.com/soo0297)         |    [seokwon27](https://github.com/seokwon27)    |

<br>

### [👊 프로젝트 노션 바로가기](https://www.notion.so/teamsparta/5-5-e8dede345edd4fe3940e63dd6a7074c8)

## 프로젝트 계기

1. 디지털 기술의 발전으로 인해 업무 환경의 영향을 덜 받기 때문에 '디지털 노마드' 문화가 생겨남.
2. 코로나 확산으로 인해 원격근무가 늘고, 탄력적인 업무 형태의 필요성이 생김.
3. 사회구성원들이 일과 삶의 균형을 중시하기 시작함.

> 위처럼 사회가 변화하면서 일과 휴가를 동시에 즐기는 근무형태로 '워케이션(Workation)'이 트렌드라는 것을 알게 되었습니다. 이를 즐기는 사람들이 어떤 장소에서 일하기 좋았는지 공유할 수 있으면 좋을 것 같아 만들게 되었습니다.

## 💜 주요기능

#### 1. Supabase를 활용한 CRUD

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![피드작성](https://github.com/user-attachments/assets/6bda9113-9cd5-4438-9385-9024e29e314c)
![피드 수정,삭제](https://github.com/user-attachments/assets/4f30a29d-fb56-4926-ba11-776d276b3c0b)

 <br>
</div>
</details>

- **Create** : 로그인한 유저는 메인페이지 오른쪽 아래에 나타나는 '작성' 버튼을 클릭하여 게시물을 작성할 수 있다.
- **Read** : 작성 후 '업로드하기' 버튼을 클릭하면 메인페이지에 피드에 보여지고, 로그인한 유저가 작성한 게시물만 마이페이지에서 확인할 수 있다.
- **Update** : 마이페이지에서 로그인한 유저의 게시물을 클릭하면 제목과 내용, (이미지)를 수정할 수 있다.
- **Delete** : 마이페이지에서 로그인한 유저의 게시물을 클릭하면 게시물을 삭제할 수 있는 버튼이 있다.

#### 2. Supabase를 활용한 로그인, 회원 가입

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![로그인,회원가입](https://github.com/user-attachments/assets/294f0f0c-fc3f-4996-ba5c-c30802d5bc12)

 <br>
</div>
</details>

- **Login** : 메인페이지 오른쪽 상단에 있는 '로그인' 버튼을 통해 로그인을 할 수 있으며 계정 정보를 전역 상태로 관리한다.
- **Register** : 메인페이지 오른쪽 상단에 있는 '회원가입' 버튼을 통해 가입할 수 있으며 계정 정보가 데이터베이스에 저장된다.

#### 3. 무한스크롤 기능

- intersectionObserver API 로 구현
- 피드섹션 최하단 observe 구역 감지 시 다음 페이지를 렌더링한다.
- 피드의 끝까지 스크롤하여 다음 페이지로 넘길 수 있다.

#### 4. memo, useMemo, useCallback 을 이용한 렌더링 최적화 적용

#### 5. 캐러셀

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![캐러셀](https://github.com/user-attachments/assets/d673c8e2-e996-45c4-a8f1-74b5cdfccfdb)
![코드](https://github.com/user-attachments/assets/1b10c496-e212-484f-8634-dd0c02e3f1e3)

 <br>
</div>
</details>
- 캐러셀 라이브러리를 사용하지 않고 직접 코딩했다.

#### 6. 커스텀 훅을 이용한 모달 사용

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/427cc048-f68c-41cb-8909-b69df9912926)

 <br>
</div>
</details>

- 모달 라이브러리를 사용하지 않고 직접 코딩했다.
- 쓰이는 곳이 많아 커스텀 훅을 만들어 코드를 재사용할 수 있게 되었다.

## ⏲️ 개발기간

- 2024.08.28(수) ~ 2024.09.03(수)

## 📚️ 기술스택

### ✔️ Language

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

### ✔️ Version Control(버전관리)

Git을 이용한 분산버전관리(DVCS)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE(통합개발환경)

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB), `Vite`

### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### ✔️ DBMS

![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

## 와이어프레임

![와이어프레임](https://github.com/user-attachments/assets/f989def1-5086-4d39-ab3f-a9190b23a6f8)

## 프로젝트 파일 구조

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

![파일트리](https://github.com/user-attachments/assets/2d121c9e-699f-4c1b-896a-7aed6a247718)

 <br>
</div>
</details>

## Trouble Shooting

### 1. 로그인 세션관리

- 기존 접근 방법 : 초기 실행 시에만 세션 관리를 통해 전역상태를 관리했다.
- 문제 : 초기에만 실행하므로, 다른 페이지에서 새로고침하면 세션이 증발함.
- 해결방법 : 커스텀 훅을 사용해 다른 페이지에서도 독립적인 세션관리를 통해 로그인 상태를 유지함![session](https://github.com/user-attachments/assets/311f50b8-500a-45e3-b56d-1e95b0e72924)

### 2. 무한스크롤

- 기존 접근 방법 : 피드 최하단에 observer 감지 = 페이지 추가
- 문제 : 피드 데이터가 아직 생기기 전에 observer를 감지 / 출력 메시지에 의해 observer 구역이 뷰포트 안밖을 미친듯이 왔다갔다 함.
- 해결방법 : 로딩 State에 따라 observer가 트리거 되지 않도록 함.![observer](https://github.com/user-attachments/assets/fbcc74f7-faf4-42fb-a9ec-2c37a8aa555b)

### 3. 수파베이스

- 기존 접근 방법 :
- 문제 : 테이블에 publicUrl 값이 null로 들어감.
- 해결방법 : formData부터 콘솔을 한 단계씩 깊게 입력해보면서 undefine 값이 나오는 부분을 찾았다.![publicUrl](https://github.com/user-attachments/assets/78565717-111a-4c31-9808-f995064eb830)

## ❤️ 소감 한 마디

- 김병엽 : 사소한 이슈가 있었지만 포기하지 않고 다들 열심히 해주셔서 만족도 높은 프로젝트가 나온 것 같아 만족스럽습니다.
- 안수영 : 맡은 부분이 너무 어렵고 힘들었는데 포기하지 않도록 잘 이끌어주시고, 모르는 부분 설명도 계속해서 해주셔서 고맙습니다. 끝까지 해낸 사실이 참으로 뿌듯합니다.
- 이석원 : 여유롭지 않은 기간이었지만 기획 회의 내용에 따라 순차적으로 개발되는 과정이 즐겁게 느껴졌습니다.
