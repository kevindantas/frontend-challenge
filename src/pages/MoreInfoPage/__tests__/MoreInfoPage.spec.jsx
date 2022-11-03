import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MoreInfoPage } from '..';
import {
  renderWithProviders,
  waitForElementToBeRemoved,
} from '../../../testing/testUtils';

export const handlers = [
  rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
    return res(ctx.json(['red', 'green', 'blue']), ctx.delay(10));
  }),
];

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const server = setupServer(...handlers);

describe('MoreInfoPage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should show spinner while loading', async () => {
    const { queryByTestId, getByLabelText } = renderWithProviders(
      <MoreInfoPage />,
    );

    expect(queryByTestId('spinner')).toBeDefined();

    await waitForElementToBeRemoved(() => queryByTestId('spinner'));

    expect(getByLabelText('Select your favorite color')).toBeDefined();
  });

  it('should send to confirmation page if valid', async () => {
    const { getByText, getByTestId, getByLabelText, user } =
      renderWithProviders(<MoreInfoPage />);

    await waitForElementToBeRemoved(() => getByTestId('spinner'));

    await user.selectOptions(getByLabelText('Select your favorite color'), [
      'red',
    ]);

    await user.click(getByTestId('checkbox-input'));
    await user.click(getByText('Next'));

    expect(mockNavigate).toHaveBeenCalledWith('/confirmation');
  });
});
