import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
// FeedbackForm Component

function FeedbackForm() {
  // State for form
  const [review, setReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    console.log("fired from form:", review);
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
      <form onSubmit={submitForm}>
        <h2>How would you rate your service with us?</h2>
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
