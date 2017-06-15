import React from 'react';
import BankButton from 'components/BankButton';
import Banks from '../../utils/banks-const';
import Container from './Container';

const ProvidersList = ( { providers } ) => (
  <Container>
    {providers && providers.size &&
      providers.map((provider, key) => <BankButton key={key} alt={provider.get('displayName')} src={Banks[provider.get('connectorId')]} />)
    }
  </Container>
);

export default ProvidersList;
