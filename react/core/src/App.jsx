import { useState } from "react";
import "./App.css";
import Home from "./home";
import Counter from "./counter";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from "./about";
import Contact from "./contact";
import RefCounter from "./refCounter";
import PageResize from "./pageResize/pageResize";
import Parent from "./passDataToParent/parent";
import LiftParent from "./liftingUpState/parent";
import UseToggle from "./customHook/useToggle";
import UseHoc from "./higherOrderComponent/useHoc";
import UseCallback from "./hooks/useCallback";
import RedCounter from "./redux/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/refCount" element={<RefCounter/>}/>
          <Route path="/resize" element={<PageResize/>}/>
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/liftingupstateparent" element={<LiftParent/>}/>
          <Route path="/toggle" element={<UseToggle/>}/>
          <Route path="/hoc" element={<UseHoc/>}/>
          <Route path="/useCallback" element={<UseCallback/>}/>
          <Route path="/redCounter" element={<RedCounter/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
