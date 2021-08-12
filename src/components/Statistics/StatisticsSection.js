import PropTypes from 'prop-types';
function StatisticsSection({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
};

export default StatisticsSection;
