import { Box, Button, InputBase, TextField, Typography } from "@mui/material";
import {
  BottomContainer,
  Container,
  EmailInput,
  FooterLinksContainer,
  FooterLinkTitle,
  StyledList,
  StyledListItem,
} from "./footerStyle";

const product = [
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
];
const company = [
  "About us",
  "Careers",
  "Press",
  "News",
  "Media kit",
  "Contact",
];
const resources = [
  "Blow",
  "Newslette",
  "Events",
  "Help centre",
  "Tutorials",
  "Support",
];
const useCases = [
  "Startups",
  "Enterprise",
  "Government",
  "SaaS centere",
  "Marketplaces",
  "Ecommerce",
];

const social = [
  "Twitter",
  "LinkedIn",
  "Facebook",
  "GitHub",
  "Dribbble",
  "AngelList",
];

const legal = [
  "Terms",
  "Privacy",
  "Cookies",
  "Licenses",
  "Settings",
  "Contact",
];

function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#101828",
            }}
          >
            Join our newsletter
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#475467",
            }}
          >
            We'll send you a nice letter once per week. No spam.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <InputBase
            placeholder="Enter your email"
            sx={{
              border: "1px #D0D5DD solid",
              height: "44px",
              borderRadius: "8px",
              padding: "10px 14px",
            }}
          />
          <Button
            sx={{
              backgroundColor: "#7F56D9",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              width: "115px",
              height: "44px",
            }}
            variant="contained"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "120px",
        }}
      >
        <FooterLinksContainer>
          <FooterLinkTitle>product</FooterLinkTitle>
          {product.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkTitle>company</FooterLinkTitle>
          {company.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkTitle>Resources</FooterLinkTitle>
          {resources.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkTitle>use cases</FooterLinkTitle>
          {useCases.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkTitle>social</FooterLinkTitle>
          {social.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkTitle>legal</FooterLinkTitle>
          {legal.map((link) => {
            return (
              <StyledList>
                <StyledListItem key={link}>{link}</StyledListItem>
              </StyledList>
            );
          })}
        </FooterLinksContainer>
      </Box>
      <BottomContainer>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#7F56D9",
            textDecoration: "none",
            marginRight: "32px",
          }}
        >
          FLUX
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#667085",
          }}
        >
          © 2077 Untitled UI. All rights reserved.
        </Typography>
      </BottomContainer>
    </Container>
  );
}

export default Footer;
