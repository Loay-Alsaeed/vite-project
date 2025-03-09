import Hero from "../components/Hero/Hero";
import OurProjects from "../components/OurProjects/OurProjects";
import Contact from "../components/Contact/Contact";


const Home = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Hero />
            <OurProjects />
            <Contact />
        </div>
    );
};

export default Home;