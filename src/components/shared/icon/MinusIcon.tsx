type Props = {
  className?: string
  strokeColor?: string
}
// "#A8C5FF"
export const MinusIcon = ({className, strokeColor}: Props) => {
  return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.2 8L2.80001 8" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round"></path>
      </svg>
  );
};

