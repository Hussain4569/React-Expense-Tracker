import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeechProvider appId="3e12fca4-54ff-4b87-9069-807c1284f52f" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  
);

