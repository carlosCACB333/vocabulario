
import {  useSelector } from 'react-redux';
import './App.css';
import Panel from './components/Panel';
import PanelBlank from './components/PanelBlank';
import SideBar from './components/SideBar';


function App() {
  
  const active = useSelector(state => state.vocabulario.active);
  
  return (
    <div className='row contenedor'>
      <SideBar />
      
      {
        (active.length!==0)
        ?(  <Panel />)
        :(<PanelBlank/>)   
      }
     
    </div>
  );
}

export default App;
