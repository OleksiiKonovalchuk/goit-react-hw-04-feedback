import React, { useState } from 'react';
import css from './App.module.css';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
const App = () => {
  const [state, setStates] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const handleState = value => {
    setStates(prevState => {
      return { ...prevState, [value]: prevState[value] + 1 };
    });
  };
  const countPositiveFeedbackPercentage = () => {
    const result = (good / total) * 100;
    return Number(result.toFixed());
  };
  return (
    <div className={css.App}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleState}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
export default App;
