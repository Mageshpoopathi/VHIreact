import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import AddRecord from './components/pages/addRecord';
import EditRecord from './components/pages/editRecord';
import "./style/saas/style.css";
import "./style/tailwind.css";

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<AddRecord/>} />
        <Route path='/edit' element={<EditRecord/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
