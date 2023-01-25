import React from 'react';
import { NavLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig.js';
import '../assets/styles/home.css';
import {
  brushStrock,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  bootstrapIcon,
  githubIcon,
  footerLogo,
} from './';

const Header = function () {
  return (
    <header>
      <div className="container">
        <div className="col">
          <p>Hey, my name is</p>
          <h1>
            Anass <br />
            Drissi
          </h1>
          <img id="header_brush" src={brushStrock} alt="brush-strock" />
          <p id="header_profile">Front-end Developer</p>
        </div>
        <div className="col">
          <div id="header_picture"></div>
        </div>
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
        <SkillFigure imgSrc={githubIcon} title="Git & GitHub" perc="50%" />
      </div>
    </section>
  );
};

const ProjectFigure = ({ img, title, desc }) => {
  return (
    <figure className="project">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="back_img"
      ></div>
      <div className="wrapper">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </figure>
  );
};

const Projects = function () {
  const [projects, setProjects] = React.useState([]);
  const projectsId = [
    'BcYZJpexIy0p6D9nMo9e',
    '3Jy6E0ckeo78O5x7TUX8',
    'ipSGHH91SzcWakZBa0kW',
    'h4WTAv5BhxWXmpPN4atk',
  ];

  const getProject = async (id) => {
    const docRef = doc(db, 'projects', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { title, description, img } = docSnap.data();
      setProjects((prev) => [
        ...prev,
        {
          title,
          description,
          img,
        },
      ]);
    } else {
      console.log('No such document!');
    }
  };

  React.useEffect(() => {
    projectsId.map((id) => getProject(id));
  }, []);

  return (
    <section id="projects_section" className="container">
      <div className="container">
        <div className="col">
          <div id="projects_section-head">
            <h2 id="projects_section-title">My latest projects</h2>
            <p id="projects_section-desc">
              Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit
              ultrices quis non mauris.
            </p>
          </div>
          {projects.length !== 0 &&
            projects
              .slice(0, 2)
              .map((project, idx) => (
                <ProjectFigure
                  key={idx}
                  img={project.img}
                  title={project.title}
                  desc={project.description}
                />
              ))}
        </div>
        <div className="col">
          {projects.length !== 0 &&
            projects
              .slice(2)
              .map((project, idx) => (
                <ProjectFigure
                  key={idx}
                  img={project.img}
                  title={project.title}
                  desc={project.description}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

const Info = ({ date, heading, field }) => {
  return (
    <figure className="learning_info">
      <h5>{date}</h5>
      <div>
        <h4>{heading}</h4>
        <p>{field}</p>
      </div>
    </figure>
  );
};

const Learning = function () {
  return (
    <section id="learning_section">
      <div className="container">
        <h2>
          Education <span className="learning_info-span">&</span> Certificates
        </h2>
        <div className="info_container">
          <div className="col">
            <Info
              date="2018-2022"
              heading="Fundamental Bachelor's degree in Management"
              field="Faculty of Economics and Management - Settat"
            />
            <Info
              date="2017-2018"
              heading="High school diploma in Physical Sciences"
              field="Ras El Ain's High School - Ras El Ain / Settat"
            />
          </div>
          <hr />
          <div className="col">
            <Info date="Dec 2022" heading="Advanced React" field="Meta" />
            <Info date="Dec 2022" heading="React Basics" field="Meta" />
            <Info
              date="Oct 2022"
              heading="Introduction to Web Development with HTML, CSS,
            JavaScript"
              field="IBM"
            />
            <Info
              date="Aug 2022"
              heading="Getting Started with Git and GitHub"
              field="IBM"
            />
            <Info
              date="Jul 2022"
              heading="Hands-on Introduction to Linux Commands and Shell
            Scripting"
              field="IBM"
            />
            <Info
              date="Apr 2022"
              heading="Python for Data Science, AI & Development"
              field="IBM"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const GoToContact = function () {
  return (
    <section id="go-contact_section">
      <div className="container">
        <div className="wrapper">
          <p>Have a great idea?</p>
          <h2>
            Let’s talk about <br /> your project
          </h2>
          <NavLink to="/contact" className="btn">
            contact me
          </NavLink>
        </div>
        <div className="picture_placeholder"></div>
      </div>
    </section>
  );
};

const Footer = function () {
  return (
    <footer>
      <div className="container">
        <img src={footerLogo} alt="logo" />
        <div className="wrapper">
          <p className="copy">&copy; 2023 - Anass Drissi</p>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="social_links">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function HomePage() {
  return (
    <div id="home_page">
      <Header />
      <Skills />
      <Projects />
      <Learning />
      <GoToContact />
      <Footer />
    </div>
  );
}

export default HomePage;
