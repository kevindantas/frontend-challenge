import { CircularSpinner } from '../CircularSpinner';
import { BaseButton } from './styles';

export function Button({ children, isLoading, ...props }) {
  return (
    <BaseButton {...props} disabled={isLoading}>
      {isLoading ? <CircularSpinner /> : children}
    </BaseButton>
  );
}
