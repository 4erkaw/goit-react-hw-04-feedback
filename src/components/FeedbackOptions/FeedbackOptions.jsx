import PropTypes from 'prop-types';
import shortid from 'shortid';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onFeedback, options }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          name={option.toLowerCase()}
          onClick={onFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};

/* <button name="good" type="button" onClick={onFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onFeedback}>
        Bad
      </button> */
