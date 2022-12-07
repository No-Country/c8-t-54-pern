import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllColours } from "../../app/state/coloursSlice";
import { getAllSizes } from "../../app/state/sizeSlice";
import { AppStore, AppDispatch } from "../../app/store";
import { postRequest, saveProductRequest } from "../../services/httpRequest";
import { ErrorFormAdmin, Success } from "../../utils/notification";

export interface inputs {
  productName: string;
  description: string;
  quantityInStock: number;
  price:number
  colours:any
}

export interface sizesBack {
  createdAt: Date;
  deletedAt: null;
  description: string;
  gender: string;
  id: string;
  sizeLetter: string;
  sizeNumber: number;
  updatedAt: Date;
}

export interface coloursBack {
  colourName: string;
  colourValue: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}


const Add = () => {
  const [input, setInput] = useState<inputs>({
    productName: "",
    description: "",
    quantityInStock: 0,
    price: 0,
    colours:''
  })

  const dispatch = useDispatch<AppDispatch>();
  const stateSize = useSelector((state: AppStore) => state.sizes.list);
  const stateColours= useSelector((state: AppStore) => state.colours.list);
  



  useEffect(() => {
    dispatch(getAllSizes());
    dispatch(getAllColours());
  }, []);


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value
      }))
  };
  
  

  

  
  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const productPic: any = event.currentTarget.files;
    if (productPic) {
      const formData = new FormData();
      formData.append("img", productPic);
    }
    setInput({ ...input, ...productPic });
  };
  
  
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      input.productName === "" &&
      input.description === "" &&
      input.price === 0 &&
      input.quantityInStock === 0
    ) {
      ErrorFormAdmin("Faltan campos que relllenar");
    } else {
      Success("Su producto se generó correctamente", "😁");
    }
  };

  return (
    <div className=" flex p-2 flex-col gap-10 w-[100%]  md:items-end   h-screen md:h-screen ">

      <form
        className="flex flex-col justify-center items-center gap-10 md:p-0 p-4 h-full w-screen md:w-[75%] md:h-full"
        onSubmit={handleSubmit}
      >
          <input
            type="text"
            name="productName"
            placeholder="Nombre del producto"
            onChange={handleInputChange}
            value={input.productName}
            className="form-inputs"
          />
          <input
            type="text"
            name="description"
            placeholder="Descripcion"
            onChange={handleInputChange}
            value={input.description}
            className="form-inputs"
          />
          <input
            type="number"
            name="quantityInStock"
            placeholder="Cantidad Disponible"
            onChange={handleInputChange}
            value={input.quantityInStock}
            className="form-inputs"
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            onChange={handleInputChange}
            value={input.price}
            className="form-inputs"

          />
          <div className="size">
            <label className="flex flex-col items-center justify-center w-[10rem]  border-2 border-gray-300  rounded-lg cursor-pointer   hover:bg-[#3A3A3A]  ">
              <div className="flex flex-col items-center justify-center pt-2 pb-2">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Enviar 3 imagenes</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="file"
                multiple
                onChange={handleImage}
              />
            </label>
          </div>

        <div className="flex gap-3 md:w-2/5  w-3/4">
          <button className="form-buttons  bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all">
            cancelar
          </button>
          <button className="form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all">
            crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
