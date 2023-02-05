import React from 'react';
import css from './feedback.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options }) => {
  return options.map(({ option, value, handler }) => {
    return (
      <button
        className={css.btn}
        type="button"
        name={option}
        key={option}
        onClick={() => handler(value + 1)}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  // onLeaveFeedback: PropTypes.func,
};
