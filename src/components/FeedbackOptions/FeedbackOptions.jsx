import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onFeedback }) {
  return (
    <div className={s.container}>
      <button name="good" type="button" onClick={onFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};
