import styled from 'styled-components';
import { Avatar } from '@mui/material';

export const UserLogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  color: ${props =>
    props.isWhite ? props.theme.colors.black : props.theme.text.hero};
  transition: color ${props => props.theme.hover.transition};

  &:hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.green};
  }

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 34px;
    height: 34px;
    margin-right: 14px;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const StyledUserName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: ${props => props.theme.colors.userText};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    color: inherit;
  }
`;
