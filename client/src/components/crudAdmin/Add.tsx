import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../app/state/categoriesSlice";
import { getAllColours } from "../../app/state/coloursSlice";
import { getAllSizes } from "../../app/state/sizeSlice";
import { AppDispatch, AppStore } from "../../app/store";
import { postRequestFile } from "../../services/httpRequest";
import { ErrorFormAdmin, Success } from "../../utils/notification";
import Spinner from "../Spinner/Spinner";

export interface Categories {
  categoryName: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}
export interface Colours {
  colourName: string;
  colourValue: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
}

const Add = () => {
  const [productName, setpProductName] = useState<string | Blob>("");
  const [description, setDescription] = useState<string | Blob>("");
  const [quantityInStock, setQuantityInStock] = useState<string | Blob>("");
  const [price, setPrice] = useState<string | Blob>("");
  const [productPic, setProductPic] = useState<FileList>();
  const [sizes, setSizes] = useState<string | Blob>("");
  const [colours, setColours] = useState<string | Blob>("");
  const [categoriesIds, setCategoriesIds] = useState<string | Blob>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const stateCategories = useSelector(
    (state: AppStore) => state.categories.list
  );
  const stateSizes = useSelector((state: AppStore) => state.sizes.list);
  const stateColours = useSelector((state: AppStore) => state.colours.list);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllColours());
    dispatch(getAllSizes());
  }, []);

  let len: number;
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    len = 8;
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("quantityInStock", quantityInStock);
    formData.append("price", price);
    formData.append("sizes", sizes);
    formData.append("colours", colours);
    formData.append("categoriesIds", categoriesIds);
    console.log(formData);
    for (let i = 0; i < len; i++) {
      formData.append("productPic", productPic ? productPic[i] : "");
    }
    e.preventDefault();

    postRequestFile(formData, "/products/save")
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        Success("Su producto se generó correctamente", "😁");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err.error);
        ErrorFormAdmin("Faltan campos que rellenar");
      });
  };

  const hanldeCategoriesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const filterCategory: any = stateCategories.find(
      (el: Categories) => el.categoryName === selected
    );
    if (selected) {
      setCategoriesIds(filterCategory?.id);
    }
  };
  const handleColours = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const filterColours: any = stateColours.find(
      (el: Colours) => el.colourName === selected
    );
    if (selected) {
      setColours(filterColours.id);
    }
  };
  const handleSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const filterSizes: any = stateSizes.find(
      (el) => el.sizeLetter === selected
    );
    if (selected) {
      setSizes(filterSizes.id);
    }
  };

  return (
    <div className=" flex p-2 pt-8 md:pt-4 md:gap-10 flex-col gap-20 w-[100%]  md:items-end  h-screen">
      <h2 className="text-lg font-semibold w-[100vw] md:w-auto ">
        Hola admin! me alegra tenerte de nuevo 😁!
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-5 md:p-0 p-4 h-full w-screen md:w-[80%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="productName"
          placeholder="Nombre del producto"
          className="form-inputs "
          onChange={(e) => setpProductName(e.target.value)}
          value={productName as string}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          className="form-inputs"
          onChange={(e) => setDescription(e.target.value)}
          value={description as string}
        />
        <input
          type="number"
          name="quantityInStock"
          placeholder="Cantidad Disponible"
          className="form-inputs"
          onChange={(e) => setQuantityInStock(e.target.value)}
          value={quantityInStock as string}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          className="form-inputs"
          onChange={(e) => setPrice(e.target.value)}
          value={price as string}
        />
        <div className="flex md:w-max md:gap-5 w-[100%] justify-center">
          <select
            name="categories"
            onChange={hanldeCategoriesChange}
            className="border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]  "
          >
            <option value="Zapatillas">Zapatillas</option>
            <option value="Remeras">Remeras</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Shorts">Shorts</option>
            <option value="Camisetas">Camisetas</option>
          </select>
          <select
            name="colours"
            onChange={handleColours}
            className="border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]  "
          >
            <option value="Verde">Verde</option>
            <option value="Azul">Azul</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
            <option value="Negro">Negro</option>
            <option value="Rojo">Rojo</option>
          </select>

          <select
            name="size"
            onChange={handleSize}
            className="border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]"
          >
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="XL">XL</option>
            <option value="XS">XS</option>
            <option value="XXL">XXL</option>
          </select>
        </div>

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
                SVG, PNG, JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="productPic"
              multiple
              onChange={(e) =>
                setProductPic(e.target.files ? e.target.files : productPic)
              }
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
          {isLoading && <Spinner windowSize="full" />}
        </div>
      </form>
    </div>
  );
};

export default Add;
