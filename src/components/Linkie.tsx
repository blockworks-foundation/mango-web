import { FunctionComponent } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const StyledButton = styled.button`
  font-weight: 700;
  cursor: pointer;

  :hover {
    ${tw`no-underline`}
  }

  :disabled {
    ${tw`cursor-not-allowed opacity-60`}
  }
`
interface LinkieProps {
  className?: string
  children: React.ReactNode
}

const Linkie: FunctionComponent<LinkieProps> = ({
  children,
  className,
  ...props

}) => {
  return (
    
    <>
      <div className="text-white text-opacity-40 hover:text-opacity-100 duration-150">
        <StyledButton
          className={`${className} pr-5 flex z-10 px-8 py-2 relative rounded-full group`}
          {...props}
        >
          {children}
          <div>
            <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-6 h-6 group-hover:opacity-100  text-mango-yellow opacity-0 transition duration-100 ease-in ml-1">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </div>
        </StyledButton>
      </div>
    </>
  );
};

export default Linkie;
