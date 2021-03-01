import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: #141026;
  border: 1px solid #584f81;
  border-radius: 9px;
`;

export default function FloatingElement({ children, style = undefined, stretchVertical = false }) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}

