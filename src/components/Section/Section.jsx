import PropTypes from 'prop-types';

import { WrapperSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <WrapperSection>
      <Title>{title}</Title>
      {children}
    </WrapperSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
