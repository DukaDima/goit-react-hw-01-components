import PropTypes from 'prop-types';
import Statistics from './Statistics';

const StatisticsList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li className="item" key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
