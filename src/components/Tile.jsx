import styled from "@emotion/styled";

export const Tile = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .hidden': {
    opacity: .8,
  }
});
