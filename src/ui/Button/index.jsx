import { BaseButton } from './styles';

export function Button({ children, ...props }) {
  return <BaseButton {...props}>{children}</BaseButton>;
}
