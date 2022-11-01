import React, { Component } from 'react';
import { BaseLayout } from './layouts/BaseLayout';
import { Button } from './ui/Button';
import { TextField } from './ui/TextField';

class App extends Component {
  render() {
    return (
      <BaseLayout>
        <div style={{ width: 330, margin: 'auto' }}>
          <h1>Sign up</h1>

          <TextField label="First name" name="firstName" />
          <TextField label="Email" name="email" />
          <TextField label="Password" name="password" type="password" />

          <Button>Next <i className='icon-arrow-right'></i></Button>
        </div>
      </BaseLayout>
    );
  }
}

export default App;
