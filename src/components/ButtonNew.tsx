import { FunctionComponent } from 'react';
import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  font-weight: 700;
  cursor: grab;
  text-decoration: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

interface LinkieProps {
  className?: string;
  children: React.ReactNode;
}

const ButtonNew: FunctionComponent<LinkieProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="py-6 px-16 bg-th-bkg-2 text-th-fgd-3 text-lg hover:text-th-fgd-5 duration-150 cursor-pointer hover:bg-th-bkg-3 overflow-hidden">
      <StyledButton
        className={`${className} flex z-10 relative group`}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
    
  );
};

export default ButtonNew;