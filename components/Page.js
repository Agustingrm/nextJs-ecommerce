import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <p>This is the Page Component</p>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
