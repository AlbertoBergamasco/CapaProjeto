import AboutContainer from './AboutContainer'
import TecnologyContainer from './TecnologyContainer'
import ProjetosContainer from './ProjetosContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main-content'> 
     <AboutContainer />
     <TecnologyContainer/>
     <ProjetosContainer/>
     </main>
  )
}

export default MainContent