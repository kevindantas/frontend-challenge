import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formSlice } from '../../app/store/formSlice';
import { basicInfoSelector, moreInfoSelector } from '../../app/store/selectors';
import { useRegisterMutation } from '../../services/accountService';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { Row } from '../../ui/Grid';

export function ConfirmationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, email, password } = useSelector(basicInfoSelector);
  const { color, terms } = useSelector(moreInfoSelector);

  const [register, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (isError) {
      dispatch(formSlice.actions.clear());
      return navigate('/error');
    }

    if (isSuccess) {
      dispatch(formSlice.actions.clear());
      return navigate('/success');
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <Card>
      <h1>Confirmation</h1>

      <div>
        <p>
          <b>First name:</b> {firstName}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Password</b> *****
        </p>
        <p>
          <b>Favorite color:</b> {color}
        </p>
        <p>
          <b>Terms and conditions:</b> {terms ? 'Agreed' : 'Incomplete'}
        </p>
      </div>

      <Row>
        <Button variant="ghost" onClick={() => navigate('/more-info')}>
          Back
        </Button>
        <Button
          isLoading={isLoading}
          onClick={() => {
            register({
              name: firstName,
              email,
              password,
              color,
              terms,
            });
          }}
        >
          Submit
        </Button>
      </Row>
    </Card>
  );
}
