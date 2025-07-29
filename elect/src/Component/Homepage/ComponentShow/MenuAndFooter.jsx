import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiHandbagLight } from "react-icons/pi";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import VPhone from "./img/VPhone.png";
import { Link } from "react-router-dom";
import Addtocard from "./AddToCard";
import AzusPage from "../../../ProductsPage/AzusPage";
import { CartContext } from "./CardProvider";
import PopUpDetail from "./PopupDetail";
import { RiMenuFold2Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPopup from "../../MainLayOut/LogPage";



const MenuAndFooter = () => {
 
  const [scrollY, setScrollY] = useState(0);

  const [cardvisability, setcardVisibility] = useState(false);
  const [isMenuopen,setIsMenuopen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  
  const location = useLocation();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(""); // Track which submenu was clicked


  const { productscard,remove ,onQtyChange} = useContext(CartContext);
  const totalQuantity = productscard.reduce((sum, item) => sum + item.quantity, 0);


  // Function to update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerHeight = Math.max(100 - scrollY * 0.5, 80);
  
  return (
    <>  
      {/* <MenuAndFooter /> */}
      <div className="">
        <header
        
          className="border sm:w-full border-gray-200 bg-white w-full sm:m-auto sm:bg-white "
          style={{
            height: `${headerHeight}px`,
            transition: "height 0.2s ease", // Smooth transition for height
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            
            zIndex: 10,
            borderRadius: "20px 20px 0 0",
          }}
        >
          
          <div className="grid-container ">
            <div
              className=" flex justify-end items-center   sm:w-[200px] h-full ml-[250px] sm:ml-[200px]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Link to="/">
                <img src={VPhone} alt="" className="w-[300px]"/>
              </Link>
            </div>
            <div className="grid-item1 flex justify-between hidden sm:block ">
              <nav>
                <ul>
                  <li>
                    <a
                      href="#"
                      className=" rounded-full h-10 w-[150px] truncate mt-2 text-xs  uppercase font-medium hover:text-xs duration-200"
                    >
                      phone
                      <a
                        className="head-bu rounded-full text-white bg-black text-sm w-[150px]"
                        style={{ color: "white" }}
                      >
                        PHONE
                      </a>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/iphone" className="duration-200">
                          Iphone
                        </Link>
                      </li>
                      <li>
                        <Link to="sumsung" className="duration-300">
                          Saumsung
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=""
                      className="rounded-full h-10 w-[170px] truncate mt-2 text-xs  uppercase font-medium hover:text-xs duration-200"
                    >
                      computer
                      <a
                        className="head-bu rounded-full text-white bg-black text-sm uppercase w-[170px]"
                        style={{ color: "white" }}
                      >
                        computer
                      </a>
                    </a>
                    <ul className="sub-menu ">
                      <li>
                        <Link to="/msi" className="duration-200">
                          Msi
                        </Link>
                      </li>
                      <li>
                        <Link to="/azus" className="duration-300">
                          Azus
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full h-10 w-[150px] truncate mt-2 text-xs  uppercase font-medium hover:text-xs duration-200"
                    >
                      ipad
                      <a
                        className="head-bu rounded-full text-white bg-black text-sm w-[150px]"
                        style={{ color: "white" }}
                      >
                        ipad
                      </a>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/apple" className="duration-200">
                          Iphone
                        </Link>
                      </li>
                      <li>
                        <Link to="/huawei" className="duration-300">
                          Huawei
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div
              className="grid-item w-[400px] mr-[220px] flex justify-between item-header-icon sm:w-[200px]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="block sm:hidden"> 
                <Link to="/">
                <img src={VPhone} alt="" className="w-[150px]"/>
              </Link>
              </div>
              
              <div className="relative">
              <PiHandbagLight className="text-3xl mt-3 cursor-pointer mouse-cursor" onClick={() => setcardVisibility(true)} />
              
              {totalQuantity >= 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">
                  {totalQuantity}
                </span>
              )}
            </div>
              {/* <PiHandbagLight className="cursor-pointer text-3xl mt-3 mouse-cursor" onClick={()=>setcardVisibility(true)}/> */}
              <CiUser className="cursor-pointer text-3xl mt-3 mouse-cursor2" onClick={() => setIsLogin(true)}/>
              <GoSearch
                className="cursor-pointer text-3xl mt-3 mouse-cursor3 hidden sm:block"
                onClick={() => alert("This is an alert message!")}
              />
                  <RiMenuFold2Line className={`md:mt-5 text-xl ml-15 lg:hidden  cursor-pointer duration-500 mt-3 block sm:hidden ${isMenuopen ? "rotate-90" : "rotate-0" }`} onClick={()=>setIsMenuopen(!isMenuopen)} size={25}/>
                  {/* items on moblie */}
                  <div >
                  <div className={` lg:hidden absolute top-[100px] right-0 w-[400px] h-[1500px] overflow-hidden bg-white  z-50 rounded-2xl text-2xl font-bold text-black​​​ text-[15px] transition-all duration-500 ${isMenuopen ? "transform translate-y-" : "transform translate-y-[700px]" }`}>        
                    <div>
                      <li className={`list-none w-full text-start p-4 transition-transform  duration-500 ease-in-out ${isMenuopen ? "translate-x-2 " : "-translate-x-full "}`}>
                            <button
                              onClick={()=>setIsMenuopen(!isMenuopen)}
                              className={`border border-xl rounded-2xl w-[100px] transition-colors duration-200
                              ${location.pathname === "/" ? "bg-black text-white" : "bg-white"}`}
                            >
                              <Link to="/"><span className={`${location.pathname === "/" ? " text-white" : ""}`}>Home</span></Link>
                            </button>
                    </li>
                    <li className={`list-none w-full text-start p-4 transition-transform  duration-1000 ease-in-out bg- ${isMenuopen ? "translate-x-2 " : "-translate-x-full "} `}>
                          <div className="dropdown">
                            <button
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className={`border border-xl rounded-2xl w-[100px] px-2 py-1 transition-colors
                              ${["/iphone", "/sumsung"].some(path => location.pathname.startsWith(path))
                              ? "bg-black text-white"
                              : "bg-white text-black"}`}
                            >
                              Phone 
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 ml-2 bg-white shadow-md rounded-md w-[300px] p-2 
                                  ${isDropdownOpen ? "traslate-y-100 max-h-96 scale-100 opacity-100" : "traslate-y-0 max-h-0 scale-95 opacity-0"}`}>
                                <Link to="/iphone" className={` px-2 py-1 rounded block ${activeMenu === "iphone" || location.pathname === "/iphone" ? "bg-gray-400 text-black" : "bg-white"}`} onClick={()=>setIsMenuopen(!isMenuopen)}>IPHONE</Link>
                                <Link to="/sumsung" className={` px-2 py-1 rounded block ${activeMenu === "sumsung" || location.pathname === "/sumsung" ? "bg-gray-400 text-black" : "bg-white"}`}onClick={()=>setIsMenuopen(!isMenuopen)}>SAUMSUNG</Link>
                              </div>
                            </div>
                    </li>
                    <li className={`list-none w-full text-start p-4 transition-transform mt-[-25px] duration-700 ease-in-out ${isMenuopen ? "translate-x-2 " : "-translate-x-full "}`}>
                      <div className="dropdown">
                            <button
                              onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                              className={`border border-xl rounded-2xl w-[100px] px-2 py-1 transition-colors
                              ${["/msi", "/azus",].some(path => location.pathname.startsWith(path))
                              ? "bg-black text-white"
                              : "bg-white text-black"}`}
                            >
                              Computer
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 ml-2 bg-white shadow-md rounded-md w-[300px] p-2 
                                  ${isDropdownOpen2 ? "traslate-y-100 max-h-96 scale-100 opacity-100" : "traslate-y-0 max-h-0 scale-95 opacity-0"}`}>
                                <Link to="/msi" className={` px-2 py-1 rounded block ${activeMenu === "msi" || location.pathname === "/msi" ? "bg-gray-400 text-black" : "bg-white"}`} onClick={()=>setIsMenuopen(!isMenuopen)}>MSI</Link>
                                <Link to="/azus" className={` px-2 py-1 rounded block ${activeMenu === "azus" || location.pathname === "/azus" ? "bg-gray-400 text-black" : "bg-white"}`}onClick={()=>setIsMenuopen(!isMenuopen)}>AZUS</Link>
                              </div>
                            </div>
                    </li>
                    <li className={`list-none w-full text-start p-4 transition-transform mt-[-25px] duration-500 ease-in-out ${isMenuopen ? "translate-x-2 " : "-translate-x-full "}`}>
                     <div className="dropdown">
                            <button
                              onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
                              className={`border border-xl rounded-2xl w-[100px] px-2 py-1 transition-colors
                              ${["/apple", "/huawei"].some(path => location.pathname.startsWith(path))
                              ? "bg-black text-white"
                              : "bg-white text-black"}`}
                            >
                              Ipad
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden mt-2 ml-2 bg-white shadow-md rounded-md w-[300px] p-2 
                                  ${isDropdownOpen3 ? "traslate-y-100 max-h-96 scale-100 opacity-100" : "traslate-y-0 max-h-0 scale-95 opacity-0"}`}>
                                <Link to="/apple" className={` px-2 py-1 rounded block ${activeMenu === "/apple" || location.pathname === "/apple" ? "bg-gray-400 text-black" : "bg-white"}`} onClick={()=>setIsMenuopen(!isMenuopen)}>APPLE</Link>
                                <Link to="/huawei" className={` px-2 py-1 rounded block ${activeMenu === "/huawei" || location.pathname === "/huawei" ? "bg-gray-400 text-black" : "bg-white"}`}onClick={()=>setIsMenuopen(!isMenuopen)}>HUAWEI</Link>
                              </div>
                            </div>
                    </li>
                    </div>
                  </div>
                  </div>
            </div>
          </div>
        </header>

        <Addtocard
                visability={cardvisability}
                products={productscard}
                onClose={()=>setcardVisibility(false)}
                onProductRemove={remove}
                onQtyChange={onQtyChange}
                />
        <LoginPopup 
        isOpen={isLogin}
        onClose={()=>setIsLogin(false)}
        />
      </div>
    </>
  );
};
export default MenuAndFooter;
