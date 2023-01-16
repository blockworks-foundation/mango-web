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

const LinkieTwo: FunctionComponent<LinkieProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="text-th-fgd-3 hover:text-th-fgd-5 duration-150">
      <StyledButton
        className={`${className} ml-2 pr-6 flex z-10 p-3 relative group`}
        {...props}
      >
        {children}
        <span>
          <ArrowSmallRightIcon
            className="w-6 h-6 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
          />
        </span>
      </StyledButton>
    </div>
  );
};

export default LinkieTwo;