import React from 'react';
import Section from './Section';
import Title from './Title';
import HelpButton from '../HelpButton';
import SidesWrapper from './SidesWrapper';

class AppNav extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Section>
      <SidesWrapper />
        <Title>
          {title}
        </Title>
        <SidesWrapper>
          <HelpButton>?</HelpButton>
        </SidesWrapper>
      </Section>
    );
  }
}

AppNav.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default AppNav;
