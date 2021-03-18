import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Components/Header/Header';
import MySkills from '../Components/MySkills/MySkills';
import MyRecentWork from '../Components/MyRecentWork/MyRecentWork';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';

const layout = (props) => (
  <Router>
    <div>
      <Header />
      <Route path='/contact' exact>
        <ContactForm />
      </Route>
      <Route path='/' exact>
        <MySkills />
        <MyRecentWork />
        <Testimonials />
        <Footer />
      </Route>
    </div>
  </Router>
);

export default layout;
