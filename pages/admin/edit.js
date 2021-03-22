import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/AuthContext";

import EditStyles from '../../styles/Edit.module.css'

const Edit = ({workExp, education, projects}) => {
  const Router = useRouter();
  const {loggedIn} = useContext(AuthContext);
  const [workExperience, setWorkExperience] = useState([...workExp.data]);
  const [educationArr, setEducation] = useState([...education.data]);
  const [projectsArr, setProjects] = useState([...projects.data]);
  const [accordionHandle, setAccordionHandle] = useState({});

  const setupAccordions = () => {
    const handle = {};
    workExperience.map((w, i) => {handle[`work${i}`] = false});
    educationArr.map((w, i) => {handle[`edu${i}`] = false});
    projectsArr.map((w, i) => {handle[`pro${i}`] = false});
    setAccordionHandle(handle);
  }

  useEffect(() => {
    setupAccordions();
  }, [])

  useEffect(() => {
    if (!loggedIn) {
      Router.push('./login')
    }
  })

  const handleUpdates = (entity, id, field, value) => {
    switch (entity) {
      case "workExp":
        let index = workExperience.findIndex(x => x._id === id);
        if (index != -1) {
          let temp = workExperience.slice();
          if (field === 'delete') {
            temp[index]['updated'] = false;
            temp[index]['new'] = false;
            temp[index]['delete'] = true;
          } else {
            temp[index][field] = value;
            temp[index]['updated'] = true;
          }
          setWorkExperience(temp);
        }
        break;
      case "education":
        let indexEd = educationArr.findIndex(x => x._id === id);
        if (indexEd != -1) {
          let temp = educationArr.slice();
          if (field === 'delete') {
            temp[indexEd]['updated'] = false;
            temp[indexEd]['new'] = false;
            temp[indexEd]['delete'] = true;
          } else {
            temp[indexEd][field] = value;
            temp[indexEd]['updated'] = true;
          }
          setEducation(temp);
        }
        break;
      case "projects":
        let indexProject = projectsArr.findIndex(x => x._id === id);
        if (indexProject != -1) {
          let temp = projectsArr.slice();
          if (field === 'delete') {
            temp[indexProject]['updated'] = false;
            temp[indexProject]['new'] = false;
            temp[indexProject]['delete'] = true;
          } else {
            temp[indexProject][field] = value;
            temp[indexProject]['updated'] = true;
          }
          setProjects(temp);
        }
        break;
      default:
        break;
    }
  }

  const addEntity = (entity) => {
    switch (entity) {
      case "workExp":
        let temp = workExperience.slice();
        setWorkExperience([...temp, {new: true, _id: new Date().getTime()}]);
        break;
      case "education":
        let tempEd = educationArr.slice();
        setEducation([...tempEd, {new: true, _id: new Date().getTime()}]);
        break;
      case "projects":
        let tempProject = projectsArr.slice();
        setProjects([...tempProject, {new: true, _id: new Date().getTime()}]);
        break;
      default:
        break;
    }
    setupAccordions();
  }

  const toggleAccordion = (sel) => {
    accordionHandle[sel] = !accordionHandle[sel];
    setAccordionHandle(Object.assign({}, accordionHandle));
  }

  const saveUpdated = () => {
    fetch ('https://arunarjun.com/api/getWorkExp', {
      method: 'POST',
      body: JSON.stringify(workExperience)
    });``
    fetch ('https://arunarjun.com/api/getEducation', {
      method: 'POST',
      body: JSON.stringify(educationArr)
    });
    fetch ('https://arunarjun.com/api/getProjects', {
      method: 'POST',
      body: JSON.stringify(projectsArr)
    });
  }

  return (
    <div className={EditStyles.edit_page}>
      <h1>Update your Website!</h1>
      <section>
        <div className={EditStyles.title}>
          Work Experience
          <button className={EditStyles.addButton} 
            onClick={() => addEntity('workExp')}> + Add Work Experience</button>
        </div>
        {workExperience.map((work, index) => (
          <div key={work._id} style={{display: work.delete ? "none": "block"}}>
            <div className={EditStyles.card}>
              <div className={EditStyles.card_header} onClick={() => toggleAccordion(`work${index}`)}>
                {accordionHandle[`work${index}`] ? "-" : "+"} Work Experience {index + 1}
                <button onClick={(e) => {handleUpdates('workExp', work._id, 'delete')}}>Delete</button>
              </div>
              <div className={EditStyles.card_content} style={{display: accordionHandle[`work${index}`] ? "block" : "none"}}>
                <input type="text" 
                  defaultValue={work.duration} 
                  placeholder="Duration of work"
                  onChange={(e) => {handleUpdates('workExp', work._id, 'duration', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.workPlace}
                  placeholder="Name of Office" 
                  onChange={(e) => {handleUpdates('workExp', work._id, 'workPlace', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.designation} 
                  placeholder="Your Designation"
                  onChange={(e) => {handleUpdates('workExp', work._id, 'designation', e.target.value)}}/>
                <textarea name="work_summary" id="work_summary" cols="10" rows="5" 
                  defaultValue={work.workSummary} 
                  placeholder="Summary of your work"
                  onChange={(e) => {handleUpdates('workExp', work._id, 'workSummary', e.target.value)}}></textarea>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className={EditStyles.title}>
          Education
          <button className={EditStyles.addButton} 
            onClick={() => addEntity('education')}> + Add Education</button>
        </div>
        {educationArr.map((work, index) => (
          <div key={work._id} style={{display: work.delete ? "none": "block"}}>
            <div className={EditStyles.card}>
              <div className={EditStyles.card_header} onClick={() => toggleAccordion(`edu${index}`)}>
                {accordionHandle[`edu${index}`] ? "-" : "+"} Education Experience {index + 1}
                <button onClick={(e) => {handleUpdates('education', work._id, 'delete')}}>Delete</button>
              </div>
              <div className={EditStyles.card_content} style={{display: accordionHandle[`edu${index}`] ? "block" : "none"}}>
                <input type="text" 
                  defaultValue={work.courseDuration} 
                  placeholder="Course Duration"
                  onChange={(e) => {handleUpdates('education', work._id, 'courseDuration', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.instituteName} 
                  placeholder="Institute Name"
                  onChange={(e) => {handleUpdates('education', work._id, 'instituteName', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.courseName} 
                  placeholder="Course Name"
                  onChange={(e) => {handleUpdates('education', work._id, 'courseName', e.target.value)}}/>
                <textarea name="education_summary" id="education_summary" cols="10" rows="5" 
                  defaultValue={work.educationSummary} 
                  placeholder="Education Course Summary"
                  onChange={(e) => {handleUpdates('education', work._id, 'educationSummary', e.target.value)}}></textarea>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className={EditStyles.title}>
          Projects
          <button className={EditStyles.addButton} 
            onClick={() => addEntity('projects')}> + Add Project</button>
        </div>
        {projectsArr.map((work, index) => (
          <div key={work._id} style={{display: work.delete ? "none": "block"}}>
            <div className={EditStyles.card}>
              <div className={EditStyles.card_header} onClick={() => toggleAccordion(`pro${index}`)}>
                {accordionHandle[`pro${index}`] ? "-" : "+"} Project Post {index + 1}
                <button onClick={(e) => {handleUpdates('projects', work._id, 'delete')}}>Delete</button>
              </div>
              <div className={EditStyles.card_content} style={{display: accordionHandle[`pro${index}`] ? "block" : "none"}}>
                <input type="text" 
                  defaultValue={work.imgSrc} 
                  placeholder="Image Source"
                  onChange={(e) => {handleUpdates('projects', work._id, 'imgSrc', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.videoSrc} 
                  placeholder="Video Source"
                  onChange={(e) => {handleUpdates('projects', work._id, 'videoSrc', e.target.value)}}/>
                <input type="text" 
                  defaultValue={work.tags} 
                  placeholder="Tags for Filter"
                  onChange={(e) => {handleUpdates('projects', work._id, 'tags', e.target.value)}}/>
                <textarea name="post_caption" id="post_caption" cols="10" rows="5" 
                  defaultValue={work.caption} 
                  placeholder="Caption for the post"
                  onChange={(e) => {handleUpdates('projects', work._id, 'caption', e.target.value)}}></textarea>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className={EditStyles.section_footer}>
        <button onClick={saveUpdated}>Save</button>
      </div>
    </div>
  );
};
export default Edit;

export async function getServerSideProps() {
  const workExperienceData = await fetch('https://arunarjun.com/api/getWorkExp');
  const workExp = await workExperienceData.json();
  const educationData = await fetch('https://arunarjun.com/api/getEducation');
  const education = await educationData.json();
  const projectsData = await fetch('https://arunarjun.com/api/getProjects');
  const projects = await projectsData.json();
  return {
    props: {
      workExp,
      education,
      projects
    }
  }
}