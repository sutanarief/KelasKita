import React, { useState } from 'react'
import {
  Sally,
  Robot,
  Hand
} from '../../assets'

import { contentList } from './ContentList'
import { perkList } from './PerkList'
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
  SvgWrapper,
  PerkPill,
  PillWrapper,
  InfoWrapper,
  InfoBox,
  InfoContent,
  InfoText,
  InfoRole,
  InfoTextWrapper
} from '../../styles/Home.style'

const HomePage:React.FC = () => {
  const [role, setRole] = useState("")
  const [perks, setPerks] = useState([""])


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
              <AboutUsText>What can you do with KELASKITA :</AboutUsText>
              <InfoWrapper>
                <PillWrapper>
                  {perkList.map((val, i) => (
                    <PerkPill 
                      pillColor={val.color}
                      onMouseOver={() => {
                        setRole(val.label)
                        setPerks(val.perks)
                      }}
                      onMouseOut={() => {
                        setRole("")
                        setPerks([""])
                      }}
                      >{val.label}</PerkPill>
                  ))}
                </PillWrapper>
                  {role && (
                      <InfoBox>
                        <InfoContent>
                          <InfoTextWrapper>
                            <InfoRole>{role}</InfoRole>
                            {perks.map((x, i) => (
                              <InfoText>- {x}</InfoText>
                            ))}
                          </InfoTextWrapper>
                        </InfoContent>
                      </InfoBox>
                  )}
              </InfoWrapper>
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