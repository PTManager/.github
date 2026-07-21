const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const employeeScreens = [
  ["홈", asset("/EmployeeApp/01_home.png")],
  ["스케줄", asset("/EmployeeApp/02_schedule.png")],
  ["소통", asset("/EmployeeApp/03_communication.png")]
];

const employerScreens = [
  ["홈", asset("/EmployerApp/01_home.png")],
  ["스케줄", asset("/EmployerApp/02_schedule.png")],
  ["통계", asset("/EmployerApp/04_stats.png")]
];

const features = [
  ["01", "대타 워크플로우", "요청부터 지원, 승인까지. 단톡방에서 놓치던 결원을 명확한 상태로 처리합니다."],
  ["02", "QR 근태", "전용 기기 없이 매장 QR만으로 출퇴근을 기록하고 근태 현황을 확인합니다."],
  ["03", "스케줄 공유", "사장이 편성한 근무를 직원이 바로 확인하고, 변경 사항을 같은 정보로 공유합니다."],
  ["04", "매장 커뮤니케이션", "공지와 인수인계, 알림을 업무 맥락과 함께 남겨 다음 근무자에게 연결합니다."]
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">본문으로 건너뛰기</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PTManager 홈">
          <span className="brand-mark">P</span>
          <span>PTManager</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#why">소개</a>
          <a href="#features">기능</a>
          <a href="#screens">화면</a>
          <a href="#architecture">구조</a>
        </nav>
        <a className="header-cta" href="https://github.com/PTManager" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SMALL STORE, ONE FLOW</p>
          <h1>매장 운영,<br /><em>단톡방 밖으로.</em></h1>
          <p className="hero-description">대타·근태·스케줄을 직원 앱과 사장 앱이 함께 공유하는 소규모 매장 전용 근무 관리 서비스입니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="#features">프로젝트 살펴보기</a>
            <a className="button secondary" href="https://github.com/PTManager" target="_blank" rel="noreferrer">소스 코드 보기 ↗</a>
          </div>
          <ul className="hero-points" aria-label="주요 장점">
            <li>하드웨어 없이 시작</li>
            <li>직원·사장 역할 분리</li>
            <li>하나의 백엔드</li>
          </ul>
        </div>
        <div className="hero-visual" aria-label="PTManager 직원용과 사장용 앱 화면">
          <div className="glow" />
          <div className="phone phone-back">
            <span className="phone-label">사장용</span>
            <img src={asset("/EmployerApp/01_home.png")} alt="사장용 앱 홈 화면" />
          </div>
          <div className="phone phone-front">
            <span className="phone-label">직원용</span>
            <img src={asset("/EmployeeApp/01_home.png")} alt="직원용 앱 홈 화면" />
          </div>
          <div className="floating-card card-swap"><b>대타 요청</b><span>지원 → 승인</span></div>
          <div className="floating-card card-qr"><b>QR 출근</b><span>기기 없이 빠르게</span></div>
        </div>
      </section>

      <section className="problem section" id="content">
        <div className="problem-before">
          <p className="section-kicker">BEFORE</p>
          <h2>흩어진 정보가<br />매장 운영을 늦춥니다.</h2>
          <div className="problem-tags"><span>단톡방</span><span>종이 근무표</span><span>구두 인수인계</span></div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="problem-after" id="why">
          <p className="section-kicker">WITH PTMANAGER</p>
          <h2>필요한 업무를<br />하나의 흐름으로.</h2>
          <p>요청과 변경을 기록하고, 역할에 맞는 화면으로 같은 정보를 실시간 공유합니다.</p>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="section-heading">
          <div><p className="section-kicker">CORE FEATURES</p><h2>매일 쓰는 기능만,<br />명확하게.</h2></div>
          <p>사장 한 명이 편성·승인·정산을 처리하는 소규모 매장의 현실에 맞췄습니다.</p>
        </div>
        <div className="feature-grid">
          {features.map(([number, title, description]) => (
            <article className="feature-card" key={number}>
              <span className="feature-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screens section" id="screens">
        <div className="section-heading light">
          <div><p className="section-kicker">REAL SCREENS</p><h2>역할은 달라도,<br />경험은 하나로.</h2></div>
          <p>직원은 필요한 정보를 빠르게 확인하고, 사장은 매장 전체 흐름을 놓치지 않습니다.</p>
        </div>
        <div className="screen-group">
          <div className="screen-group-title"><span>Employee</span><p>직원용 앱</p></div>
          <div className="screen-row">
            {employeeScreens.map(([label, src]) => <figure key={src}><img src={src} alt={`직원용 앱 ${label} 화면`} /><figcaption>{label}</figcaption></figure>)}
          </div>
        </div>
        <div className="screen-group employer-group">
          <div className="screen-group-title"><span>Employer</span><p>사장용 앱</p></div>
          <div className="screen-row">
            {employerScreens.map(([label, src]) => <figure key={src}><img src={src} alt={`사장용 앱 ${label} 화면`} /><figcaption>{label}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div className="section-heading">
          <div><p className="section-kicker">ARCHITECTURE</p><h2>두 앱을 잇는<br />하나의 백엔드.</h2></div>
          <p>Kotlin으로 구성된 Android 앱과 Spring Boot API가 역할 기반 데이터를 안전하게 나눕니다.</p>
        </div>
        <div className="architecture-map">
          <div className="arch-node arch-app"><span>ANDROID</span><b>직원용 앱</b><small>Kotlin · Retrofit</small></div>
          <div className="arch-node arch-app"><span>ANDROID</span><b>사장용 앱</b><small>Kotlin · Retrofit</small></div>
          <div className="arch-connector"><span>REST API · JWT</span></div>
          <div className="arch-node arch-backend"><span>SERVER</span><b>Backend API</b><small>Spring Boot · Security</small></div>
          <div className="arch-storage">
            <div><b>PostgreSQL</b><small>Flyway · H2</small></div>
            <div><b>FCM Push</b><small>선택 활성화</small></div>
            <div><b>S3 Storage</b><small>선택 활성화</small></div>
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="section-kicker">OPEN SOURCE TEAM PROJECT</p>
        <h2>작은 매장의 하루가<br /><em>더 단순해지도록.</em></h2>
        <p>PTManager의 코드와 개발 과정을 GitHub에서 확인하세요.</p>
        <div className="repo-links">
          <a href="https://github.com/PTManager/Backend" target="_blank" rel="noreferrer"><span>API</span><b>Backend</b>↗</a>
          <a href="https://github.com/PTManager/Frontend-Employee" target="_blank" rel="noreferrer"><span>APP</span><b>Employee</b>↗</a>
          <a href="https://github.com/PTManager/Frontend-Employer" target="_blank" rel="noreferrer"><span>APP</span><b>Employer</b>↗</a>
        </div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">P</span><span>PTManager</span></a><p>소규모 매장을 위한 근무 관리</p><span>© 2026 PTManager</span></footer>
    </main>
  );
}
