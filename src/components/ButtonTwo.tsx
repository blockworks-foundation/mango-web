import { FunctionComponent } from 'react';
// import styled from '@emotion/styled';
// import tw from 'twin.macro';

// added "children: react.reactnode" and fixed errors, but don't know what its actually doing lol
interface ButtonProps {
  className?: string
  children: React.ReactNode
  gray?: boolean
  onClick?: () => void
  disabled?: boolean
}

const ButtonTwo: FunctionComponent<ButtonProps> = ({
  children,

}) => {
  return (
    <button className="hover:-translate-y-1 transition duration-150 ease-in-out">
        <a 
          href="#_" 
          className="relative inline-flex items-center justify-center p-4 px-1 py-1 overflow-hidden font-bold font-display rounded-full shadow-2xl group">
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-mango-yellow rounded-full blur-lg ease"></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-mango-green rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-mango-red rounded-full blur-md"></span>
          </span>
          <span className="relative text-white text-opacity-50 bg-mango-bkg-1 py-2 px-7 rounded-full hover:bg-mango-bkg-3 hover:text-opacity-100 transition-all duration-150 ease-in">

      {children}
      </span>
      </a>  
    </button>

  );
};

export default ButtonTwo
