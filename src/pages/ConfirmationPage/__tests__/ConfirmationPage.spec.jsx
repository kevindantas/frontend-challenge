import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ConfirmationPage } from '..';
import { renderWithProviders, waitFor } from '../../../testing/testUtils';

const formState = {
  basicInfos: {
    firstName: 'Name',
    email: 'test@email.com',
    password: '123',
  },
  moreInfo: {
    color: 'red',
    terms: true,
  },
};

export const handlers = [
  rest.post('http://localhost:3001/api/submit', (req, res, ctx) => {
    return res(ctx.text('OK'), ctx.delay(50));
  }),
];

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const server = setupServer(...handlers);

describe('ConfirmationPage', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should have all information but password', async () => {
    const { getByText } = renderWithProviders(<ConfirmationPage />, {
      preloadedState: {
        form: formState,
      },
    });

    expect(getByText(formState.basicInfos.firstName)).toBeDefined();
    expect(getByText(formState.basicInfos.email)).toBeDefined();
    expect(getByText(formState.moreInfo.color)).toBeDefined();
    expect(getByText('Agreed')).toBeDefined();
  });

  it('should send to success page', async () => {
    const { getByText, findByText, user, debug } = renderWithProviders(
      <ConfirmationPage />,
      {
        preloadedState: {
          form: formState,
        },
      },
    );

    await user.click(getByText('Submit'));
    await waitFor(() => findByText('Submit'));

    expect(mockNavigate).toHaveBeenCalledWith('/success');
  });

  it('should send to error page', async () => {
    const errorHandler = [
      rest.post('http://localhost:3001/api/submit', (req, res, ctx) => {
        return res(ctx.text('OK'), ctx.delay(50), ctx.status(400));
      }),
    ];
    server.use(errorHandler);

    const { getByText, findByText, user } = renderWithProviders(
      <ConfirmationPage />,
      {
        preloadedState: {
          form: formState,
        },
      },
    );

    await user.click(getByText('Submit'));
    await waitFor(() => findByText('Submit'));

    expect(mockNavigate).toHaveBeenCalledWith('/error');
  });
});
