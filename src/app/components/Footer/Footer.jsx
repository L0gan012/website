import {
  Box,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/L0gan012", icon: <GitHubIcon /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/logan-sauer-4aa767177/",
    icon: <LinkedInIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/logan_kiln_time/",
    icon: <InstagramIcon />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        bgcolor: "#f4f1ea",
        color: "#17201d",
        borderTop: "1px solid rgba(23,32,29,.16)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          minHeight: 112,
          px: { xs: 2.5, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          py: 3,
        }}
      >
        <Box>
          <Typography
            component="p"
            sx={{
              m: 0,
              mb: 0.5,
              fontFamily: "Georgia, serif",
              fontSize: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Logan Sauer
          </Typography>
          <Typography
            component="p"
            sx={{
              m: 0,
              color: "#737c77",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            © {year} All rights reserved
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1.25 }}>
          {socialLinks.map(({ name, url, icon }) => (
            <IconButton
              key={name}
              component={Link}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              sx={{
                width: 42,
                height: 42,
                border: "1px solid #17201d",
                borderRadius: "50%",
                color: "#17201d",
                transition: "transform 180ms ease, background 180ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "#dbe3dc",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
