import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { List, Item, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  console.log(total);
  const totalFeedback = total();
  const positivePercent = positivePercentage();

  return (
    <div>
      {totalFeedback ? (
        <List>
          <Item>
            <p>
              Good: <Value>{good}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Neutral: <Value>{neutral}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Bad: <Value>{bad}</Value>
            </p>
          </Item>{' '}
          <Item>
            <p>
              Total: <Value>{totalFeedback}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Positive feedback: <Value>{positivePercent}%</Value>
            </p>
          </Item>
        </List>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
