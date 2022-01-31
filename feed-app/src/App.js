import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  // Function that handles the deletion of a feedback item
  const deleteFeedBackItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  // Function that handles the addition of a new feedback item
  const addFeedBackItem = (item) => {
    item.id = uuidv4();
    setFeedBack([item, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedBackItem} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={(id) => deleteFeedBackItem(id)}
        />
      </div>
    </>
  );
}

export default App;
