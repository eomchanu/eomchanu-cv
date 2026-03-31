type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  role?: string;
  paragraphs: string[];
};

type EducationItem = {
  id: string;
  period: string;
  school: string;
  major: string;
  details?: string[];
};

const summaryParagraphs = [
  "쏟아지는 도구들 사이에서, ‘어떻게'를 넘어 ‘무엇을' 해결할지에 집중합니다.",
  "몰입하면 끝을 봐야 직성이 풀리고, 사용자 경험의 작은 어색함도 그냥 넘기지 못합니다."
];

const contacts = [
  { label: "Website", value: "eomchanu.com", href: "https://eomchanu.com" },
  { label: "GitHub", value: "github.com/eomchanu", href: "https://github.com/eomchanu" },
  { label: "Email", value: "djacksdn1@icloud.com", href: "mailto:djacksdn1@icloud.com" },
  { label: "Phone", value: "+82 10 2783 7928", href: "tel:+821027837928" },
];

const experiences: ExperienceItem[] = [
  {
    id: "ddok-company-intern",
    period: "2026.01 - Present",
    company: "똑똑주식회사",
    role: "Intern",
    paragraphs: [
      "LangGraph 기반 챗봇 에이전트 개발 및 고도화 담당",
      "기존 단방향 그래프 구조로는 처리하기 어려웠던 복합 질문에 대응하기 위해, 다중 API 호출을 조합할 수 있는 루프 구조를 설계해 챗봇 응답 커버리지를 확장",
      "Katalon을 활용한 회귀 테스트 스크립트 작성 및 E2E 테스트 모니터링",
      "네트워크 요청 완료 전 UI 인터랙션이 실행되며 발생하던 flaky test 문제를 분석하고, 네트워크 idle 상태를 확인한 뒤 다음 동작을 수행하는 Groovy 커스텀 키워드(SmartWait)를 구현해 회귀 테스트 안정성을 높이고 테스트 유지보수 비용을 절감"
    ]
  },
  {
    id: "nookle-mobile-developer",
    period: "2025.11 - Present",
    company: "누클",
    role: "Mobile App. Developer",
    paragraphs: [
      "고객용 모바일 앱 단독 개발",
      "Riverpod AsyncNotifier와 GoRouter 기반으로 인증 상태, 화면 전환, 비동기 요청 흐름을 분리해 관리 가능한 구조를 설계",
      "낙관적 UI 업데이트와 아이템별 락킹 패턴을 적용해 즐겨찾기 기능의 동시성 문제를 해결하고 데이터 일관성을 유지"
    ]
  },
  {
    id: "embedded-researcher",
    period: "2024.12 - 2025.03",
    company: "중앙대학교 네트워크시스템 연구실",
    role: "학부연구생",
    paragraphs: [
      "네트워크, IoT, 임베디드 시스템 관련 논문 학습 및 세미나 발표"
    ]
  },
  {
    id: "apple-developer-academy",
    period: "2024.03 - 2024.12",
    company: "Apple Developer Academy @ POSTECH",
    role: "Junior Learner",
    paragraphs: [
      "개발을 포함한 기획, 디자인, 비즈니스 등 전반적인 프로덕트 생산 과정 경험",
      "앱 스토어 출시 및 사용자 피드백 기반 유지보수"
    ]
  }
];

const education: EducationItem[] = [
  {
    id: "chungang-university",
    period: "2019 - Present",
    school: "중앙대학교",
    major: "소프트웨어학부",
    details: ["학년 우수 장학금 2회 수혜", "컴퓨터 통신, 운영체제, 멀티코어 컴퓨팅 등 주요 전공 과목 수석 이수"]
  }
];

const skills = ["Flutter / Dart", "SwiftUI", "React", "LangGraph", "Git", "Figma"];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="section-header">
      <span>{title}</span>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="experience-card">
      <p className="meta-text">{item.period}</p>
      <h3 className="hover-echo">{item.company}</h3>
      {item.role ? <p className="role-text">{item.role}</p> : null}
      <div className="body-copy">
        {item.paragraphs.map((paragraph) => (
          <p key={`${item.id}-${paragraph}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <article className="resume-sheet">
        <div className="resume-grid">
          <section className="intro-column reveal-block reveal-block-1">
            <header className="intro-block">
              <h1 className="hover-echo">엄찬우</h1>
              <div className="body-copy">
                {summaryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>

            <section className="section-block contacts-block">
              <SectionHeader title="Contacts" />
              <ul className="contact-list">
                {contacts.map((contact) => (
                  <li key={contact.label}>
                    <a href={contact.href} target="_blank" rel="noreferrer">
                      {contact.value}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="section-block education-block">
              <SectionHeader title="Education" />
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-card" key={item.id}>
                    <p className="meta-text">{item.period}</p>
                    <h3 className="hover-echo">{item.school}</h3>
                    <p className="role-text">{item.major}</p>
                    {item.details ? (
                      <div className="body-copy">
                        {item.details.map((detail) => (
                          <p key={`${item.id}-${detail}`}>{detail}</p>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block skills-block">
              <SectionHeader title="Skills" />
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          </section>

          <section className="main-column reveal-block reveal-block-2">
            <section className="section-block">
              <SectionHeader title="Experience" />
              <div className="experience-list">
                {experiences.map((item) => (
                  <ExperienceCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          </section>
        </div>
      </article>
    </main>
  );
}
