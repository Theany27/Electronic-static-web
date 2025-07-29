import { useContext, useState } from 'react';
import CardProduct from '../Component/Item/Card';
import Video from '../Component/Homepage/ComponentShow/Content';
import { CartContext } from '../Component/Homepage/ComponentShow/CardProvider';
import PopUpDetail from '../Component/Homepage/ComponentShow/PopupDetail';
import { Carousel } from 'antd';


const AzusPage = () => {
        const products = [
        {id:31,m:"https://i5.walmartimages.com/asr/728707b6-9b10-45f4-b278-e76ca3b09485_1.a4d2288bbd29924c28c82f74106365be.jpeg",duration: 300,quantity: 1,price: 1000,count:1,name:"msi"},
        {id:32,m:"https://dlcdnwebimgs.asus.com/gain/6accccd9-da0c-46ec-8ce9-061c7bfea45c/", duration: 400,quantity: 1,price: 1000,count:1,name:"azus"},
        {id:33,m:"https://laptopmedia.com/wp-content/uploads/2017/06/macbook_pro_13_a_1143_0_0.jpg", duration: 500,quantity: 1,price: 1000,count:1,name:"phone"},
        {id:34,m:"https://angkormeas.com/wp-content/uploads/2024/09/HK_16-Pro-Max-300x300.jpg?v=1730779212",duration:700,quantity: 1,price: 1000,count:1,name:"nokia"},
        {id:35,m:"https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery-1.png?context=bWFzdGVyfGltYWdlc3wzNjY2Mjh8aW1hZ2UvcG5nfGltYWdlcy9oYjQvaDg4Lzk0MzA5MTk0NTI1OTIucG5nfDkzYjE0YjQyN2M4YjQxZGIyZDYwYzE1N2QxZDU3M2E0NmU3YjA4ODI1Mjc4ZDYwN2QyNzE0MmJmZjI5ZjA",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},
        ];
        const phone=[
        {id:1,images:"https://static.toiimg.com/thumb/msid-113229983,width-1070,height-580,imgsize-18814,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",duration:300,price:1000,name:"iphone"},
        {id:2,images:"https://cdn.mos.cms.futurecdn.net/nLi9X8uJ86VgfYLzoN5694.jpg",duration:300,price:1000,name:"iphone"}, 

        ]
        const [popvisability, setpopVisibility] = useState(false);
        const { selectproduct,showDetail} = useContext(CartContext);

        return (
            <div className='w-full h-auto m-auto mt-24' data-aos="fade-up" data-aos-delay="300">
                <Video/>
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



                <PopUpDetail products={selectproduct} visability={popvisability} onClose={()=>setpopVisibility(false)}/>
                <div className='w-full h-auto sm:h-auto grid grid-cols-2 m-auto sm:w-[70%] sm:grid-cols-3 rounded-lg shadow-lg sm:bg-white'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='w-full sm:h-[470px] m-auto cursor-pointer duration-300 rounded-2xl card relative flex mt-7'
                            onClick={() => {setpopVisibility(true);showDetail(product)}}
                        >
                            <CardProduct images={product.m} duration={product.duration} price={product.price} name={product.name} />
                        </div>
                    ))}
                </div>
            </div>
        );
};
export default AzusPage;