import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () =>{
    return (
        <CardWithHeader title = "Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input 
                    type="text" 
                    placeholder="type your name" 
                    id="full_name"/></div>
            </div>
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="wa_number">WhatsApp</label>
                    <input 
                    type="text" 
                    placeholder="type your whatsapp number" 
                    id="wa_number"/></div>
            </div>
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="shipping_address">Shipping Address</label>
                    <textarea 
                    placeholder="type your whatsapp number" 
                    id="shipping_address"
                    rows={7}/>
                    </div>
            </div>
        </CardWithHeader>
    );
};

export default OrderInformation;
