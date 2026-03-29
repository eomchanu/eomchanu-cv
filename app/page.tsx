type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  paragraphs: string[];
};

type EducationItem = {
  id: string;
  period: string;
  school: string;
  major: string;
};

const summaryParagraphs = [
  "새로운 어려움에 부딪힐 때마다 단단하게 성장한다고 믿는, 프로덕트 중심의 개발자입니다.",
  "iOS 앱 개발(Apple Developer Academy)부터 네트워크/임베디드 시스템 연구(학부연구생), Flutter 기반의 프로덕트 개발(창업 팀 Nookle), 그리고 QA 및 챗봇 에이전트 개발(인턴)까지 다양하고 폭넓은 환경에 뛰어들며 기술적 시야를 넓혀왔습니다.",
  "사용자가 제품이 주는 가치에 온전히 몰입할 수 있도록 만드는 것에 가장 큰 보람을 느낍니다. 이를 위해 낯선 도메인이나 기술적 난관 앞에서도 주저하지 않고, 새로운 기술을 빠르게 익히며 최적의 사용자 경험을 구현하는 과정에 열정을 쏟습니다."
];

const contacts = [
  { label: "GitHub", value: "github.com/eomchanu", href: "https://github.com/eomchanu" },
  { label: "Website", value: "eomchanu.com", href: "https://eomchanu.com" },
  { label: "Email", value: "djacksdn1@icloud.com", href: "mailto:djacksdn1@icloud.com" },
  { label: "Phone", value: "+82 10 2783 7928", href: "tel:+821027837928" }
];

const experiences: ExperienceItem[] = [
  {
    id: "nookle-product-engineer",
    period: "2016.09 - Present",
    company: "Company name",
    paragraphs: [
      "Experience designing Android and iOS apps. An understanding of layout, typography and visual hierarchy.",
      "An understanding balance the needs of editorial, the business, and the user.",
      "Experience designing for responsive web platforms."
    ]
  },
  {
    id: "qa-intern",
    period: "2016.09 - Present",
    company: "Company name",
    paragraphs: [
      "Experience designing Android and iOS apps. An understanding of layout, typography and visual hierarchy.",
      "An understanding balance the needs of editorial, the business, and the user.",
      "Experience designing for responsive web platforms."
    ]
  },
  {
    id: "embedded-researcher",
    period: "2016.09 - Present",
    company: "Company name",
    paragraphs: [
      "Experience designing Android and iOS apps. An understanding of layout, typography and visual hierarchy.",
      "Layout, typography and visual hierarchy.",
      "An understanding balance the needs of editorial, the business, and the user.",
      "Experience designing for responsive web platforms."
    ]
  }
];

const education: EducationItem[] = [
  {
    id: "idaho-state-university",
    period: "2014-2019",
    school: "Idaho State University",
    major: "Business Informatics"
  }
];

const skills = ["Flutter", "SwiftUI", "LangGraph", "Katalon Project", "Git"];

function SectionHeader({ title, index }: { title: string; index: string }) {
  return (
    <div className="section-header">
      <span>{title}</span>
      <span>{index}</span>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="experience-card">
      <p className="meta-text">{item.period}</p>
      <h3>{item.company}</h3>
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
          <section className="intro-column">
            <header className="intro-block">
              <h1>엄찬우</h1>
              <div className="body-copy">
                {summaryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>

            <section className="section-block">
              <SectionHeader title="Contacts" index="01" />
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
          </section>

          <section className="content-panel">
            <div className="main-column">
              <section className="section-block">
                <SectionHeader title="Experience" index="02" />
                <div className="experience-list">
                  {experiences.map((item) => (
                    <ExperienceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>

              <section className="section-block education-block">
                <SectionHeader title="Education" index="03" />
                <div className="education-list">
                  {education.map((item) => (
                    <article className="education-card" key={item.id}>
                      <p className="meta-text">{item.period}</p>
                      <h3>{item.school}</h3>
                      <p>{item.major}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="skills-column">
              <section className="section-block">
                <SectionHeader title="Skills" index="04" />
                <ul className="skills-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            </aside>
          </section>
        </div>
      </article>
    </main>
  );
}
