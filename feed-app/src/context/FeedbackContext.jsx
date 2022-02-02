import { createContext, useState, useEffect } from "react";

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

  // Function that sends a GET fetch request to db.json
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
  const addFeedBackItem = async (item) => {
    // Make a POST fetch request and add item that user submitted to json.db
    const response = await fetch("http://localhost:3001/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
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
