import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const idleGradient =
  'bg-gradient-to-bl from-yellow-50 via-mango-yellow to-mango-green '
export const activeGradient =
  'bg-gradient-to-r from-yellow-100 to-white'

const StyledButton = styled.button<ButtonProps>`
  :before {
    ${tw`absolute left-0 top-0 opacity-0 h-full w-full block transition-opacity duration-300 `}
    ${({ gray }) => (gray ? tw`bg-mango-bkg-3` : tw`${activeGradient}`)}
    border-radius: inherit;
    content: '';
    z-index: -10;
  }

  :hover {
    :before {
      ${tw`opacity-100`}
    }
  }

  :focus {
    ${tw`ring-2 ring-mango-green ring-opacity-40 outline-none`}
  }

  :active {
    :before {
      ${tw`ring-2 ring-mango-green ring-opacity-40`}
    }
  }

  :disabled {
    ${tw`cursor-not-allowed opacity-60`}
    :before {
      ${tw`hidden`}
    }
  }
`
// added "children: react.reactnode" and fixed errors, but don't know what its actually doing lol
interface ButtonProps {
  className?: string
  children: React.ReactNode
  gray?: boolean
  onClick?: () => void
  disabled?: boolean
}

const ButtonWhite: FunctionComponent<ButtonProps> = ({
  children,
  className,
  gray,
  ...props
}) => {
  return (
    <StyledButton
      className={`${className} relative z-10 px-6 py-2 rounded-xl text-black text-opacity-60 hover:text-opacity-100 font-display hover:shadow-lg hover:-translate-y-0 transition duration-150 ease-in-out ${
        gray ? 'bg-th-bkg-3' : idleGradient
      }`}
      gray={gray}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonWhite;
