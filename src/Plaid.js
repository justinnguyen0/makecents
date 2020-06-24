import React from 'react';
import { PlaidLink } from 'react-plaid-link';

const App = props => {
  const onSuccess = (token, metadata) => {
    console.log(token);
    console.log(metadata);
  };

  return (
    <PlaidLink
      clientName="Make Cents"
      env="sandbox"
      product={['auth', 'transactions']}
      publicKey="f7b055bc9e0b0c7403e33e3bd5bcb7"
      onSuccess={onSuccess}
      
    >
      Connect a bank account
    </PlaidLink>
  );
};
export default App;