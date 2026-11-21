import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
	{ name: 'GitHub', url: 'https://github.com', icon: <GitHubIcon /> },
	{ name: 'LinkedIn', url: 'https://www.linkedin.com', icon: <LinkedInIcon /> },
	{ name: 'Instagram', url: 'https://www.instagram.com', icon: <InstagramIcon /> },
	{ name: 'Facebook', url: 'https://www.facebook.com', icon: <FacebookIcon /> },
];

export default function Footer() {
	return (
		<Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
			<Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
				<Typography variant="body2" color="text.secondary">
					© {new Date().getFullYear()} Your Company. All rights reserved.
				</Typography>
				<Box sx={{ display: 'flex', gap: 1 }}>
					{socialLinks.map(({ name, url, icon }) => (
						<IconButton
							key={name}
							component={Link}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={name}
							color="inherit"
						>
							{icon}
						</IconButton>
					))}
				</Box>
			</Container>
		</Box>
	);
}
