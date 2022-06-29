import React, { useState, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import projectStatus from "@services/projectStatus.json";
import ExportContext from "../contexts/Context";

function ProjectForm() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  const { userContext } = useContext(ExportContext.Context);
  const [newProject, setnewProject] = useState({
    firstname: userContext.firstname,
    lastname: userContext.lastname,
    email: userContext.email,
    site: userContext.site,
    status: projectStatus[0],
    creation_date: today,
    belonging_site: userContext.site,
  });

  function handleChange(event) {
    setnewProject({
      ...newProject,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    const ENDPOINT = "/projects";
    e.preventDefault();
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
  };

  return (
    <div className="register">
      <h1>Add your own project</h1>

      <div>
        <form onSubmit={handleSubmit} method="post">
          <div className="register_form">
            <div>
              <label htmlFor="title">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Project title"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="customer">
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  placeholder="Customer"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="languages">
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  placeholder="Languages"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="keywords">
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  placeholder="keywords #webdev #javascript"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="goals">
                <textarea
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
