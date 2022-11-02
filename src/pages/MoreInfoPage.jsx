import React from 'react';
import { Button } from '../ui/Button';
import { TextField } from '../ui/TextField';

export function MoreInfoPage() {
  return (
    <div style={{ width: 330, margin: 'auto' }}>
      <h1>Additional info</h1>

      <TextField label="First name" name="firstName" />
      <TextField label="Email" name="email" />
      <TextField label="Password" name="password" type="password" />

      <Button>
        Next <i className="icon-arrow-right"></i>
      </Button>
    </div>
  );
}
