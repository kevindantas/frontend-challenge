import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';

export function SuccessPage() {
  return (
    <Card>
      <h1>Success</h1>
      <p>You should receive a confirmation email soon</p>
      <Link to="/">Restart</Link>
    </Card>
  );
}
