import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function StatisticsSection({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
};

export default StatisticsSection;
