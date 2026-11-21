"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Typography,
} from "@mui/material";

const ink = "#17201d";
const paper = "#f4f1ea";

const sectionLabel = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

export default function Home() {
  const cards = [
    {
      number: "01",
      eyebrow: "Code & design",
      title: "Tech",
      href: "/tech",
      color: "#aabfaf",
    },
    {
      number: "02",
      eyebrow: "Clay & craft",
      title: "Pottery",
      href: "/pottery",
      color: "#e1bca7",
    },
    {
      number: "03",
      eyebrow: "Wood & grain",
      title: "Woodworking",
      href: "/woodworking",
      color: "#cfccdf",
    },
  ];

  return (
    <Box component="main" sx={{ minHeight: "calc(100vh - 140px)", bgcolor: paper, color: ink }}>
      <Container
        maxWidth="xl"
        component="section"
        aria-labelledby="intro-heading"
        sx={{
          minHeight: 590,
          py: { xs: 7, md: 9 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" },
          alignItems: "center",
          gap: { xs: 5, md: 7 },
        }}
      >
        <Box sx={{ maxWidth: 660 }}>
          <Typography sx={{ ...sectionLabel, mb: 3 }}>
            Software developer / maker
          </Typography>
          <Typography
            id="intro-heading"
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: { xs: 52, sm: 68, md: "clamp(58px, 6.5vw, 96px)" },
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "-0.055em",
            }}
          >
            Hi, I&apos;m Logan.
            <Box component="span" sx={{ display: "block", mt: 1.5, color: "#687b70", fontStyle: "italic" }}>
              I build things with care.
            </Box>
          </Typography>
          <Typography sx={{ maxWidth: 510, mt: 3.5, color: "#56615c", fontSize: 18, lineHeight: 1.7 }}>
            This is a small collection of my work, experiments, and other things I enjoy making.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: 3.5, mt: 4.5 }}>
            <Button
              component={NextLink}
              href="/tech"
              variant="contained"
              disableElevation
              endIcon={<Box component="span" sx={{ fontSize: 18 }}>↗</Box>}
              sx={{
                minHeight: 50,
                px: 2.5,
                borderRadius: 999,
                bgcolor: ink,
                color: paper,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#2d3b35", transform: "translateY(-2px)" },
              }}
            >
              View my work
            </Button>
            <Button
              component="a"
              href="mailto:hello@logansauer.com"
              sx={{
                px: 0,
                pb: 0.5,
                borderRadius: 0,
                borderBottom: "1px solid",
                borderColor: ink,
                color: ink,
                fontWeight: 800,
                textTransform: "none",
              }}
            >
              Say hello
            </Button>
          </Box>
        </Box>

        <Box
          aria-label="Abstract geometric artwork"
          sx={{
            position: "relative",
            minHeight: { xs: 330, sm: 380, md: 440 },
            border: `1px solid ${ink}`,
            bgcolor: "#dbe3dc",
            backgroundImage:
              "linear-gradient(rgba(23,32,29,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(23,32,29,.16) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: { xs: 230, md: 290 },
              height: { xs: 230, md: 290 },
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -56%)",
              border: `1px solid ${ink}`,
              borderRadius: "50%",
              "&:before": {
                content: '""',
                position: "absolute",
                inset: 38,
                border: `1px solid ${ink}`,
                borderRadius: "50%",
                bgcolor: "#b8c8bd",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                width: 86,
                height: 86,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                border: `1px solid ${ink}`,
                borderRadius: "50%",
                bgcolor: "#efb95e",
                boxShadow: "118px 0 0 -34px #d8a3a1",
              },
            }}
          >
            <Box sx={{ position: "absolute", width: 16, height: 16, top: 16, right: 44, borderRadius: "50%", bgcolor: ink }} />
          </Box>
          <Typography
            sx={{
              position: "absolute",
              left: 24,
              bottom: 18,
              fontFamily: "Georgia, serif",
              fontSize: 15,
              fontStyle: "italic",
              lineHeight: 1.35,
            }}
          >
            Based somewhere
            <br />
            in the creative process
          </Typography>
        </Box>
      </Container>

      <Box component="section" aria-labelledby="featured-heading" sx={{ borderTop: "1px solid rgba(23,32,29,.16)", px: { xs: 2.5, md: 6 }, py: { xs: 6, md: 7 }, bgcolor: "#fbfaf7" }}>
        <Container maxWidth="lg" disableGutters>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "flex-end" }, justifyContent: "space-between", mb: 3.5 }}>
            <Typography sx={{ ...sectionLabel, mb: { xs: 1, sm: 0 }, color: "#78827d" }}>Explore</Typography>
            <Typography id="featured-heading" component="h2" sx={{ fontFamily: "Georgia, serif", fontSize: { xs: 31, md: 36 }, fontWeight: 400, letterSpacing: "-0.03em" }}>
              A few places to start
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            {cards.map((card) => (
              <Card
                key={card.title}
                elevation={0}
                sx={{
                  height: { xs: 410, md: 390 },
                  border: `1px solid ${ink}`,
                  borderRadius: 0,
                  bgcolor: card.color,
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: `8px 8px 0 ${ink}` },
                }}
              >
                <CardActionArea
                  component={NextLink}
                  href={card.href}
                  sx={{ height: "100%", alignItems: "stretch", color: ink }}
                >
                  <Typography sx={{ position: "absolute", zIndex: 2, top: 18, left: 18, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em" }}>
                    {card.number}
                  </Typography>
                  <Box sx={{ height: 290, position: "relative", overflow: "hidden" }}>
                    {card.title === "Tech" && (
                      <Box sx={{ position: "absolute", left: 24, right: 24, top: 24, bottom: 0, border: `1px solid ${ink}`, borderBottom: 0, bgcolor: "#edf0e8" }}>
                        <Box sx={{ position: "absolute", width: "74%", height: "76%", left: "13%", top: "18%", border: `1px solid ${ink}`, bgcolor: "#edf0e8", transform: "perspective(500px) rotateY(-7deg)" }} />
                        <Box sx={{ position: "absolute", width: "28%", height: "58%", right: "4%", bottom: 0, border: `1px solid ${ink}`, bgcolor: "#efb95e", transform: "skewY(-12deg)" }} />
                      </Box>
                    )}
                    {card.title === "Pottery" && (
                      <>
                        <Box sx={{ position: "absolute", width: 220, height: 32, left: "50%", bottom: 28, transform: "translateX(-50%)", borderRadius: "50%", bgcolor: "rgba(92,57,43,.16)", filter: "blur(4px)" }} />
                        <Box sx={{ position: "absolute", width: 160, height: 180, left: "50%", bottom: 48, transform: "translateX(-50%)", border: `1px solid ${ink}`, borderRadius: "48% 48% 32% 32%", bgcolor: "#e9d8b7" }}>
                          <Box sx={{ position: "absolute", width: 92, height: 28, left: "50%", top: -14, transform: "translateX(-50%)", border: `1px solid ${ink}`, borderRadius: "50%", bgcolor: "#c99e78" }} />
                          <Box sx={{ position: "absolute", width: 96, height: 48, left: 30, top: 78, border: `1px solid ${ink}`, borderRadius: "50%", bgcolor: "#869b87" }} />
                        </Box>
                      </>
                    )}
                    {card.title === "Woodworking" && (
                      <>
                        <Box sx={{ position: "absolute", width: 210, height: 36, left: "50%", bottom: 58, transform: "translateX(-50%) rotate(-8deg)", border: `1px solid ${ink}`, bgcolor: "#f0dcc0" }} />
                        <Box sx={{ position: "absolute", width: 180, height: 130, left: "50%", bottom: 86, transform: "translateX(-50%) rotate(5deg)", border: `1px solid ${ink}`, bgcolor: "#b7835d", backgroundImage: "linear-gradient(90deg, transparent 45%, rgba(23,32,29,.18) 46%, transparent 48%)", backgroundSize: "24px 100%" }} />
                        <Box sx={{ position: "absolute", width: 56, height: 56, right: "13%", top: 58, transform: "rotate(18deg)", border: `1px solid ${ink}`, bgcolor: "#ece5d2" }} />
                      </>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 100,
                      px: 2.5,
                      borderTop: `1px solid ${ink}`,
                      bgcolor: "#fbfaf7",
                    }}
                  >
                    <Box>
                      <Typography sx={{ mb: 0.5, color: "#737c77", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {card.eyebrow}
                      </Typography>
                      <Typography component="h3" sx={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 400 }}>
                        {card.title}
                      </Typography>
                    </Box>
                    <Box sx={{ width: 38, height: 38, display: "grid", placeItems: "center", border: `1px solid ${ink}`, borderRadius: "50%", fontSize: 18 }}>
                      ↗
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
