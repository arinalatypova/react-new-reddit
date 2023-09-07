import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './index.Template';
import { App } from '../App';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: '' },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
  );
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
