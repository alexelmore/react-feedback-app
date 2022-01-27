// FeedbackItem Component

function FeedbackItem({ data }) {
  return (
    <div className="card">
      <div className="num-display">{data.rating}</div>
      <div className="text-display">{data.text}</div>
    </div>
  );
}

export default FeedbackItem;
