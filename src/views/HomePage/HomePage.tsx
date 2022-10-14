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
  ActivityCardHeaderRole,
  RecentText,
  ActivityFooter,
  ActivityFooterText,
  ActivityCardBody,
  SeeMoreText,
  Footer,
  FooterTitleText
} from '../../styles/Home.style'

import * as colors from '../../styles/colors'

const HomePage:React.FC = () => {
  const [role, setRole] = useState("")
  const [perks, setPerks] = useState([""])
  const [transform, setTransform] = useState(0)

  const dateFormat = (current: any, previous: any) => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed/1000) + ' seconds ago';   
    } else if (elapsed < msPerHour) {
      let time = Math.round(elapsed/msPerMinute)

      return time == 1 ? 'a minute ago' : ' minutes ago';   
    } else if (elapsed < msPerDay) {
      let time = Math.round(elapsed/msPerHour)

      return time == 1 ? 'a hour ago' : time + ' hours ago';   
    } else if (elapsed < msPerMonth) {
      let time = Math.round(elapsed/msPerDay)
      return time == 1 ? 'a day ago' : time + ' days ago';   
    } else if (elapsed < msPerYear) {
      let time = Math.round(elapsed/msPerMonth)
      return time == 1 ? 'a month ago' : time + ' months ago';   
    } else {
      let time = Math.round(elapsed/msPerYear)
      return  time == 1 ? 'a year ago' : time + ' years ago';   
    }
  }

  const dataFormat = (data: string) => {

    return 'text'
  }

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
          <RecentText>Recent Activity</RecentText>
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
                <ActivityCardBody>
                  <ActivityTextWrapper>
                    <ActivityCardInfoText typeColor={val.activityColor.typeColor}>{val.activityType}</ActivityCardInfoText>
                    <ActivityCardText dataColor={val.activityColor.dataColor}>{val.activityData.length > 120 ? val.activityData.slice(0, 120) : val.activityData}{val.activityData.length > 120 ? (<SeeMoreText seeMoreColor={val.activityColor.seeMoreColor}>...see more</SeeMoreText>) : null}</ActivityCardText>
                  </ActivityTextWrapper>
                </ActivityCardBody>
                <ActivityFooter>
                  <ActivityFooterText timeColor={val.activityColor.timeColor}>{dateFormat(Date.now(), new Date(val.time))}</ActivityFooterText>
                </ActivityFooter>
              </ActivityCard>
            ))}
          </ActivityCardWrapper>
        </RecentActivityContainer>
        <Footer>
          <FooterTitleText titleColor={colors.darkBlue}>KELAS</FooterTitleText>
          <FooterTitleText titleColor={colors.darkGreen}>KITA</FooterTitleText>
        </Footer>
      </HomeWrapper>
    </>
  )
}

export default HomePage