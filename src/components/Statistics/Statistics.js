import css from './statistics.module.css';
import PropTypes from "prop-types";
import { getRandomHexColor } from 'utilits/randomeColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
  }))
};