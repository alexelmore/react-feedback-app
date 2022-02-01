import { createContext, useState, useEffect } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // State for loading, feedback and feedbackEdit
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Function send a fetch request to db.json
  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:3001/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

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

  // Function that updates the data when user edits an item
  const updateFeedBackItem = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackEdit,
        feedback,
        isLoading,
        deleteFeedBackItem,
        addFeedBackItem,
        editFeedBackItem,
        updateFeedBackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
