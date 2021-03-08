import React from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(elem => (
        <button
          className={style.button}
          key={genId()}
          type="button"
          name={elem}
          onClick={onLeaveFeedback}
        >
          {elem}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
