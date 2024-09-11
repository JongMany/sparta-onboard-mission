type Props = {
  className?: string
  strokeColor?:string
}
export const PlusIcon = ({className="", strokeColor="white"}: Props) => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 3.5V16.5" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round"></path>
    <path d="M16.5 10L3.5 10" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round"></path>
  </svg>
}