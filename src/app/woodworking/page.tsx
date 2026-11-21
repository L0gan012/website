"use client";

import { Container, Typography } from "@mui/material";

export default function Woodworking() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: 590, py: 9 }}>
      <Typography
        sx={{
          mb: 3,
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        Wood &amp; grain
      </Typography>
      <Typography component="h1" sx={{ fontFamily: "Georgia, serif", fontSize: { xs: 52, md: 72 }, fontWeight: 400 }}>
        Woodworking
      </Typography>
    </Container>
  );
}
