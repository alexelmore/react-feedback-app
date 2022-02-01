import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Function that handles the deletion of a feedback item
  const deleteFeedBackItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Function that handles the addition of a new feedback item
  const addFeedBackItem = (item) => {
    item.id = uuidv4();
    setFeedback([item, ...feedback]);
  };

  // Function that handles the editing of a feedback item
  const editFeedBackItem = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
      id: item.id,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedBackItem,
        addFeedBackItem,
        editFeedBackItem,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
