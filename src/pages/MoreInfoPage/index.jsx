import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { formSlice } from '../../app/store/formSlice';
import { moreInfoSelector } from '../../app/store/selectors';
import { useGetColorsQuery } from '../../services/colorsService';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { CheckboxField } from '../../ui/CheckboxField';
import { CircularSpinner } from '../../ui/CircularSpinner';
import { Row } from '../../ui/Grid';
import { SelectField } from '../../ui/SelectField';

const validationSchema = Yup.object({
  color: Yup.string().required('Required'),
  terms: Yup.bool().oneOf([true], 'The terms and conditions must be accepted.'),
});

export function MoreInfoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetColorsQuery();
  const initialValues = useSelector(moreInfoSelector);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSubmit = values => {
    dispatch(formSlice.actions.saveMoreInfo(values));
    navigate('/confirmation');
  };

  if (error) {
    return <Navigate to="/error" />;
  }

  return (
    <Card>
      <h1>Additional info</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {isLoading ? (
            <CircularSpinner stroke="#0e680e" data-testid="spinner" />
          ) : (
            <SelectField name="color" label="Select your favorite color">
              <option value="">Select your favorite color</option>

              {data.map(color => (
                <option key={color}>{color}</option>
              ))}
            </SelectField>
          )}

          <CheckboxField name="terms">
            I agree to{' '}
            <a
              href="https://www.upgrade.com/funnel/borrower-documents/TERMS_OF_USE"
              target="_blank"
            >
              Terms and Conditions
            </a>
          </CheckboxField>

          <Row>
            <Button variant="ghost" onClick={handleBackClick}>
              Back
            </Button>

            <Button type="submit">
              Next <i className="icon-arrow-right"></i>
            </Button>
          </Row>
        </Form>
      </Formik>
    </Card>
  );
}
