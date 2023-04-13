import React from 'react'
import { ApolloClient , gql, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const host = 'http://localhost:4000';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: host }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
