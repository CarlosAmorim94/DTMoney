import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes() { // todas as chamas com 'api' i´ra redirecionar ro miragejs
    this.namespace = 'api';

    // Requisições GET terão retorno: 
    this.get('/transactions', () => {
      return [
        {
          id: '1',
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
