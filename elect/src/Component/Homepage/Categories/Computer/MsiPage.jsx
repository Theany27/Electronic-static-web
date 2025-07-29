import { useContext, useState } from 'react';
import CardProduct from '../../../Item/Card';
import Video from '../../ComponentShow/Content';
import { CartContext } from '../../ComponentShow/CardProvider';
import PopUpDetail from '../../ComponentShow/PopupDetail';
import { Carousel } from 'antd';


const MsiPage = () => {
        const products = [
        {id:25,m:"https://www.notebookcheck.net/fileadmin/Notebooks/MSI/special/13th_Gen/MSI_NB_Raider_GE78_photo02_6.png",duration: 300,quantity: 1,price: 1000,count:1,name:"msi"},
        {id:26,m:"https://laptopmedia.com/wp-content/uploads/2023/01/1-24-e1672928815516.jpg", duration: 400,quantity: 1,price: 1000,count:1,name:"azus"},
        {id:27,m:"https://m.media-amazon.com/images/I/71BCum1YVzL._AC_SL1500_.jpg", duration: 500,quantity: 1,price: 1000,count:1,name:"phone"},
        {id:28,m:"https://images.anandtech.com/doci/16422/MSI_NB_GE76%20Raider(Standard)_photo01.jpg",duration:700,quantity: 1,price: 1000,count:1,name:"nokia"},
        {id:29,m:"https://img.giznext.com/assets/model/79/18953/profile/msi-gp66-leopard-11ug-693in-gaming-laptop-1658491060.png",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},
        {id:30,m:"https://5.imimg.com/data5/SELLER/Default/2024/9/448519465/JL/SC/TR/58395409/msi-stealth-a16-ai-a3hveg-copilot-laptop-1000x1000.png",duration: 600,quantity: 1,price: 1000,count:1,name:"lenovo"},

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
export default MsiPage;