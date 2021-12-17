
import Navbar from 'components/Navbar';

import './styles.scss'
import Top from 'components/Top';
import HowTo from 'components/HowTo';
import Lessons from 'components/Lessons';
import Testimonials from 'components/Testimonials';
import Team from 'components/Team';
import Download from 'components/Download';
import Footer from 'components/Footer';

function Home() {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <Top />
      <HowTo />
      <Lessons />
      <Testimonials />
      <Team />
      <Download />
      <Footer />
    </div>
  )
}

export default Home;