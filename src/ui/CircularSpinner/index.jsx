import { SvgSpinner } from './styles';

export function CircularSpinner({ children, isLoading, ...props }) {
  return (
    <SvgSpinner viewBox="0 0 50 50">
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </SvgSpinner>
  );
}
