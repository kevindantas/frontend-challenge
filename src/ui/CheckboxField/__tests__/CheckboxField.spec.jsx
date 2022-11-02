import { render } from '@testing-library/react';
import { useField } from 'formik'; // package will be auto mocked

import { CheckboxField } from '..';

jest.mock('formik'); // formik package is auto mocked

describe('CheckboxField component', () => {
  it('should render input and children', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'test',
    };
    useField.mockReturnValue([mockField, mockMeta]);

    const { getByText, getByTestId } = render(
      <CheckboxField name="test">
        Test <a>with a link</a>
      </CheckboxField>,
    );

    expect(getByTestId('checkbox-input')).toBeDefined();
    expect(getByText('with a link')).toBeDefined();
  });

  it('should render error from Formik', () => {
    const mockMeta = {
      touched: true,
      error: 'Error message',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'test',
    };
    useField.mockReturnValue([mockField, mockMeta]);

    const { getByText } = render(<CheckboxField name="test" label="Test" />);

    expect(getByText('Error message')).toBeDefined();
  });
});
