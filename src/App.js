import './App.css';
import ListComponent from './Component/ListComponent';
import HeaderComponent from './Component/HeaderComponent';
import {Routes,Route} from "react-router-dom"
import AddComponent from './Component/AddComponent';
import './index.css'
function App() {
  return (
    <>
      <HeaderComponent/>
      {/* <ListComponent/> */}
      <Routes>
          <Route path={'/student'} element={<ListComponent/>}></Route>
          <Route path={'/student/create'} element={<AddComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
