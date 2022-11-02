import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layouts/BaseLayout';
import { ErrorPage } from './pages/ErrorPage';
import { MoreInfoPage } from './pages/MoreInfoPage';
import { SignUpPage } from './pages/SignUpPage';
import { SuccessPage } from './pages/SuccessPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<SignUpPage />} />
          <Route path="more-info" element={<MoreInfoPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="error" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
