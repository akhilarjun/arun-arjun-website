import Head from "next/head";
import Image from "next/image";
import aboutStyles from "../styles/About.module.css";

const About = ({ education, workExperience }) => {
  return (
    <div>
      <Head>
        <title>About | Arun Arjun</title>
      </Head>
      <div>
        <section className={aboutStyles.section}>
          <div className={aboutStyles.title}>Summary</div>
          <div class="fixed-row">
            <div class="grid-cell-d-7">
              <div className={aboutStyles.big_words}>
                I create. I write. I'm funny and{" "}
                <span class="highlight">I can advertise</span>.
                <br />
                Oh, and also, I love selling brands and making people fall in
                love with them.
              </div>
            </div>
            <div class="grid-cell-d-5">
              <Image
                src="/img/arunarjun.jpeg"
                alt="Arun Arjun About Me Image"
                className={aboutStyles.profile}
                layout="intrinsic"
                height="400"
                width="600"
              ></Image>
              <div className={`fixed-row ${aboutStyles.icon_row}`}>
                <div class="grid-cell-d-1 grid-cell-t-1 grid-cell-m-2">
                  <div className={aboutStyles.icon}>
                    <a
                      href="https://www.linkedin.com/in/arun-arjun-180622197/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./img/linkedin-3-128.png"
                        alt=""
                        data-cursor-interact="true"
                      />
                    </a>
                  </div>
                </div>
                <div class="grid-cell-d-1 grid-cell-t-1 grid-cell-m-2">
                  <div className={aboutStyles.icon}>
                    <a
                      href="https://www.instagram.com/arunarjun_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./img/instagram-128.png"
                        alt=""
                        data-cursor-interact="true"
                      />
                    </a>
                  </div>
                </div>
                <div class="grid-cell-d-1 grid-cell-t-1 grid-cell-m-2">
                  <div className={aboutStyles.icon}>
                    <a
                      href="https://www.facebook.com/parappuratharun"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./img/facebook-128.png"
                        alt=""
                        data-cursor-interact="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={aboutStyles.section}>
          <div className={aboutStyles.title}>Work Experience</div>
          {workExperience.data.map((exp) => (
            <div
              className={aboutStyles.work_experience_card}
              key={exp.duration}
            >
              <div className={aboutStyles.duration}>{exp.duration}</div>
              <div className={aboutStyles.workplace}>{exp.workPlace}</div>
              <div className={aboutStyles.designation}>{exp.designation}</div>
              <div className={aboutStyles.work_summary}>{exp.workSummary}</div>
            </div>
          ))}
        </section>
        <section className={aboutStyles.section}>
          <div className={aboutStyles.title}>Education and Training</div>
          {education.data.map((exp) => (
            <div
              className={aboutStyles.education_card}
              key={exp.courseDuration}
            >
              <div className={aboutStyles.institute_name}>
                {exp.instituteName}
              </div>
              <div className={aboutStyles.course_duration}>
                {exp.courseDuration}
              </div>
              <div className={aboutStyles.course_name}>{exp.courseName}</div>
              <div className={aboutStyles.education_summary}>
                {exp.educationSummary}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://www.arunarjun.com/api/getEducation");
  const education = await res.json();

  const workRes = await fetch("https://www.arunarjun.com/api/getWorkExp");
  const workExperience = await workRes.json();

  return {
    props: {
      education,
      workExperience
    }
  };
}

export default About;
