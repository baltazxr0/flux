import {
  Box,
  Button,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import {
  BottomContainer,
  CompanyName,
  Container,
  EmailInput,
  FooterLinksContainer,
  FooterLinkTitle,
  PolicyText,
  StyledList,
  StyledListItem,
  SubscribeButton,
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
      <Grid container columns={3} sx={{ width: "100%" }}>
        <Grid item xs={3} lg={2}>
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
        </Grid>
        <Box>
          <EmailInput placeholder="Enter your email" />
          <SubscribeButton variant="contained">Subscribe</SubscribeButton>
        </Box>
      </Grid>
      <Grid container columns={6} spacing={"20px"}>
        <Grid item xs={3} lg={1}>
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
        </Grid>
        <Grid item xs={3} lg={1}>
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
        </Grid>
        <Grid item xs={3} lg={1}>
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
        </Grid>
        <Grid item xs={3} lg={1}>
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
        </Grid>

        <Grid item xs={3} lg={1}>
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
        </Grid>
        <Grid item xs={3} lg={1}>
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
        </Grid>
      </Grid>
      <BottomContainer>
        <CompanyName variant="h6" noWrap component="a" href="/">
          FLUX
        </CompanyName>
        <PolicyText>© 2077 Untitled UI. All rights reserved.</PolicyText>
      </BottomContainer>
    </Container>
  );
}

export default Footer;
