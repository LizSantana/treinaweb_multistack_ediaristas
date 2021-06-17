import { Typography, Box } from "@material-ui/core";
import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem nós somos?</FooterTitle>
          <Typography variant={"body2"} sx={{mt: 2}}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos os melhores profissionais
            com total segurança e praticidade! São milhares de clientes
            satisfeitos em todo país. (Mudei pq o texto original era sexista.)
          </Typography>
        </Box>
        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"AppStore"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
