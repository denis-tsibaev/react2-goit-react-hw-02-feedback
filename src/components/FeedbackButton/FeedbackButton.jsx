import PropTypes from 'prop-types';
import style from './FeedbackButton.module.css';

const FeedbackButton = ({ options, OnincreaseFeedback }) => (
    <ul className={style.buttonList}>
        {options.map(option => (
            <li key={option.toString()}>
                <button
                    className={style[option]}
                    name={option}
                    type="button"
                    onClick={OnincreaseFeedback}
                >
                    {option}
                </button>
            </li>
        ))}
    </ul>
);

FeedbackButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackButton;
