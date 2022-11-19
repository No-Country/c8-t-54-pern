import { useSelector } from "react-redux";
import { AppStore } from "./app/store";
import { Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Home from "./pages/Home";
import Login from './pages/Login/Login'
import Register from "./pages/Register/Register";

const client = new QueryClient()

function App() {
  const userState = useSelector((store: AppStore) => store.auth);
  return (
    <QueryClientProvider client={client}>
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
    </QueryClientProvider>
  );
}

export default App;
