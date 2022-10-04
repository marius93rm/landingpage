import logo from './logo.svg';

//import bootstrap.css
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{"background-image": "linear-gradient(180deg, #eee, #fff 100px, #fff)"}}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
