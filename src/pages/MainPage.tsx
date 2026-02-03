import Navbar from './Navbar'
import Home from './Home'
import { Box } from '@mui/material'
import About from './About'
import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Education from './Education'
// import Footer from './Footer'

const MainPage = () => {
  return (
    <>
      <Box>
        <Navbar/>
        <Box sx={{pt:"75px"}}>
           <Home/>
        </Box>
       
        <About/>
        <Education/>
        <Skill/>
        <Experience/>
        <Project/>
        <Contact/>
       
      </Box>
       {/* <Footer/> */}


    </>

  )
}

export default MainPage