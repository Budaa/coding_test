import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppNav from 'components/AppNav';
import AppFooter from 'components/AppFooter';
import InfoContainer from 'components/InfoContainer';
import Prompts from 'components/Prompts';
import ProvidersList from 'components/ProvidersList';
import { getProvidersAttempt } from './actions';
import tamplateLogo from '../../assets/images/template-logo.png';
import Banks from '../../utils/banks-const';

import { makeSelectAppName, makeSelectPermisions, makeSelectProviders } from './selectors';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getProvidersAttempt()
  }

  render() {
    const { providers, permisions, appName } = this.props;
    const ContentView = <Prompts.Access {...{ appName, permisions }} />;
    
    console.log(this.props)
    return (
      <div>
        <AppNav
          backButton={false}
          title={'Choose your Bank'}

        />
        <InfoContainer logo={tamplateLogo} {...{ ContentView }} />
        <ProvidersList {...{ providers }} />
        <AppFooter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProvidersAttempt: () => dispatch(getProvidersAttempt()),
});

const mapStateToProps = createStructuredSelector({
  appName: makeSelectAppName(),
  permisions: makeSelectPermisions(),
  providers: makeSelectProviders(),
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

