import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "Advanced",
    color: "#2662EA"
  },
  {
    skill: "CSS",
    level: "Advanced",
    color: "#2662EA"
  },
  {
    skill: "Javascript",
    level: "Intermediate",
    color: "#2662EA"
  },
  {
    skill: "React",
    level: "Advanced",
    color: "#CD3CAF"
  },
  {
    skill: "AWS",
    level: "Beginner",
    color: "aqua"
  },
  {
    skill: "Node.js",
    level: "Beginner",
    color: "cyan"
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "#2662EA"
  }
];

export default function App() {
  return (
    <div className="card">
      <Picture image="./smile.jpg" alt="smile" />
      <div className="data">
        <Title DevName="Isaiah Suarez" />
        <Body
          bodyText="Dear Intake Team, My name is Isaiah, and I am a Full-Stack Developer
        looking for contract work in order to expand my skills in software/web
        development, with the goal of proving to be a reliable and helpful asset
        to a company with my services given. I have been developing skills in
        the digital media industry for the last 5 years, and they have
        culminated with my having various side projects in different leading
        programming languages, examples of the projects can be seen in my GitHub
        account. I am eager to grow and learn, specifically in the front and
        back-end frameworks of software development. As of now, I have
        intermediate knowledge of several frameworks, and a great hunger to
        continually develop these skills. One of my passions in this field is in
        knowing that there will always be room to grow and learn, and that this
        field does not favor a lazy mindset. I have a strong tenacity to find
        solutions for any “bug” issues in a software project that I may
        encounter. I also have positive interpersonal skills, as well as
        references to provide. I appreciate the time you are taking to review my
        submission, and I hope that if you see potential in what I present that
        we can make contact soon."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Title({ DevName }) {
  return (
    <div className="title">
      <h1>{DevName}</h1>
    </div>
  );
}

function Body({ bodyText }) {
  return (
    <div className="data">
      <p>{bodyText}</p>
    </div>
  );
}

function Picture({ image, alt }) {
  return (
    <div className="title">
      <img src={image} alt={alt} />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill1) => (
        <SkillBox
          skill={skill1.skill}
          color={skill1.color}
          level={skill1.level}
        />
      ))}
    </div>
  );
}

function SkillBox({ skill, color, level }) {
  return (
    <div className="newSkill" style={{ background: color }}>
      <span>{skill}</span>
      <span>{level === "Beginner" && "👶"}</span>
      <span>{level === "Intermediate" && "🖖"}</span>
      <span>{level === "Advanced" && "💪"}</span>
    </div>
  );
}
