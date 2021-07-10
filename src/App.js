
import {  useSelector } from 'react-redux';
import './App.css';
import Panel from './components/Panel';
import PanelBlank from './components/PanelBlank';
import SideBar from './components/SideBar';


function App() {
  const active = useSelector(state => state.vocabulario.active);
  
  return (
    <>
     <SideBar />
      {
        (active.length!==0)
        ?(  <Panel />)
        :(<PanelBlank/>)   
      }
     
    </>
  );
}

export default App;
