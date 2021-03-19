import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Components/Header/Header';
import MySkills from '../Components/MySkills/MySkills';
import MyRecentWork from '../Components/MyRecentWork/MyRecentWork';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import Growmart from '../Components/Projects/GrowMart/Growmart';
import GrowmartAdmin from '../Components/Projects/GrowmartAdmin/GrowmartAdmin';
import PortfolioProject from '../Components/Projects/PortFolio/Portfolio';
import TodoList from '../Components/Projects/TodoList/TodoList';

const layout = (props) => (
  <Router>
    <div>
      <Header />
      <Switch>
        {/* Projects */}
        <Route path='/project/portfolio' component={PortfolioProject} exact />
        <Route path='/project/growmart' component={Growmart} exact />
        <Route path='/project/growmartAdmin' component={GrowmartAdmin} exact />
        <Route path='/project/todo' component={TodoList} exact />

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
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default layout;
