import data from "./data.json";

const FirstView = () => {
  return (
    <div className="flex h-[42rem] mt-1 md:py-8 md:px-8 font-poppins ">
      <div className="relative overflow-hidden ">
        {data.resources.map((resource, key) => {
          return (
            <div
              id={`${key}`}
              className="flex flex-col h-full w-full md:flex-row relative "
            >
              {key % 2 ? (
                <div className="absolute text-center inset-x-0 bottom-0">
                  <a
                    href={resource.innerLink}
                    className=" inline-block bg-green-600 h-4 w-4"
                  ></a>
                  <span className="inline-block bg-white h-4 w-4"></span>
                </div>
              ) : (
                <div className="absolute text-center inset-x-0 bottom-0">
                  <span className="inline-block bg-white h-4 w-4"></span>
                  <a
                    href={resource.innerLink}
                    className=" inline-block bg-green-600 h-4 w-4"
                  ></a>
                </div>
              )}

              <div className="h-full w-screen">
                <div
                  className="bg-cover bg-no-repeat h-full"
                  style={{
                    backgroundImage: `url(${resource.imageURL || ""})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col bg-[#2E2E2E] h-[35%]  text-white text-center items-center md:w-[45%] md:h-full md:justify-center">
                <div className="hidden w-[80%] text-4xl font-black md:flex md:mt-20">
                  {resource.title}
                </div>
                <div className="flex my-4 w-[60%] justify-center">
                  {resource.description}
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      resource.link;
                    }}
                    className="my-2 h-[3.25rem] w-60 text-xl border-solid rounded border-2 border-[#13C296] hover:text-black hover:hover:bg-[#19F5BE] hover:font-bold"
                  >
                    {resource.textButton}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstView;
