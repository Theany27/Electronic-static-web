import { useContext, useState } from 'react';
import CardProduct from '../../../Item/Card';
import Video from '../../ComponentShow/Content';
import { CartContext } from '../../ComponentShow/CardProvider';
import PopUpDetail from '../../ComponentShow/PopupDetail';
import { Carousel } from 'antd';


const IpadPage = () => {
        const products = [
        {id:13,m:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533563cv11d.jpg",duration: 300,quantity: 1,price: 1000,count:1,name:"msi"},
        {id:14,m:"https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111841_ipad-pro-4gen-mainimage.png", duration: 400,quantity: 1,price: 1000,count:1,name:"azus"},
        {id:15,m:"https://www.guiahardware.es/wp-content/uploads/2020/12/ipad-pro.jpeg", duration: 500,quantity: 1,price: 1000,count:1,name:"phone"},
        {id:16,m:"https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg",duration:700,quantity: 1,price: 1000,count:1,name:"nokia"},
        {id:17,m:"https://b2c-contenthub.com/wp-content/uploads/2024/05/IMG_3132.jpeg?quality=50&strip=all&w=900",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},
        {id:18,m:"https://www.resetdigitale.it/128489-thickbox_default/apple-ipad-air-5-2022-256gb-wifi-blue.jpg",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},

        ];
        const phone=[
        {id:1,images:"https://s3-alpha.figma.com/hub/file/2316688557/b31c51ea-fb40-4eeb-b97e-9eae5da9b010-cover.png",duration:300,price:1000,name:"iphone"},
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
export default IpadPage;