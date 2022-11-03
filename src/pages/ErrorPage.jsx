import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';

export function ErrorPage() {
  return (
    <Card>
      <h1>Error</h1>
      <p>uh oh, something went wrong. Please try again later</p>
      <Link to="/">Restart</Link>
    </Card>
  );
}
