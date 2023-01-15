import FAQs from '../../components/FAQs';

import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Value from '../../components/Value';
import './home.css'

const Home = () => {
  return (
    <div>
<MainHeader/>
    <Programs/>
    <Value/>
    <FAQs/>
    <Testimonials/>
    </div>
    
  )
}

export default Home;