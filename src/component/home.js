import Img from '../assets/software-developer-6521720_1920.jpg';
import '../App.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <img
        src={Img}
        alt="Augustin Eloy"
        className="home-image"
      />
      <h1 className='Title_header'>Augustin Developer Web</h1>
    </div>
  );
};

export default Home;
