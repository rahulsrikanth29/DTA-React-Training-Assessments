import { useState } from "react"

function Prod() {
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [totalprice, setTotalprice] = useState("");
    const [discountedprice, setDp] = useState("");
    const [discount, setTd] = useState("");

    function buttonClick() {
        setTotalprice("Total Price= " + qty * price + " Rs");
        let dis = 0;
        if (qty >0 && qty < 10) 
        {
            dis=1;
            setTd("Discount= " + 0 + "%");
        }
        else if (qty > 10 && qty < 20) {
            dis=0.95;
            setTd("Discount= " + 5 + "%");
        }
        else if (qty > 20 && qty < 30) {
            dis=0.9;
            setTd("Discount= " + 10 + "%");
        }
        else if(qty > 30) {
            dis=0.85;
            setTd("Discount= " + 15 + "%");
        }
        
        setDp("Price after discount = " + qty * price * dis + " Rs");

    }
    return (
        <>
            <h3>Product Store</h3>
            <hr />
            <fieldset>
                <legend>Enter the details</legend>
                Product Name: <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} />
                <br></br>
                Product price : <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <br></br>
                Product quantity: <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
                <br></br>
                <input type="button" onClick={buttonClick} value="Total"></input>

                <h1>{totalprice}</h1>
                <h1>{discount}</h1>
                <h1>{discountedprice}</h1>
            </fieldset>

        </>
    )
}

export default Prod;