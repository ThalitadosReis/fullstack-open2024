import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positivePercentage}%`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

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
    setFeedbackGiven(true);
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
      <Button handleClick={() => handleFeedback("good")} text="Good" />
      <Button handleClick={() => handleFeedback("neutral")} text="Neutral" />
      <Button handleClick={() => handleFeedback("bad")} text="Bad" />

      <h1>Statistics</h1>
      {feedbackGiven ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          average={averageScore}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
