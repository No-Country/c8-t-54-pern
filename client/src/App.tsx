import { useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { AppStore } from "./app/store";

function App() {
  const userState = useSelector((store: AppStore) => store.auth);
  console.log(userState)
  return (
    <div>
      
    </div>
  )
}

export default App
