import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // function that will handle incrementing the count for each feedback
  const handleFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  // total feedback count
  const totalFeedback = good + neutral + bad;

  // average score
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;

  // percentage of positive feedback
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {totalFeedback}</p>
      <p>Average: {averageScore}</p>
      <p>
        Positive: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};

export default App;
