<h1 align="center">PTManager</h1>

<p align="center">
  <b>소규모 매장의 근무 관리를 단톡방과 종이 근무표에서 앱 하나로 옮깁니다</b><br/>
  대타·근태·스케줄을 직원 앱 · 사장 앱이 공유하는 풀스택 팀 프로젝트
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin"/>
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android"/>
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
</p>

<p align="center">
  <a href="https://github.com/PTManager/Backend">Backend</a> /
  <a href="https://github.com/PTManager/Frontend-Employee">Employee App</a> /
  <a href="https://github.com/PTManager/Frontend-Employer">Employer App</a>
</p>

---

## 프로젝트 소개 · 핵심 기능

<p align="center">
  <img src="../assets/project-overview.svg" width="100%" alt="PTManager 프로젝트 소개 및 핵심 기능"/>
</p>

## 시스템 아키텍처

<p align="center">
  <img src="../assets/architecture.svg" width="100%" alt="PTManager 시스템 아키텍처"/>
</p>

- 직원 앱 · 사장 앱이 **같은 백엔드를 공유**하고 JWT 토큰의 역할로 화면을 분리
- 백엔드는 도메인별 모듈 구성 (auth · user · workplace · shift · swaprequest · payroll · notice · joinrequest · notification)
- 운영은 PostgreSQL + Flyway, 로컬/테스트는 H2, FCM·S3는 설정으로 켜는 스텁 구조

## 앱 화면

### 직원용 앱

| 홈 | 스케줄 | 소통 | 통계 | 마이 |
|---|---|---|---|---|
| <img src="../assets/Employee/01-home.png" width="180" alt="직원용 앱 홈 화면"/> | <img src="../assets/Employee/02-schedule.png" width="180" alt="직원용 앱 스케줄 화면"/> | <img src="../assets/Employee/03-communication.png" width="180" alt="직원용 앱 소통 화면"/> | <img src="../assets/Employee/04-stats.png" width="180" alt="직원용 앱 통계 화면"/> | <img src="../assets/Employee/05-my.png" width="180" alt="직원용 앱 마이 화면"/> |

### 사장용 앱

| 홈 | 스케줄 | 소통 | 통계 | 마이 |
|---|---|---|---|---|
| <img src="../assets/Employer/01-home.png" width="180" alt="사장용 앱 홈 화면"/> | <img src="../assets/Employer/02-schedule.png" width="180" alt="사장용 앱 스케줄 화면"/> | <img src="../assets/Employer/03-communication.png" width="180" alt="사장용 앱 소통 화면"/> | <img src="../assets/Employer/04-stats.png" width="180" alt="사장용 앱 통계 화면"/> | <img src="../assets/Employer/05-my.png" width="180" alt="사장용 앱 마이 화면"/> |

## 팀 구성

<table>
  <tr><td align="center"><a href="https://github.com/ken-jeong"><img src="https://github.com/ken-jeong.png" width="60px" alt="정상겸"/></a></td><td><b>정상겸</b><br/><sub>Leader · Full-stack</sub></td><td>양쪽 앱 화면/API 연동 전반</td></tr>
  <tr><td align="center"><a href="https://github.com/Movinggun-bit"><img src="https://github.com/Movinggun-bit.png" width="60px" alt="이동건"/></a></td><td><b>이동건</b><br/><sub>Full-stack · Infra</sub></td><td>백엔드 코어 (인증·RBAC·REST API) · CI/CD</td></tr>
  <tr><td align="center"><a href="https://github.com/pinoba"><img src="https://github.com/pinoba.png" width="60px" alt="김병수"/></a></td><td><b>김병수</b><br/><sub>Backend</sub></td><td>회전형 QR · 공지 첨부파일</td></tr>
  <tr><td align="center"><a href="https://github.com/dkflfkd-cmyk"><img src="https://github.com/dkflfkd-cmyk.png" width="60px" alt="정윤아"/></a></td><td><b>정윤아</b><br/><sub>Frontend</sub></td><td>직원용 앱 - 인수인계 노트 · 화면 디자인</td></tr>
  <tr><td align="center"><a href="https://github.com/rlacodms24-afk"><img src="https://github.com/rlacodms24-afk.png" width="60px" alt="김채은"/></a></td><td><b>김채은</b><br/><sub>Frontend</sub></td><td>사장용 앱 - 인수인계 노트</td></tr>
</table>
