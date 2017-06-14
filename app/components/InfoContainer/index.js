import React from 'react';
import Section from './Section';

const InfoContainer = ( { logo, ContentView } ) => (
  <Section>
    <img src={logo} alt="App logo" />
    {ContentView}
  </Section>
);

InfoContainer.propTypes = {
  logo: React.PropTypes.string,
};

InfoContainer.defaultProp = {
  logo: null,
};

export default InfoContainer;
