import React from "react";

const DisplayCard = ({ key, heading, text, img, backGroundColor }) => {
  return (
    // <div className="container mx-auto flex flex-wrap justify-center">
<<<<<<< HEAD
    <div key={key} className="w-full md:w-[50%] p-4 flex  ">
      <div className="container mx-auto flex flex-wrap justify-center bg-gray-200 rounded-3xl ">
        <div className=" p-4 flex">
          {" "}
          {/* lg:max-h-[10rem] */}
          <div className="flex lg:w-[30vw] flex-row items-start bg-gray-100  overflow-hidden shadow-xl rounded-xl " style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)' }}
>
=======
    <div key={key} className="w-full md:w-[50%] p-4 flex ">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className=" p-4 flex">
          {" "}
          {/* lg:max-h-[10rem] */}
          <div className="flex lg:w-[30vw] flex-row items-start bg-gray-100 rounded-lg overflow-hidden ">
>>>>>>> upstream/main
            <div className="pl-2 flex items-center">
              <img
                src={img}
                alt="Icon"
                className="w-12 h-12 p-2 mt-3 rounded-xl"
                style={{ backgroundColor: backGroundColor }}
              />
            </div>
            <div className="flex-1 p-4">
              <h4 className="text-md font-semibold">{heading}</h4>
              <p className="">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
