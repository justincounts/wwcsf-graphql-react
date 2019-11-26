import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import Presentation from './presentation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
});

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
      <ApolloProvider client={client}>
        <Presentation />
      </ApolloProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
          <ApolloProvider client={client}>
            <NextPresentation />
          </ApolloProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
