import { useState } from "react";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";

function App() {
  // const Context = useContext();
  // let reducers={
  //   return switch (state): {
  //     case "":

  //       break;

  //     default:
  //       break;
  //   }
  // }
  // let initialState = {
  //   logged_in: false,
  //   newUser: { email: "", password: "" },
  // };
  // const [state, dispatch] = useReducer(reducers, initialState);
  // const [count, setCount] = useState(0);

  return (
    <div className="maindiv d-flex jc">
      {/* <Context.Provider state={state} dispatch={dispatch}>
        
      </Context.Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
