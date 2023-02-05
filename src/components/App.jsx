import React, { useState } from 'react';
import css from './App.module.css';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const states = [
    { option: 'good', value: good, handler: setGood },
    { option: 'neutral', value: neutral, handler: setNeutral },
    { option: 'bad', value: bad, handler: setBad },
  ];
  const countPositiveFeedbackPercentage = () => {
    const result = (good / total) * 100;
    return Number(result.toFixed());
  };
  return (
    <div className={css.App}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={states} />
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
