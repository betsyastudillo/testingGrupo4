// import logo from './platzi.webp';
import './App.css';
import './index.css';
import { NavBar } from './NavBar';
import { Hero } from './Hero';
import { Hero2 } from './Hero2';
import { CardApp } from './CardApp';
import { Categories } from './Categories';
/*import { formReg } from './formReg';*/


function App() {

  return (
    <div className="App">
      {NavBar()}
      <div className="container-fluid">
        {Categories()}
        {Hero()}
        <div className="row my-5">
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
          <div className="col-12 col-sm-4 mb-3">{CardApp()}</div>
        </div>
        {Hero2()}
      </div>
    </div>
  );
}


export default App;
