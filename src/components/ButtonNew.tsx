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
    <div className="cursor-pointer transitions duration-150 ease-in-out relative flex w-[218px] text-th-fgd-3 hover:text-th-fgd-5 bg-th-bkg-2 hover:bg-th-bkg-3 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-th-bkg-4 before:to-transparent before:opacity-0 hover:overflow-hidden hover:before:-translate-x-full hover:before:animate-[shimmer_0.75s_normal] hover:before:opacity-100 border-r-[4px] border-th-fgd-1 border-solid">
                  <div className="default-transition relative z-10 flex h-full items-center justify-center space-x-3 px-12">

    <StyledButton
        className={`${className} flex z-10 relative group sm:text-xl text-sm`}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
    </div>
  );
};

export default ButtonNew;