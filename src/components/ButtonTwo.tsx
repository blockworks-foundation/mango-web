import React, { FunctionComponent } from 'react';
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
    <div className="group ">

      <div className="flex justify-center">
        <button className=" transition-all duration-100 ease-in-out bg-th-fgd-2 rounded-xl">
            <span
              className="z-30 relative inline-flex items-center justify-center p-4 px-[3px] py-[3px] overflow-hidden font-bold font-display rounded-xl shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-300 group-hover:bg-mango-yellow rounded-xl blur-lg ease-in-out"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease-in-out">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 group-hover:bg-mango-green rounded-full blur-xl"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 group-hover:bg-mango-red rounded-full blur-xl"></span>
              </span>
              <span className=" relative text-th-fgd-3 bg-th-bkg-3 py-2 px-7 rounded-[9px] hover:bg-th-bkg-1 hover:text-th-fgd-5 transition-all duration-150 ease-in">

          {children}
          </span>
          </span>  
        </button>
        </div>
        <div className="p-1 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-100 transition duration-700 group-hover:duration-700 animate-tilt"></div>
        <div className="p-1 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-50 transition duration-300 group-hover:duration-700 animate-tilt"></div>
    </div>


  );
};

export default ButtonTwo;
