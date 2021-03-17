
import Header from '../Components/Header/Header';
import MySkills from '../Components/MySkills/MySkills';
import MyRecentWork from "../Components/MyRecentWork/MyRecentWork";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from '../Components/Footer/Footer';


const layout = (props) => (
    <div>
        <Header />
        <MySkills />
        <MyRecentWork />
        <Testimonials />
        <Footer />
    </div>
);

export default layout;