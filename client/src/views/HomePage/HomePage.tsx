import React from 'react'
import NotesHome from '../../assets/notes-home.svg'
import Sally from '../../assets/Saly-10.svg'
import { Row, Col } from '../../styles/Global.style'
import {
  Container,
  HomeWrapper
} from '../../styles/Home.style'

const HomePage:React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <Container>
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                  <h1>KELASKITA</h1>
                  <p>A helpdesk program that will help every teacher to managing the class</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#e3e7dc', borderRadius: '50%'}}>
                <img src={Sally} width='60%' />
              </div>
        </Container>
      </HomeWrapper>
    </>
  )
}

export default HomePage