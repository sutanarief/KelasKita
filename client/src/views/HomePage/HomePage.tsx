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
  OrdinaryText
} from '../../styles/Home.style'

const HomePage:React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <ContainerHero>
              <LeftHero>
                  <PrimaryText><HighlightText>Easiest</HighlightText> way to get your class fully controled is here !</PrimaryText>
                  <OrdinaryText>A solution to <b>simplify</b> school operational activities with only <b>one</b> application.</OrdinaryText>
              </LeftHero>
              <RightHero>
                <img src={Sally} width='60%' />
              </RightHero>
        </ContainerHero>
      </HomeWrapper>
    </>
  )
}

export default HomePage