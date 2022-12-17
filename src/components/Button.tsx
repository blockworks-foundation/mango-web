import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const idleGradient =
  'bg-gradient-to-r from-mango-yellow to-mango-red'
export const activeGradient =
  'bg-gradient-to-bl from-mango-green via-mango-yellow to-mango-orange'

const StyledButton = styled.button<ButtonProps>`
  :before {
    ${tw`absolute left-0 top-0 opacity-0 h-full w-full block transition-opacity duration-300`}
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

interface ButtonProps {
  className?: string
  children: React.ReactNode
  gray?: boolean
  onClick?: () => void
  disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  gray,
  ...props
}) => {
  return (
    <StyledButton
      className={`${className} relative z-10 px-6 py-2 rounded-full text-white font-display  ${
        gray ? 'bg-mango-bkg-4' : idleGradient
      }`}
      gray={gray}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
