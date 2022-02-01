import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
// FeedbackForm Component

function FeedbackForm({ handleAdd }) {
  // State for form
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  // Context provider for global item state
  const { addFeedBackItem, feedbackEdit } = useContext(FeedbackContext);

  // UseEffect hook to watch feedbackEdit for changes
  useEffect(() => {
    console.log(feedbackEdit);
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setReview(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length >= 10) {
      const newFeedback = {
        text: review,
        rating,
      };
      addFeedBackItem(newFeedback);
      setRating(10);
      setReview("");
    }
  };

  // Function to handle user entered in text
  const handleTextChange = (e) => {
    const textValue = e.target.value;
    if (textValue === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (textValue !== "" && textValue.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage("");
    } else {
      setBtnDisabled(true);
      setMessage("Your review must be at least 10 characters long.");
    }
    setReview(textValue);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={review}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
