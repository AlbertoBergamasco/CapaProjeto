import Avatar from '../img/Eu.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationContainer'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Alberto Vinicius'></img>
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer />
      <a href='' className='btn'>Dowload curriculo</a>
    </aside>
  )
}

export default Sidebar