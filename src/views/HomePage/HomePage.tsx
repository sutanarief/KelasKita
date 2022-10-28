import React, { useEffect, useState } from 'react'
import {
  Sally,
  Robot,
  Hand,
  Arrow,
  FullStar,
  HalfStar,
  EmptyStar
} from '../../assets'
import { dateFormat } from '../../global/helper'

import { contentList } from '../../data/ContentList'
import { perkList } from '../../data/PerkList'
import { activityList } from '../../data/ActivityList'
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
} from '../../styles/Home.style'

import * as colors from '../../styles/colors'

const HomePage:React.FC = () => {
  const [role, setRole] = useState("")
  const [perks, setPerks] = useState([""])
  const [transform, setTransform] = useState(0)
  const [star, setStar] = useState([0])

  const dataFormat = (data: string) => {

    return 'text'
  }

  const ratingStar = (rating: string) => {
    const starArray = []
    const [whole, part] = parseFloat(rating).toString().split('.')

    for(let i = 0; i < Number(whole); i++) starArray.push(100)
    if(part)  starArray.push(50)
    for (let i = Number(whole); i < (part ? 4 : 5); i++) starArray.push(0);

    return starArray
  }

  const getStar = (value: number) => {
    switch (value) {
      case 100:
        return <FullStar/>
      case 50:
        return <HalfStar/>
      default:
        return <EmptyStar/>
    }
  }

  const onClickSlider = () => {
    if(activityList.length > 3) {
      if(transform == Math.ceil(activityList.length / 3) - 1) {
        setTransform(0)
      } else {
        setTransform(transform + 1)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      onClickSlider()
    }, 30000)
  }, [transform])

  return (
    <>
      <HomeWrapper>
        <ContainerHero>
          <LeftHero>
              <PrimaryText><HighlightText>Easiest</HighlightText> way to get your class fully controlled is here !</PrimaryText>
              <OrdinaryText>A solution to <b>simplify</b> school operational activities with only <b>one</b> application.</OrdinaryText>
          </LeftHero>
          <RightHero>
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
          <RecentText>What our user says</RecentText>
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
              onClick={() => onClickSlider()}
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
                    <ActivityCardInfoText typeColor={val.activityColor.typeColor}>
                      {ratingStar(val.rating).map((value: number) => (
                          getStar(value)
                      ))}
                    </ActivityCardInfoText>
                    <ActivityCardText dataColor={val.activityColor.dataColor}>{val.activityData.length > 120 ? val.activityData.slice(0, 120) : val.activityData}{val.activityData.length > 120 ? (<SeeMoreText seeMoreColor={val.activityColor.seeMoreColor}>...see more</SeeMoreText>) : null}</ActivityCardText>
                  </ActivityTextWrapper>
                </ActivityCardBody>
                <ActivityFooter>
                  <ActivityFooterText timeColor={val.activityColor.timeColor}>{dateFormat(Date.now(), new Date(val.time).getTime())}</ActivityFooterText>
                </ActivityFooter>
              </ActivityCard>
            ))}
          </ActivityCardWrapper>
        </RecentActivityContainer>
      </HomeWrapper>
    </>
  )
}

export default HomePage