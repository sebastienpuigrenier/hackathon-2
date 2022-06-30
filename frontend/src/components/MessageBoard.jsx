import React, { useEffect, useState, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import ExportContext from "../contexts/Context";

function MessageBoard({ projectId }) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  const { userContext } = useContext(ExportContext.Context);
  const [isMessageLimited, setIsMessageLimited] = useState(true);
  const [update, setUpdate] = useState(false);
  const [commentLength, setCommentLength] = useState(0);
  const [newComment, setNewComment] = useState({
    firstname: userContext.firstname,
    lastname: userContext.lastname,
    email: userContext.email,
    site: userContext.site,
    project_id: projectId,
    creation_date: today,
  });
  const [comments, setComments] = useState([]);

  function handleChange(event) {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINTUSER = `/users/email/${newComment.email}`;

    api
      .get(ENDPOINTUSER, newComment)
      .then((result) => {
        setNewComment({
          ...newComment,
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
    if (newComment.user_id) {
      const ENDPOINT = "/comments";
      api
        .post(ENDPOINT, newComment)
        .then(() => {
          notifySuccess("Your comment has been added to this project.");
          setUpdate(!update);
        })
        .catch(() => {
          notifyError(
            "A problem occurs. Please check if all element are completed."
          );
        });
    }
  }, [newComment]);

  const moreButton = () => {
    if (commentLength > 5) {
      if (isMessageLimited) {
        return "See more";
      }
      return "Hide messages";
    }
    return "";
  };
  useEffect(() => {
    const ENDPOINT = `/comments/project/${projectId}`;
    api.get(ENDPOINT).then((result) => {
      if (isMessageLimited) {
        setCommentLength(result.data.length);
        setComments(result.data.slice(0, 5));
      } else {
        setComments(result.data);
      }
    });
  }, [isMessageLimited, update]);

  return (
    <div>
      <div style={{ border: "2px solid red" }}>
        {comments.map((comment) => {
          return (
            <div style={{ border: "2px solid green" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                }}
              >
                <div>
                  {comment.firstname} {comment.lastname}
                </div>
                <div>
                  <p> / </p>
                </div>
                <div>
                  {comment.creation_date
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </div>
              </div>
              <div>{comment.comment}</div>
            </div>
          );
        })}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsMessageLimited(!isMessageLimited)}
        >
          {moreButton()}
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} method="post">
          <div>
            <label htmlFor="comment">
              <textarea
                id="comment"
                name="comment"
                placeholder="Type your comment here"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="submit_button">
            <button id="button_newProject" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageBoard;
