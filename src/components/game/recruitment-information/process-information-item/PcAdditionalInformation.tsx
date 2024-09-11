type Props = {
  className: string;
  information: string;
}
export const PcAdditionalInformation = ({className, information}: Props) => {
  return <h5 className={className}>{information}</h5>
}