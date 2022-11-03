import { CircularSpinner } from '../CircularSpinner';
import { BaseButton } from './styles';

export function Button({ children, variant = 'primary', isLoading, ...props }) {
  return (
    <BaseButton {...props} variant={variant} disabled={isLoading}>
      {isLoading ? <CircularSpinner /> : children}
    </BaseButton>
  );
}
