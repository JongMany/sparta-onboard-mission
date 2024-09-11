type Props = {
  className: string;
  information: string;
}
export const MobileAdditionalInformation = ({className, information}: Props) => {
  return <h5 className={className}>{information}</h5>
}