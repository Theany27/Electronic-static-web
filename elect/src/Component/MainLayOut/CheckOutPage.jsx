import { useState ,useContext} from 'react';
import { Input, InputNumber, Select } from 'antd';
import { CartContext } from '../Homepage/ComponentShow/CardProvider';
import { Link, useNavigate  } from 'react-router-dom';
const CheckOutPage = (props) => {
    const { productscard,setProductscard,remove ,onQtyChange} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [productName, setProductName] = useState(productscard);
    const [qty, setQty] = useState(onQtyChange);
    const [moreDetail, setMoreDetail] = useState('');
     const navigate = useNavigate();

    const totalQuantity = productscard.reduce((sum, item) => sum + item.quantity, 0);

    const handleSubmit = (e) => {
    e.preventDefault();
            const TOKEN = "8372135215:AAH6fehpCLEaI9OBzzTxKrS-EimqxkUvXaQ";
            const CHAT_ID = "1299629761";
            // Format the message
            const message = `
            🛒 New Order Received!
            👤 Name: ${name}
            📞 Phone: ${phone}
            📍 Location: ${location}
            📦 Products: ${productscard.map(p => p.name).join(", ")}
            🔢 Quantity: ${totalQuantity}
            📝 More Detail: ${moreDetail}
            `;

            // Send to Telegram
            const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

            fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`
            })
            .then(response => {
                if (response.ok) {
                console.log("Telegram message sent!");
                } else {
                console.error("Telegram error:", response.statusText);
                }
            })
            .catch(error => console.error("Fetch error:", error));
            remove(productscard.map(p => p.id));
            setName("");
            setPhone("");
            setLocation(null);
            setMoreDetail("");
            setProductscard([]);
            navigate("/end");
            };
    return (
        <div className="w-full h-screen mt-[70px] flex items-center justify-center sm:w-[50%] m-auto">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-2">
                <label>Name:</label>
                <Input
                type="text"
                placeholder="Ex. Theany"
                required
                allowClear
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
                />
                <label>Phone Number:</label>
                <Input
                type="text"
                placeholder="Ex. 1234567890"
                required
                allowClear
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
                />
                <label>Location:</label>
                <Select className='w-full focus:outline-none focus:ring-2 focus:ring-black rounded-xl'
                     options = {[
                            { label: "Phnom Penh", value: "phnom_penh" },
                            { label: "Kampot", value: "kampot" },
                            { label: "Kampong Cham", value: "kampong_cham" },
                            { label: "Kampong Speu", value: "kampong_speu" },
                            { label: "Kampong Thom", value: "kampong_thom" },
                            { label: "Kandal", value: "kandal" },
                            { label: "Kratie", value: "kratie" },
                            { label: "Mondulkiri", value: "mondulkiri" },
                            { label: "Preah Vihear", value: "preah_vihear" },
                            { label: "Prey Veng", value: "prey_veng" },
                            { label: "Ratanakiri", value: "ratanakiri" },
                            { label: "Siem Reap", value: "siem_reap" },
                            { label: "Stung Treng", value: "stung_treng" },
                            { label: "Svay Rieng", value: "svay_rieng" },
                            { label: "Takeo", value: "takeo" }
                            ]}
                    placeholder="Select your province"
                    required
                    allowClear
                    onChange={(value) => setLocation(value)}
                />
                <label>Product Name:</label>
                <Input
                type="text"
                placeholder="Your product name"
                required
                allowClear
                value={productscard.map(p => p.name).join(", ")}  // string, not array
                readOnly
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
                />
                
                <label>Qty:</label>
                <Input
                type='number'
                placeholder='Qty'
                required
                allowClear
                value={totalQuantity}
                readOnly
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
                />
                <label>More Detail:</label>
                <Input.TextArea 
                allowClear 
                required
                value={moreDetail}
                onChange={(e) => setMoreDetail(e.target.value)} 
                placeholder="Enter more info Ex. Ram16g storage ..." />
                <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-400 duration-150" >
                    submit
                </button>
            </form>
        </div>
    );
};
export default CheckOutPage;