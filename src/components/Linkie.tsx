import { FunctionComponent } from 'react';
import React from 'react';
import styled from '@emotion/styled';

import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

const StyledButton = styled.button`
  font-weight: 700;
  cursor: pointer;
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

const Linkie: FunctionComponent<LinkieProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="text-th-fgd-3 hover:text-th-fgd-5 duration-150">
      <StyledButton
        className={`${className} pr-5 flex z-10 p-[24px] relative text-lg group border-l-[4px] border-th-fgd-2 border-solid`}
        {...props}
      >
        {children}
        <span>
          <ArrowSmallRightIcon
            className="w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
          />
        </span>
      </StyledButton>
    </div>
  );
};

export default Linkie;