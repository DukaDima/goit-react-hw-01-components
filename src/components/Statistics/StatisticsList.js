import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(item => (
        <li className={s.item} key={item.id}>
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
