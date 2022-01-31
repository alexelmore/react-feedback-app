import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  // Function that handles the deletion of a feedback item
  const deleteFeedBackItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
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
