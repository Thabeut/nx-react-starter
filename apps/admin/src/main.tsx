import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import store from './modules/shared/data/store';
import { FeatureFlagsInitializer } from '@confirma/config';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FeatureFlagsInitializer>
          <App />
        </FeatureFlagsInitializer>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
