import css from './GridItem.module.css';
export const GridItem = ({ children }) => {
  return <div className={css.item}>{children}</div>;
};
