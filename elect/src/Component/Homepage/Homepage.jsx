import { useState } from 'react';
import "aos/dist/aos.css";
import Video from './ComponentShow/Content';
import Pro_Demo from './ProductDemo/Pro_demo';
import { IoIosSend } from "react-icons/io";
import { MdClose } from "react-icons/md";
import OpenAI from "openai";
import { Carousel } from 'antd';
import HPageLay from './ProductDemo/HPageLay';
import aiimgae from "./ComponentShow/img/Chatbot.png";




const Homepage = (props) => {
    const phone=[
        {id:1,images:"https://static.toiimg.com/thumb/msid-113229983,width-1070,height-580,imgsize-18814,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",duration:300,price:1000,name:"iphone"},
        {id:2,images:"https://cdn.mos.cms.futurecdn.net/nLi9X8uJ86VgfYLzoN5694.jpg",duration:300,price:1000,name:"iphone"}, 

    ]
  const [aivisability, setaiVisibility] = useState(false);
  const [isMenuopen,setIsMenuopen] = useState(false);

    
    
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
     apiKey: "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", //  API key 
    dangerouslyAllowBrowser: true, //allow usage in browser
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:5173/", 
        "X-Title": "My React App",              
    },
    });

    const handleSend = async () => {
        setLoading(true);
        setInput("");
        try {
        const completion = await openai.chat.completions.create({
            model: "deepseek/deepseek-r1:free",
            messages: [
            { role: "user", content: input },
            ],
        });
        setResponse(completion.choices[0].message.content);
        } catch (error) {
        console.error("Error:", error);
        setResponse("Failed to get response. Check console.");
        } finally {
        setLoading(false);
        }
    console.log(input);
        
    };
    // console.log(input);
    return (
        <>
            {/* Button to open the AI panel */}
            <button
                onClick={() => setaiVisibility(true)}
                className={`w-[100px] fixed bottom-5 right-5  bg-gray-200 p-3 rounded-full shadow-xl z-20 transition-opacity mouse-cursor2 ${
                        aivisability ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <img src={aiimgae} alt="" className='w-full h-full object-cover'/>
            </button>

            {/* AI Popup */}
            {aivisability && (
                <div
                className="w-full h-[100vh] bg-black/50 flex items-end justify-end fixed inset-0 z-10"
                onClick={() => setaiVisibility(false)} // click outside to close
                >
                <div
                    className="w-[100%] sm:w-[30%] h-[50vh] bg-white rounded-xl flex flex-col justify-center items-center relative"
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
                >
                    {/* close Button */}
                    <button
                    onClick={() => setaiVisibility(false)}
                    className="absolute top-2 left-2 text-gray-500 hover:text-black"
                    >
                    <MdClose size={24} />
                    </button>
                    
                    <div className=" h-[90%] w-[70%] flex flex-col p-4 border border-gray-300 rounded-lg overflow-y-auto space-y-2">
                         {!response ? (
                            <>
                                <h1 className="text-black text-2xl font-bold text-center">
                                    Welcome to Knea Nhom!
                                </h1>
                                <p className="text-black mt-2 text-center">
                                    Your one-stop shop for all electronic needs.
                                </p>
                                <p className="text-black mt-2 text-center">
                                    How can I help you today?
                                </p>
                            </>
                        ) : (
                            <div className="flex-1 w-full overflow-y-auto">
                                <strong>Response:</strong>
                                <p className="whitespace-pre-line">{response}</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="w-full flex justify-center items-center mt-1">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me here!"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none w-[50%]"
                    />
                    <button className="ml-2  " onClick={handleSend}  disabled={loading} >
                        {loading ? "Loading..." : "Send"}
                    </button>
                    </div>
                </div>
                </div>
            )}

            {/* Other page content */}
            <Video />


            {/* moblie side */}
            <div className='block sm:hidden mt-[100px]'>
                    <Carousel autoplay={7000} className=' relative z-0  '>
                    {phone.map((item,index)=>(
                        <div key={index} className=" relative  bg-black">
                            <img src={item.images} alt="" className=" h-full w-full object-cover"/>
                        </div> 
                    ))}
                    </Carousel> 
            </div>
            


            <HPageLay/>
            <p
                className=" p-2 font-bold text-2xl sm:text-6xl sm:p-10"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Products Feature
            </p>
            <Pro_Demo />

            {/* <p
                className=" p-2 font-bold text-2xl sm:text-6xl sm:p-10"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                iPhones Feature
            </p> */}
            {/* <Pro_Demo /> */}

                {/* <p
                    className="p-10 font-bold text-6xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Laptop Feature
                </p> */}
            {/* <Pro_DemoCom /> */}
    </>
    );
};
export default Homepage;