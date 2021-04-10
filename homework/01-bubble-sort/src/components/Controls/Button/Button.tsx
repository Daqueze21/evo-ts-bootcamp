import React from 'react'


//types
type Props = {
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children: string;
};

const Button: React.FC<Props> = ({
  onClick,
  disabled,
  children,
}) => {
  
  return (
    <>
      <button onClick={onClick} disabled={disabled || false}>
        {children}
      </button>
    </>
  );
};

export default Button;