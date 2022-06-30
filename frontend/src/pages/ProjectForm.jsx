import React, { useState, useContext, useEffect } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { v4 as uuidv4 } from "uuid";
import projectStatus from "@services/projectStatus.json";
import ExportContext from "../contexts/Context";

import "../styles/AddProject.css";

function ProjectForm() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  const projectId = uuidv4();
  const { userContext } = useContext(ExportContext.Context);
  const [newProject, setNewProject] = useState({
    id: projectId,
    firstname: userContext.firstname,
    lastname: userContext.lastname,
    email: userContext.email,
    site: userContext.site,
    status: projectStatus[0],
    creation_date: today,
    belonging_site: userContext.site,
  });

  function handleChange(event) {
    setNewProject({
      ...newProject,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINTUSER = `/users/${newProject.email}`;

    api
      .get(ENDPOINTUSER, newProject)
      .then((result) => {
        setNewProject({
          ...newProject,
          user_id: result.data.id,
        });
      })
      .catch(() => {
        notifyError(
          "A problem occurs. Please check if all element are completed."
        );
      });
  };

  useEffect(() => {
    if (newProject.user_id) {
      const ENDPOINT = "/projects";
      api
        .post(ENDPOINT, newProject)
        .then(() => {
          notifySuccess("Your idea is now propose to apside coworker.");
        })
        .catch(() => {
          notifyError(
            "A problem occurs. Please check if all element are completed."
          );
        });
    }
  }, [newProject]);

  return (
    <div className="register">
      <div className="header-title">
        <h2>add your own project</h2>
      </div>

      <div className="form-add-project">
        <form className="" onSubmit={handleSubmit} method="post">
          <div className="register_form">
            <div className="name-area">
              <label htmlFor="title">
                <input
                  className="name-form"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Project name"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="customer-area">
              <label htmlFor="customer">
                <input
                  className="customer-form"
                  type="text"
                  id="customer"
                  name="customer"
                  placeholder="Customer"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="language-area">
              <label htmlFor="languages">
                <input
                  className="language-form"
                  type="text"
                  id="languages"
                  name="languages"
                  placeholder="Languages"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="keywords-area">
              <label htmlFor="keywords">
                <input
                  className="keywords-form"
                  type="text"
                  id="keywords"
                  name="keywords"
                  placeholder="keywords #webdev #javascript"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="description-area">
              <label htmlFor="description">
                <textarea
                  className="description-form"
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="goals-area">
              <label htmlFor="goals">
                <textarea
                  className="goals-form"
                  id="goals"
                  name="goals"
                  placeholder="Goals"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="submit_button">
              <button id="button_newProject" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProjectForm;
