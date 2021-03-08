import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul className={style.listFeedback}>
        <li className={style.feedbackValue}>Good: {good}</li>
        <li className={style.feedbackValue}>Neutral: {neutral}</li>
        <li className={style.feedbackValue}>Bad: {bad}</li>
        <li className={style.feedbackValue}>Total: {total}</li>
        <li className={style.feedbackValue}>Positive feedback: {positive}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
