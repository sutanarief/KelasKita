import React, { useState } from 'react'
import {
  Sally,
  Robot,
  Hand,
  Arrow
} from '../../assets'

import { contentList } from './ContentList'
import { perkList } from './PerkList'
import { activityList } from './ActivityList'
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
  InfoTextWrapper,
  RecentActivityContainer,
  ActivityCardWrapper,
  ActivityCard,
  SliderContainer,
  Slider,
  ActivityTextWrapper,
  ActivityCardHeaderText,
  ActivityCardInfoText,
  ActivityCardText,
  ActivityCardHeader,
  ActivityProfilePicture,
  ActivityCardHeaderRole
} from '../../styles/Home.style'

const HomePage:React.FC = () => {
  const [role, setRole] = useState("")
  const [perks, setPerks] = useState([""])
  const [transform, setTransform] = useState(0)

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


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
        <RecentActivityContainer>
          <h1>Recent Activity</h1>
          <SliderContainer>
            <Slider
              direction={1}
              onClick={() => {
                if(transform) {
                  setTransform(transform - 1)
                }
              }}
              >
              <Arrow/>
            </Slider>
            <Slider
              direction={-1}
              onClick={() => {
                if(activityList.length > 3) {
                  if(transform == Math.floor(activityList.length / 3)) {
                    setTransform(0)
                  } else {
                    setTransform(transform + 1)
                  }
                }
              }}
              >
              <Arrow/>
            </Slider>
          </SliderContainer>
          <ActivityCardWrapper transform={transform}>
            {activityList.map((val) => (
              <ActivityCard cardColor={val.activityColor.cardColor}>
                <ActivityCardHeader>
                  <ActivityProfilePicture source={val.profilePicture} />
                  <ActivityTextWrapper>
                    <ActivityCardHeaderText userColor={val.activityColor.userNameColor}>{val.username}</ActivityCardHeaderText>
                    <ActivityCardHeaderRole roleColor={val.activityColor.roleColor}>{val.class} {val.role}</ActivityCardHeaderRole>
                  </ActivityTextWrapper>
                </ActivityCardHeader>
                <ActivityTextWrapper>
                  <ActivityCardInfoText typeColor={val.activityColor.typeColor}>{val.activityType}</ActivityCardInfoText>
                  <ActivityCardText dataColor={val.activityColor.dataColor}>{val.activityData}</ActivityCardText>
                </ActivityTextWrapper>
              </ActivityCard>
            ))}
          </ActivityCardWrapper>
        </RecentActivityContainer>
      </HomeWrapper>
    </>
  )
}

export default HomePage