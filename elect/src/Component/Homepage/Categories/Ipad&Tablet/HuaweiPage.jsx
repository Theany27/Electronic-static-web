import { useContext, useState } from 'react';
import CardProduct from '../../../Item/Card';
import Video from '../../ComponentShow/Content';
import { CartContext } from '../../ComponentShow/CardProvider';
import PopUpDetail from '../../ComponentShow/PopupDetail';
import { Carousel } from 'antd';


const HuaweiPage = () => {
        const products = [
        {id:19,m:"https://images.frandroid.com/wp-content/uploads/2020/06/matepad-pro-1.jpg",duration: 300,quantity: 1,price: 1000,count:1,name:"msi"},
        {id:20,m:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-11-5/images/accessories/Huawei-matepad-11-5-inch-accessories.jpg", duration: 400,quantity: 1,price: 1000,count:1,name:"huawei"},
        {id:21,m:"https://media.karousell.com/media/photos/products/2023/2/9/huawei_matepad_104_2020_1675954352_fccf2bd8_progressive.jpg", duration: 500,quantity: 1,price: 1000,count:1,name:"huawei"},
        {id:22,m:"https://cf.shopee.co.th/file/d0238812e4c43467365eac55f37c4ce9",duration:700,quantity: 1,price: 1000,count:1,name:"huawei"},
        {id:23,m:"https://aravera.com.py/wp-content/uploads/2024/01/Tablet-Huawei-10.1-T10S-AZUL-MATEPAD-2GB-32GB.jpg",duration: 600,quantity: 1,price: 1000,count:1,name:"huawei"},
        {id:24,m:"https://www.techguide.com.au/wp-content/uploads/2019/02/HuaweiMateX7.jpg",duration: 600,quantity: 1,price: 1000,count:1,name:"huawei"},

        ];
        const phone=[
        {id:1,images:"https://s3-alpha.figma.com/hub/file/2316688557/b31c51ea-fb40-4eeb-b97e-9eae5da9b010-cover.png"},
        {id:2,images:"https://cdn.mos.cms.futurecdn.net/nLi9X8uJ86VgfYLzoN5694.jpg"}, 

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
export default HuaweiPage;