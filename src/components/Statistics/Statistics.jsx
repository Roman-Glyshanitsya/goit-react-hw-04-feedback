import PropTypes from 'prop-types';
import {List, Item} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <List>
            <Item>
                <p>Good :</p>
                <p>{good}</p>
            </Item>
            <Item>
                <p>Neutral :</p>
                <p>{neutral}</p>
            </Item>
            <Item>
                <p>Bad :</p>
                <p>{bad}</p>
            </Item>
            <Item>
                <p>Total :</p>
                <p>{total}</p>
            </Item>
            <Item>
                <p>Positive feedback :</p>
                <p>{positivePercentage}%</p>
            </Item>
        </List>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};