import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../ui/Button';
import { TextField } from '../../ui/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formSlice } from '../../app/store/formSlice';
import { basicInfoSelector } from '../../app/store/selectors';
import { Card } from '../../ui/Card';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = useSelector(basicInfoSelector);

  const handleSubmit = useCallback(values => {
    dispatch(formSlice.actions.saveBasicInfo(values));
    navigate('/more-info');
  }, []);

  return (
    <Card>
      <h1>Sign up</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <TextField label="First name" name="firstName" />
          <TextField label="Email" name="email" />
          <TextField label="Password" name="password" type="password" />

          <Button type="submit">
            Next <i className="icon-arrow-right"></i>
          </Button>
        </Form>
      </Formik>
    </Card>
  );
}
