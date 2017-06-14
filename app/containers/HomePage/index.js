import React from 'react';
import { connect } from 'react-redux';
import AppNav from 'components/AppNav';
import AppFooter from 'components/AppFooter';
import InfoContainer from 'components/InfoContainer';
import ProvidersList from 'components/ProvidersList';
import { getProvidersAttempt } from './actions';
import tamplateLogo from '../../assets/images/template-logo.png';
import Banks from '../../utils/banks-const';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { providers } = this.props;
    return (
      <div>
        <AppNav
          backButton={false}
          title={'Choose your Bank'}

        />
        <InfoContainer logo={tamplateLogo} />
        <ProvidersList {...{ providers }} />
        <div onClick={() => this.props.getProvidersAttempt()}>dasdasdasdad</div>
        <AppFooter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProvidersAttempt: () => dispatch(getProvidersAttempt()),
});

const mapStateToProps = (state) => ({
  providers: state.home && state.home.providers,
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

