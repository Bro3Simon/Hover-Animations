import { Container } from "@mui/material";

import { ButtonAnimation } from "app/components/ButtonAnimation";

export default function Home() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <ButtonAnimation />
    </Container>
  );
}
