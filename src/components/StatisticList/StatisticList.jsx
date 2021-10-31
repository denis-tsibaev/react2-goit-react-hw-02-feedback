import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem';
import style from './StatisticList.module.css';

const StatisticList = props => {
    const namesKeys = Object.keys(props.state);
    return (
        <ul className={style.statisticList}>
            {namesKeys.map(name => (
                <li key={name.toString()}>
                    <StatisticItem name={name} value={props.state[name]} />
                </li>
            ))}
            <li>Total: {props.total}</li>
            <li>Positive feedbacks: {props.positive}%</li>
        </ul>
    );
};

StatisticList.propTypes = {
    state: PropTypes.objectOf(PropTypes.number.isRequired),
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
};

export default StatisticList;
