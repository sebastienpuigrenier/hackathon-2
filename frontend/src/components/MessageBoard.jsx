import React, { useEffect, useState } from "react";

import { api } from "@services/services";

function MessageBoard({ projectId }) {
  const [newComment, setNewComment] = useState({
    projectId,
  });
  const [comments, setComments] = useState([]);

  function handleChange(event) {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    const ENDPOINT = `/comments/project/${projectId}`;
    api.get(ENDPOINT).then((result) => {
      setComments(result.data);
    });
  }, []);

  return (
    <div>
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <div>{comment.comment}</div>
              <div>
                {comment.firstname} {comment.lastname}
              </div>
              <div>{comment.creation_date.slice(0, 10)}</div>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <label htmlFor="new_message">
            <textarea
              id="new_message"
              name="new_message"
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
      </div>
    </div>
  );
}

export default MessageBoard;
