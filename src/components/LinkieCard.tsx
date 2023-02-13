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

interface LinkieCardProps {
  className?: string;
  children: React.ReactNode;
}

const LinkieCard: FunctionComponent<LinkieCardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="duration-150">
      <StyledButton
        className={`${className} flex z-10 py-2 mt-2 relative group text-th-fgd-3 group-hover:text-th-fgd-5 `}
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

export default LinkieCard;