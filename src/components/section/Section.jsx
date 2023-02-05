import React from 'react';
import PropTypes from 'prop-types';
import css from '../section/section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string,
};