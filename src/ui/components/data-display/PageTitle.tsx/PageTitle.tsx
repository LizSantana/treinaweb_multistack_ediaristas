import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyles,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyles>{props.subtitle}</PageSubtitleStyles>
    </PageTitleContainer>
  );
};

export default PageTitle;
