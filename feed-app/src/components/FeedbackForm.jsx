import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
// FeedbackForm Component

function FeedbackForm() {
  // State for form
  const [review, setReview] = useState("");

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    console.log("fired from form:", review);
  };

  // Function to handle user entered in text
  const handleTextChange = (e) => {
    const textValue = e.target.value;
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
          <Button type={"submit"} isDisable={false} version={"btn-primary"}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
