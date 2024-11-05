import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Posts from './Posts';


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', 
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Welcome to the Posts App</h1>
        <Posts />
      </div>
    </ApolloProvider>
  );
};

export default App;
