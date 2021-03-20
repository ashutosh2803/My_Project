import './App.css';
import { BlackBanner } from './Components/BlackBanner/BlackBanner';
import { Blackbox } from './Components/Blackbox/Blackbox';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { Footer } from './Components/footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Partners } from './Components/Partners/Partners';
import Slideshow from './Components/slideshow/Slideshow';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
