import { Route, Routes } from "react-router-dom";
import {Users} from './Users'
import {EditUser} from './EditUser'
import {DetailUser} from './DetailUser'
import {AddUser} from './AddUser'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Users/>}/>
        <Route path="/user/add" element = {<AddUser/>}/>
        <Route path="/user/:id" element = {<DetailUser/>}/>
        <Route path="/user/edit/:id" element = {<EditUser/>}/>
      </Routes>
    </>
  );
}

export default App;
