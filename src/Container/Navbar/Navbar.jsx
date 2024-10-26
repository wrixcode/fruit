import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  const navbarmenu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "products",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Shope",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  return (
    <> 
     <nav className="px-7">
    <div className="flex justify-between items-center h-16 px-7">
      {/* logo section */}
      <div className="uppercase text-2xl font-bold flex gap-2">
        <p className="text-primary">fruit</p>
        <p className="text-secondary">store</p>
        <FaLeaf className="text-green-400 text-2xl" />
      </div>

      {/*computer menu section */}
      <div className="hidden md:block">
        <ul className="flex gap-5 text-gray-500 items-center justify-center ">
          {navbarmenu.map((item) => {
            return (
              <div className="hover:text-primary font-medium " key={item.id}>
                {item.name}
              </div>
            );
          })}
          <button className="hover:bg-primary rounded-full hover:text-white p-2">
            <MdLocalGroceryStore className="text-3xl flex items-center" />
          </button>
   
        </ul>
     
      </div>
      {/* mobile menu */}

      <div className="md:hidden" onClick={() => setOpen(!open)}>
      <TiThMenu className="text-3xl  " />
    </div>
    </div>
  
    </nav>
    <Mobilemenu open={open} />
   </>
  );
};

export default Navbar;
