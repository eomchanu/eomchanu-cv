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
  "이 영역은 추후 정리된 자기소개 문구가 들어갈 예정인 임시 텍스트입니다.",
  "현재는 전체 레이아웃과 문단 흐름만 확인할 수 있도록 무난한 한글 문장으로만 채워두었습니다.",
  "정식 게시 전에는 실제 소개 내용과 어조에 맞게 문장을 다듬고 구체적인 경력 설명도 함께 반영할 계획입니다."
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
