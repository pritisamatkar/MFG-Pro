import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="flex">
     <Sidebar/>
     <div className='flex flex-1'>
      {/*   <Body/> */}
     </div>
    </div>
  );
}

export default App;
