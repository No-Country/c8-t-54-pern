import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarSecundary from "../../components/NavbarSecundary/NavbarSecundary";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import Cart from "../../components/Cart/Cart";
import { Key, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "../../app/store";
import { getAllProducts } from "../../app/state/productsSlice";
import { getAllColours } from "../../app/state/coloursSlice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFilter, BsFillCaretDownFill } from "react-icons/bs";
import { getAllSizes } from "../../app/state/sizeSlice";
import { getAllCategories } from "../../app/state/categoriesSlice";

const Catalogue = () => {
  const [width, setWhidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState({
    open: false,
    waist: false,
    colors: false,
  });
  const [openSort, setOpenSort] = useState(false);

  const { logged } = useSelector((store: AppStore) => store.auth);
  const products = useSelector((store: AppStore) => store.products.list);
  const colours = useSelector((store: AppStore) => store.colours.list);
  const sizes = useSelector((store: AppStore) => store.sizes.list);
  const categories = useSelector((store: AppStore) => store.categories.list);

  const handleSort = (event: React.MouseEvent<HTMLLIElement>) => {
    const sort: HTMLLIElement = event.currentTarget;
    console.log(`Ordenar por ${sort.innerHTML}`);
  };

  const dispatch = useDispatch<AppDispatch>();

  const viewWindow = () => {
    setWhidth(window.innerWidth);
  };

  useEffect(() => {
    if (colours.length === 0) dispatch(getAllColours());
    if (products.length === 0) dispatch(getAllProducts());
    if (sizes.length === 0) dispatch(getAllSizes());
    if (categories.length === 0) dispatch(getAllCategories());

    window.addEventListener("resize", viewWindow);
  }, []);

  if (products.length === 0) return <Spinner windowSize='full' />;

  return (
    <>
      <Navbar width={width} setWidth={setWhidth} setIsOpen={setIsOpen} />
      {width >= 768 && <NavbarSecundary width={width} />}
      {logged && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="flex font-poppins text-[1.5rem] font-[1000] p-4 sm:justify-center">
        Todos los Productos
      </div>
      <div className="flex px-4 justify-between sm:mx-20">
        <div>
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() =>
              setOpenFilter({ ...openFilter, open: !openFilter.open })
            }
          >
            <BsFilter className="mr-2" /> Filtrar
            <IoIosArrowDown className="ml-2" />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`${
              !openFilter.open ? "hidden" : ""
            } absolute p-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
            placeholder="Categorias"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="multiLevelDropdownButton"
            >
              <li>
                <select
                  name="prueba"
                  id="prueba"
                  size={6}
                  className="block w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-none rounded-sm"
                >
                  <option value="">CATEGORIAS</option>
                  {categories?.map((category) => (
                    <option
                      key={category.id}
                      id={category.id}
                      value={category.categoryName}
                    >
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <div
                  className="flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() =>
                    setOpenFilter({ ...openFilter, waist: !openFilter.waist })
                  }
                >
                  Talle
                  {openFilter.waist ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {openFilter.waist ? null : (
                  <div className="flex justify-between flex-wrap">
                    {sizes?.map((size) => (
                      <div
                        key={size.id}
                        id={size.id}
                        className="flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"
                      >
                        {size.sizeLetter}
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <div
                  className="flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() =>
                    setOpenFilter({ ...openFilter, colors: !openFilter.colors })
                  }
                >
                  Colores
                  {openFilter.colors ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {openFilter.colors ? null : (
                  <div className="flex flex-wrap justify-between">
                    {colours?.map((color) => (
                      <div
                        style={{ background: `${color.colourValue}` }}
                        key={color.id}
                        id={color.id}
                        className={`flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center mt-1`}
                      ></div>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                className="
          dropdown-toggle
          px-6
          py-2.5
          text-[#3056D3]
          font-medium
          border-[#666666]
          border-2
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg hover:text-white
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setOpenSort(!openSort)}
              >
                Ordenar por:
                <BsFillCaretDownFill className="ml-2" />
              </button>
              <ul
                className={`${
                  !openSort ? "hidden" : ""
                } dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-non`}
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="dropdown-item li_menu_sort" onClick={handleSort}>
                  Menor precio
                </li>
                <li className="dropdown-item li_menu_sort" onClick={handleSort}>
                  Mayor Precio
                </li>
                <li className="dropdown-item li_menu_sort" onClick={handleSort}>
                  Alfabético a-z
                </li>
                <li className="dropdown-item li_menu_sort" onClick={handleSort}>
                  Alfabético z-a
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-8">
        <div className="flex flex-wrap w-full justify-center gap-6 sm:w-[60rem]">
          {products?.map((prod) => {
            return (
              <ProductCard
                key={prod.id as Key}
                id={prod.id}
                productName={prod.productName}
                description={prod.description}
                quantityInStock={prod.quantityInStock}
                price={prod.price}
                ProductImgs={
                  prod.ProductImgs?.length
                    ? prod.ProductImgs
                    : [
                        {
                          ProductId: "",
                          id: "",
                          date: new Date(),
                          imgUrl: "",
                          status: "",
                          createdAt: new Date(),
                          updatedAt: new Date(),
                        },
                      ]
                }
                Size={prod.Size}
                Colours={prod.Colours}
                Categories={prod.Categories}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
