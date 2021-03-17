import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProjectList from "../data/project-list";

import workStyles from "../styles/Work.module.css";

const Work = () => {
  // let projects = [...ProjectList];
  const [projects, setProjects] = useState([...ProjectList]);

  const filterProjects = (tag) => {
    document.querySelectorAll(`.${workStyles.pill}`).forEach((pill) => {
      pill.classList.remove(`${workStyles.active}`);
    });
    document
      .querySelector(`#pill_${tag}`)
      .classList.add(`${workStyles.active}`);
    if (tag === "all") {
      setProjects([...ProjectList]);
    } else {
      setProjects(
        ProjectList.filter((project) => {
          return project.tags === tag;
        })
      );
    }
  };
  return (
    <div>
      <Head>
        <title>Work | Arun Arjun</title>
      </Head>
      <div className={workStyles.clients_and_projects}>
        <div className={workStyles.filter_pills}>
          <div
            className={`${workStyles.pill} ${workStyles.active}`}
            data-cursor-interact="true"
            id="pill_all"
            onClick={() => {
              filterProjects("all");
            }}
          >
            All
          </div>
          {[...new Set(ProjectList.map((project) => project.tags))].map(
            (tag) => (
              <div
                className={workStyles.pill}
                id={`pill_${tag}`}
                data-cursor-interact="true"
                key={tag}
                onClick={() => {
                  filterProjects(tag);
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
        <div className={workStyles.gallery} id="project-gallery">
          {projects.map((project, index) => (
            <div
              className={workStyles.gallery_card}
              key={`${index}${project.tags.toString()}`}
            >
              {project.imgSrc ? (
                <Image
                  src={`/${project.imgSrc}`}
                  layout="responsive"
                  width="300"
                  height="200"
                ></Image>
              ) : (
                <video
                  id="my-video-"
                  className={workStyles.video_js}
                  controls
                  preload="auto"
                  src={project.videoSrc}
                ></video>
              )}
              <div className={workStyles.card_content}>{project.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
