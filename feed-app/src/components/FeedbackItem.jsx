// FeedbackItem Component

import { useState } from "react";
function FeedbackItem({ data }) {
  const [rating, setRating] = useState(data.rating);
  const [text, setText] = useState(data.text);

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
