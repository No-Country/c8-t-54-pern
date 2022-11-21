import React from "react";
type PropsView = {
  title: String;
  description: String;
  textButton: String;
  clickButton: Function;
};
function FirstView({ title ,description, textButton, clickButton }: PropsView) {
  return (
    <div className="flex h-[42rem] mt-1 md:py-8 md:px-8">
      <div className="flex flex-col h-full w-full md:flex-row">
        <div className="h-full w-full">
          <div className="bg-footballResponsive bg-cover bg-no-repeat h-full"></div>
        </div>
        <div className="flex flex-col bg-[#2E2E2E] h-[35%] font-poppins text-white text-center items-center md:w-[45%] md:h-full md:justify-center">
          <div className="hidden w-[80%] text-4xl font-black md:flex md:mt-20">
            {title}
          </div>
          <div className="flex my-4 w-[60%] justify-center">{description}</div>
          <div className="flex justify-center">
            <button
              onClick={(e) => clickButton(e)}
              className="my-2 h-[3.25rem] w-60 text-xl border-solid rounded border-2 border-[#13C296] hover:text-black hover:hover:bg-[#19F5BE] hover:font-bold"
            >
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstView;
