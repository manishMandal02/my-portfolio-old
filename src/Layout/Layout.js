import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Components/Header/Header';
import MySkills from '../Components/MySkills/MySkills';
import MyRecentWork from '../Components/MyRecentWork/MyRecentWork';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import Growmart from '../Components/Projects/GrowMart/Growmart';

const layout = (props) => (
  <Router>
    <div>
      <Header />
      <Switch>
        {/* Projects */}
        <Route path='/project/portfolio' component={ContactForm} exact />
        <Route path='/project/growmart' component={Growmart} exact />
        <Route path='/project/growmartAdmin' component={ContactForm} exact />
        <Route path='/project/todo' component={ContactForm} exact />

        <Route path='/contact' component={ContactForm} exact />
        <Route path='/about' exact>
          <MySkills />
          <MyRecentWork />
          <Testimonials />
          <Footer />
        </Route>
        <Route path='/recentWork' exact>
          <MySkills />
          <MyRecentWork />
          <Testimonials />
          <Footer />
        </Route>
        <Route path='/testimonials' exact>
          <MySkills />
          <MyRecentWork />
          <Testimonials />
          <Footer />
        </Route>
        <Route path='/' exact>
          <MySkills />
          <MyRecentWork />
          <Testimonials />
          <Footer />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default layout;
