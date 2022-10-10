import React from 'react'
import NotesHome from '../../assets/notes-home.svg'
import * as colors from '../../styles/colors'
// import Sally from '../../assets/Saly-10.svg'
import {
  Sally,
  Blob,
  Robot
} from '../../assets'

import { contentList } from './ContentList'
import {
  ContainerHero,
  HomeWrapper,
  LeftHero,
  RightHero,
  PrimaryText,
  HighlightText,
  OrdinaryText,
  ContentContainer,
  Content,
  ContentText,
  ContentCard,
  CardWrapper,
  CardBody,
  CardHeader,
  CardText,
  CardImageWrapper,
  AboutUsContainer,
  AboutUsWrapper,
  AboutUsText,
  TextWrapper,
  PrimaryAboutUsText,
  SvgWrapper
} from '../../styles/Home.style'

const HomePage:React.FC = () => {

  return (
    <>
      <HomeWrapper>
        <ContainerHero>
          <LeftHero>
              <PrimaryText><HighlightText>Easiest</HighlightText> way to get your class fully controlled is here !</PrimaryText>
              <OrdinaryText>A solution to <b>simplify</b> school operational activities with only <b>one</b> application.</OrdinaryText>
          </LeftHero>
          <RightHero>
            {/* <img src={Sally} width='60%' /> */}
            <Sally />
          </RightHero>
        </ContainerHero>
        <ContentContainer>
          <Content>
            <ContentText>How It's Work ?</ContentText>
            <CardWrapper>
              {contentList.map((content, index) => (
                <CardBody cardColor={content.color}>
                  <CardImageWrapper>
                    {content.icon}
                  </CardImageWrapper>
                  <CardHeader headerTextColor={content.headerTextColor}>{content.header}</CardHeader>
                  <CardText textColor={content.textColor}>{content.text}</CardText>
                </CardBody>
              ))}
            </CardWrapper>
          </Content>
        </ContentContainer>
        <AboutUsContainer>
          <AboutUsWrapper>
            <TextWrapper>
              <PrimaryAboutUsText>Access to everything for everyone</PrimaryAboutUsText>
              <AboutUsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus sit, impedit nihil accusamus ipsam blanditiis ratione reiciendis consectetur recusandae mollitia ea cupiditate voluptas adipisci consequatur fuga! Excepturi et repudiandae sit quia quod impedit dignissimos, autem provident inventore animi tempora molestiae consequatur a sapiente nisi eligendi eveniet? Nam odio veritatis quos! Sed molestias quam nulla asperiores, quas ipsam fuga. Nam ut magnam excepturi distinctio eos sint aliquid dolor nostrum deleniti. Quod libero similique, officia dolore dolor et ipsum quidem amet iste, deleniti consequatur doloremque odit, laudantium iure? Natus ea totam facilis pariatur nisi quibusdam iure doloremque, quis consequuntur rem architecto?  Enjoy all the features. All is easy when KELASKITA helping the school operational activity.</AboutUsText>
            </TextWrapper>
            <SvgWrapper>
              <Robot />
            </SvgWrapper>
          </AboutUsWrapper>
        </AboutUsContainer>
      </HomeWrapper>
    </>
  )
}

export default HomePage