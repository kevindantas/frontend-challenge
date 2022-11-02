import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetColorsQuery } from '../services/colorsService';
import { Button } from '../ui/Button';

export function MoreInfoPage() {
  const { data, error, isLoading } = useGetColorsQuery();
  console.log(data);

  if (error) {
    return <Navigate to="/error" />;
  }

  return (
    <div style={{ width: 330, margin: 'auto' }}>
      <h1>Additional info</h1>

      {isLoading ? null : (
        <select>
          <option>Select your favorite color</option>

          {data.map(color => (
            <option key={color}>{color}</option>
          ))}
        </select>
      )}

      <label>
        <input type="checkbox" />I agree to{' '}
        <a
          href="https://www.upgrade.com/funnel/borrower-documents/TERMS_OF_USE"
          target="_blank"
        >
          Terms and Conditions
        </a>
      </label>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button>
          <i className="icon-arrow-left"></i>
          Back
        </Button>

        <Button>
          Next <i className="icon-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}
