import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;

{
  /* <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</section>; */
}
