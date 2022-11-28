import { ChangeEvent,useState } from "react";
import NavbarAdmin from "./NavbarAdmin";

export interface inputs  {
  productName: string,
  description:string,
  quantityInStock: number,
  price: number,
}
const Add = () => {
  const [input,setInput] = useState<inputs>({
    productName:'',
    description:'',
    quantityInStock:0,
    price:0,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement> ) =>{
    let value: typeof input[keyof typeof input] = event.target.value
    setInput({ ...input, [event.target.name]: value })
  }
  const handleImage = (event:ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files
    const formData = new FormData();
    file&&formData.append('file',file)
  }
  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
  }

  
  return (
    <div className="flex">
      <NavbarAdmin/>
    <div className=" flex p-2 flex-col gap-10 h-full w-[100%]">
    <h2 className="text-lg font-semibold">Hola admin! me alegra tenerte de nuevo 😁!</h2>
    <form className="flex flex-col  items-center gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="productName"
        placeholder="Nombre del producto"
        className="form-inputs"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Descripcion"
        className="form-inputs"
        onChange={handleChange}

      />
      <input
        type="number"
        name="quantityInStock"
        placeholder="Cantidad Disponible"
        className="form-inputs"
        onChange={handleChange}

      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        className="form-inputs"
        onChange={handleChange}

      />


  <div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-[12rem]  border-2 border-gray-300  rounded-lg cursor-pointer   hover:bg-[#3A3A3A]  ">
      <div className="flex flex-col items-center justify-center pt-2 pb-2">
        <svg
          aria-hidden="true"
          className="w-10 h-10 mb-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Enviar 3 imagenes</span> 
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG  (MAX. 800x400px)
        </p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" name="file" multiple onChange={handleImage}/>
    </label>
  </div>


      <div className="flex gap-3 w-2/5">
        <button className="form-buttons bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all">
          cancelar
        </button>
        <button className="form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all">
          crear
        </button>
      </div>
    </form>
    </div>
    </div>

  );
};

export default Add;

