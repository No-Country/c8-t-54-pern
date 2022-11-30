import axios from "axios"
import {useEffect,useState} from 'react'
import imgPrueba from "../../assets/img/danny-nee-EKUugW254Y0-unsplash 1.png"
import {BsTrashFill,BsPencilSquare} from 'react-icons/bs'
import { deleteProduct } from "../../utils/notification";

const URL: string = import.meta.env.VITE_API_URL;
interface EventModel {
  CategorieId:null
  createdAt : string
  description: string
  id: string
  price: string 
  productName: string 
  quantityInStock:number
  updatedAt:string
 }


const EditAndDelete  =  () => {
  const [products,setProducts] = useState([])
  const getProduct = async () => {
   try{
    const {data} = await axios.get(URL+'/products')
    setProducts(data.products)
   }
   catch(error){
    if(axios.isAxiosError(error)){
      console.log("error message: ", error.message);
    }
   }
  }
  useEffect(() => {
    getProduct()
  },[])
  const deleteProducts = () => {
    deleteProduct('¿Estas seguro de eliminar este producto?','¡No podrás revertir esto!')
  }


 type dataGet = EventModel;
  return (
      <section className="flex flex-col gap-11 justify-center items-center p-2 pt-4 md:w-[70%] w-full">
        <h2 className="text-lg font-semibold">Hola admin! me alegra tenerte de nuevo 😁!</h2>
        {products.map((product:dataGet) => (
            <article key={product.id} className="flex p-1 gap-1 justify-between w-[100%] md:w-[90%] h-[auto] items-center shadow drop-shadow-2xl">
              <div className="md:h-[8rem]  h-[7rem] ">
                <img src={imgPrueba} alt="imagen de prueba" className="h-full"/>
              </div>
              <div className="flex flex-col text-sm  md:gap-2">
                <p>Precio: {product.price}</p>
                <p>Cantidad disponible: {product.quantityInStock}</p>
                <p>Producto: {product.productName}</p>
                <p>Fecha de creacion: {product.createdAt}</p>
              </div>
              <div className="flex flex-col gap-4 w-[8rem] items-center">
                <button onClick={deleteProducts} className="flex items-center  bg-[#BF0426] md:rounded-[1.1em] md:p-[1em] rounded-[0.6em] p-[0.6em] text-[#DEDEDE] hover:bg-[#db2748]">
                  <BsTrashFill/>
                </button>
                <button className="flex items-center  bg-[#40c057]  md:rounded-[1.1em] md:p-[1em] rounded-[0.6em] p-[0.6em] text-[#DEDEDE] font-bold hover:bg-[#56b066]">
                    <BsPencilSquare/>
                </button>
              </div>
            </article>
          ))}
      </section>
  )
}

export default EditAndDelete