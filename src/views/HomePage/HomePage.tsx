import React from 'react'
import NotesHome from '../../assets/notes-home.svg'
import Sally from '../../assets/Saly-10.svg'
import { Row, Col } from '../../styles/Global.style'
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
  ContentText
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
                <img src={Sally} width='60%' />
              </RightHero>
        </ContainerHero>
        <ContentContainer>
          <Content>
            <ContentText>How It's Work ?</ContentText>
          </Content>
        </ContentContainer>
      </HomeWrapper>
    </>
  )
}

export default HomePage