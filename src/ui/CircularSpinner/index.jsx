import { SvgSpinner } from './styles';

export function CircularSpinner({
  children,
  isLoading,
  stroke = 'white',
  ...props
}) {
  return (
    <SvgSpinner viewBox="0 0 50 50" stroke={stroke} {...props}>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </SvgSpinner>
  );
}
