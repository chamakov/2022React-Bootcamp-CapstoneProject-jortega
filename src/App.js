import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavbarEC from './components/header/NavbarEC';
import Footer from './components/footer/Footer';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">      
    <NavbarEC />
      <h1>Hello Bitch</h1>
    <Footer />
    </div>
  );
}

export default App;
