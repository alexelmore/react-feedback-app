import Card from "./shared/Card";
// FeedbackItem Component

function FeedbackItem({ data }) {
  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <div className="text-display">{data.text}</div>
    </Card>
  );
}

export default FeedbackItem;
