import { Button, ButtonProps } from "@mui/material";
import styled from "@emotion/styled";

const LoginButton = styled((props: any) => (
  <Button disableTouchRipple disableElevation {...props} />
))<ButtonProps>(({ theme }) => ({
  borderRadius: "8px",
  width: "100%",
  height: 40,
  textTransform: "none",
  fontWeight: "bold",
}));

export default LoginButton;
