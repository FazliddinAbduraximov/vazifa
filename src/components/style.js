import styled from "@emotion/styled";
import { COLORS } from "../config/color";
import { IconButton } from "@mui/material";

export const Searchinput = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  &:focus {
    border-color: ${COLORS.primary};
  }
`;

export const CustomIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  bottom: 11px;

`;
export const CustomButton = styled(IconButton)`
  &:hover {
    color: ${COLORS.primary};
  }
`;
