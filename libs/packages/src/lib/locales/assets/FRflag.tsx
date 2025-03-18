import React from 'react';
type Props = {
  className?: string;
};
function FRflag({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="25"
      style={{ borderRadius: '5px' }}
    >
      <rect width="35" height="25" fill="#ED2939" />
      <rect width="25" height="25" fill="#fff" />
      <rect width="11.66" height="25" fill="#002395" />
    </svg>
  );
}
export default FRflag;
