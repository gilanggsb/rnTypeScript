/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './src/routes/RootNavigation';
import { storeState } from './src/redux/store';

const App = () => {
  return (
    <Provider store={storeState}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
