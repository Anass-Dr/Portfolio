import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FirebaseConfig.js';
import '../assets/styles/home.css';
import {
  brushStrock,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  bootstrapIcon,
} from './';

const Header = function () {
  return (
    <header>
      <div className="container">
        <p>Hey, my name is</p>
        <h1>
          Anass <br />
          Drissi
        </h1>
        <img id="header_brush" src={brushStrock} alt="brush-strock" />
        <p id="header_profile">Front-end Developer</p>
        <div id="header_picture"></div>
      </div>
    </header>
  );
};

const SkillFigure = ({ imgSrc, title, perc }) => {
  return (
    <figure className="skills_item">
      <img src={imgSrc} alt="html-icon" />
      <p className="skill_title">{title}</p>
      <p className="skill_percent">{perc}</p>
    </figure>
  );
};

const Skills = function () {
  return (
    <section id="skills_section">
      <div className="container">
        <SkillFigure imgSrc={htmlIcon} title="HTML" perc="80%" />
        <SkillFigure imgSrc={cssIcon} title="CSS" perc="80%" />
        <SkillFigure imgSrc={jsIcon} title="JavaScript" perc="75%" />
        <SkillFigure imgSrc={reactIcon} title="React" perc="70%" />
        <SkillFigure imgSrc={bootstrapIcon} title="Bootstrap" perc="60%" />
      </div>
    </section>
  );
};

const ProjectFigure = ({ img, title, desc }) => {
  return (
    <figure style={{ backgroundImage: `url(${img})` }} className="project">
      <h4>{title}</h4>
      <p>{desc}</p>
    </figure>
  );
};

const Projects = function () {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      querySnapshot.forEach((doc) => {
        setProjects((prev) => [...prev, doc.data()]);
      });
    };

    getProjects();
  }, []);

  return (
    <section id="projects_section">
      <div className="container">
        <h2 id="projects_section-head">My latest projects</h2>
        <p id="projects_section-desc">
          Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
          quis non mauris.
        </p>
        {projects.length !== 0 && (
          <div id="projects_section-body">
            {projects.map((project, idx) => (
              <ProjectFigure
                key={idx}
                img={project.img}
                title={project.title}
                desc={project.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

function HomePage() {
  return (
    <div id="home_page">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePage;
