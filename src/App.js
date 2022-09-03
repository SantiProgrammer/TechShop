
import './App.css';
import Navbar from './components/navbar/Navbar';
/* import ItemListContainer from './containers/ItemListContainer' */
import ItemDetailContainer from './containers/ItemDetailContainer'
import Footer from './components/footer/Footer';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <ItemDetailContainer/>
      {/* <ItemListContainer/> */}
      <Footer/>

    </div>
  );
}

export default App;
