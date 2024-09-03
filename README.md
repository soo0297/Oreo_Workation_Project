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

## 👨‍🏫 프로젝트 소개

- 주제 : 워케이션(Work + vacation의 합성어로, 일을 하면서 휴가를 동시에 즐기는 근무 형태)
- 내용 : “여기가 일하면서 쉬거나 놀기 좋더라~” 자랑과 공유를 동시에 할 수 있고, ‘좋아요’ 버튼을 눌러 놓은 게시물만 따로 볼 수 있다.

## Oreo 소개

|                   김병엽                    |                        안수영                         |                     이석원                      |
| :-----------------------------------------: | :---------------------------------------------------: | :---------------------------------------------: |
|                   O. 팀장                   |                       Re. 팀원                        |                     O. 팀원                     |
|                    ENTJ                     |                         INFJ                          |                      ISTP                       |
|   [@BY.log](https://velog.io/@quxx/posts)   | [@ssyeong121.log](https://velog.io/@ssyeong121/posts) | [@coding_Story](https://record165.tistory.com/) |
| [Byoung-yup](https://github.com/Byoung-yup) |         [soo0297](https://github.com/soo0297)         |    [seokwon27](https://github.com/seokwon27)    |

<br>

### [👊 프로젝트 노션 바로가기](https://www.notion.so/teamsparta/5-5-e8dede345edd4fe3940e63dd6a7074c8)

## 프로젝트 계기

개발자들이 재택근무 형태가 많은데, 일과 휴가를 동시에 즐기는 근무형태로 '워케이션(Workation)'이 트렌드라는 것을 알게 되었습니다. 이를 즐기는 사람들이 어떤 장소에서 일하기 좋았는지 공유할 수 있으면 좋을 것 같아 만들게 되었습니다.

## 💜 주요기능

#### 1. Supabase를 활용한 CRUD

- **Create** : 로그인한 유저는 메인페이지 오른쪽 아래에 나타나는 '작성' 버튼을 클릭하여 게시물을 작성할 수 있다.
- **Read** : 작성 후 '업로드하기' 버튼을 클릭하면 메인페이지에 피드에 보여진다.
- **Update** : 마이페이지에서 로그인한 유저의 게시물을 클릭하면 제목과 내용, (이미지)를 수정할 수 있다.
- **Delete** : 마이페이지에서 로그인한 유저의 게시물을 클릭하면 게시물을 삭제할 수 있는 버튼이 있다.

#### 2. Supabase를 활용한 로그인, 회원 가입

- **Login** : '로그인' 버튼을 통해 로그인을 할 수 있으며 계정 정보를 전역 상태로 관리한다.
- **Register** : '회원가입' 버튼을 통해 가입할 수 있으며 계정 정보가 데이터베이스에 저장된다.

#### 3. 마이 페이지에서 내 게시물 보기

- **Read** : 사용자 계정에 따라 본인의 게시물을 확인할 수 있다.
- **Update** : 게시물 버튼을 통해 해당 게시물을 수정할 수 있다.
- **Delete** : 게시물 버튼을 통해 해당 게시물을 삭제할 수 있다.

#### 4. 무한스크롤 기능

#### 5. memo, useMemo, useCallback 을 이용한 렌더링 최적화 적용

## ⏲️ 개발기간

- 2024.08.28(수) ~ 2024.09.03(수)

## 📚️ 기술스택

### ✔️ Language

Javascript

### ✔️ Version Control(버전관리)

Git을 이용한 분산버전관리(DVCS)

### ✔️ IDE(통합개발환경)

Visual Studio

### ✔️ Framework

React, Vite

### ✔️ Deploy

Vercel

### ✔️ DBMS

Supabase

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
