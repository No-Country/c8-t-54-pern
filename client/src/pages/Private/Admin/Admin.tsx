import RoutesWithNotFound from "../../../utils/RoutesWithNotFound"
import { Route } from "react-router-dom"
import {  PrivateRoutesAdmin } from "../../../models/routes"
import { lazy } from "react"

const Add = lazy(() => import ('../../../components/crudAdmin/Add'))
const DeleteCreate = lazy(() => import ('../../../components/crudAdmin/EditAndDelete'))
const AdminPanel = () => {
  return (
    <RoutesWithNotFound>
      <Route path={'/'} element={<Add/>}/>
      <Route path={PrivateRoutesAdmin.DELETECREATE} element={<DeleteCreate/>}/>
    </RoutesWithNotFound>
  )
}

export default AdminPanel





















/* 
import { useState,ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppStore } from "../../../app/store";
import Add from "../../../components/crudAdmin/Add";
import EditAndDelete from "../../../components/crudAdmin/EditAndDelete";
import { PrivateRoutes } from "../../../models/routes";


type Props = {}

export enum views {
  add,
  editandDelet,
} 

const AdminPanel = (props: Props) => {
  const [use, setUse] = useState<Number>(views.add);
  const user = useSelector((state:AppStore) => state)

  {console.log(user)}
  return (
    <div className="flex">
      <aside className="w-[20%] border-r-2 h-screen  flex flex-col  items-center justify-center gap-10">
        <button 
        onClick={() => setUse(views.add)} 
        className="cursor-pointer bg-transparent w-3/4 hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 px-4 border border-emerald-600/75 hover:text-white rounded">
          Agregar
        </button>
        <button 
        onClick={() => setUse(views.editandDelet)} 
        className="cursor-pointer bg-transparent w-3/4 hover:-emerald-600/75 text-emerald-600/75 font-semibold hover:bg-emerald-600/75 py-2 px-4 border border-emerald-600/75 hover:text-white rounded">
          Editar y Borrar
        </button>
        <Link to={`${PrivateRoutes.DETAILS}`}>
          Details
        </Link>
      </aside>
      <div className="w-[80%] flex justify-center items-center ">
        {use === views.add ? <Add/> : <EditAndDelete/>} 
      </div>
    </div>
  )
};

export default AdminPanel */