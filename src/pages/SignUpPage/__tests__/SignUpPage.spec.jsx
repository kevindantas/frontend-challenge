import { SignUpPage } from '..';
import { renderWithProviders } from '../../../testing/testUtils';

describe('SignUpPage', () => {
  it('should have errors submitting invalid form', async () => {
    const { getByText, getAllByText, user } = renderWithProviders(
      <SignUpPage />,
    );

    await user.click(getByText('Next'));

    expect(getAllByText('Required')).toHaveLength(3);
  });

  it('should have no errors filling all fields', async () => {
    const { getByLabelText, queryAllByText, getByText, user } = renderWithProviders(
      <SignUpPage />,
    );

    await user.type(getByLabelText('First name'), 'Test');
    await user.type(getByLabelText('Email'), 'Test@email.com');
    await user.type(getByLabelText('Password'), '123');
    await user.click(getByText('Next'));

    expect(queryAllByText('Required')).toHaveLength(0);
  });
});
