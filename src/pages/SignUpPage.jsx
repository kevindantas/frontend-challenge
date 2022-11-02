import React from 'react';
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/Button';
import { TextField } from '../ui/TextField';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      navigate('/more-info');
      console.log(values, null, 2);
    },
  });

  return (
    <div style={{ width: 330, margin: 'auto' }}>
      <h1>Sign up</h1>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="First name"
          name="firstName"
          {...formik.getFieldProps('firstName')}
        />
        <TextField
          label="Email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          {...formik.getFieldProps('password')}
        />

        <Button type="submit">
          Next <i className="icon-arrow-right"></i>
        </Button>
      </form>
    </div>
  );
}
