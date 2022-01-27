import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback }) {
  console.log(feedback);
  return (
    <div>
      {feedback.length ? (
        feedback.map((data) => (
          <h2 key={data.id}>
            <FeedbackItem data={data} />
          </h2>
        ))
      ) : (
        <h2>There is no feedback at this time</h2>
      )}
    </div>
  );
}

export default FeedbackList;
