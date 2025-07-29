import { useContext, useState } from 'react';
import CardProduct from '../../../Item/Card';
import Video from '../../ComponentShow/Content';
import { CartContext } from '../../ComponentShow/CardProvider';
import PopUpDetail from '../../ComponentShow/PopupDetail';
import { Carousel } from 'antd';


const SumsungPage = () => {
        const products = [
        {id:7,m:"https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-s928-490247-sm-s928blbwxid-539387825?$650_519_PNG$",duration: 300,quantity: 1,price: 1000,count:1,name:"msi"},
        {id:8,m:"https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-539573273?$650_519_PNG$", duration: 400,quantity: 1,price: 1000,count:1,name:"azus"},
        {id:9,m:"https://makerworld.bblmw.com/makerworld/model/DSM00000001098382/design/2025-02-11_73b7bcd3af13b.webp", duration: 500,quantity: 1,price: 1000,count:1,name:"phone"},
        {id:10,m:"https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E2_OnlineExclusive_SandstoneOrange_Lockup_1600x1200.jpg?$product-details-jpg$?$product-details-thumbnail-jpg$",duration:700,quantity: 1,price: 1000,count:1,name:"nokia"},
        {id:11,m:"https://images-na.ssl-images-amazon.com/images/I/71yQ135ijEL._AC_SL1500_.jpg",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},
        {id:12,m:"https://gharana.pk/price/wp-content/uploads/2022/09/Samsung-Galaxy-A04-Price-in-Pakistan.jpg",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},

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
export default SumsungPage;