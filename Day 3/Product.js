//Assignment Question 1

import { useState } from "react"

function Product() {

    const [prodArray, setProdArray] = useState([]);

    // For reading data from user through textboxes
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [tq, setTq] = useState(0);
    const [tp, setTp] = useState(0);
    const [tdp, setTdp] = useState(0);

    function getProdButton_click() {

        let tempArray = [];

        setProdArray(tempArray);

    }

    function clearFields() {
        setPname("");
        setPrice(0);
        setQty(0);

    }

    function addProdButton_click() {
        let prodObj = {};
        prodObj.pname = pname;
        prodObj.price = price;
        prodObj.qty = qty;


        let tempArray = [...prodArray];
        tempArray.push(prodObj);
        setProdArray(tempArray);


    }

    function updateProdButton_click() {
        let tempArray = [...prodArray];

        let index = tempArray.findIndex(item => item.pname == pname);
        tempArray[index].price = price;
        tempArray[index].qty = qty;

        setProdArray(tempArray);
        TotalQty();
        TotalPrice();
        clearFields();
    }

    function deleteProd_click(pname) {
        let tempArray = [...prodArray];

        let index = tempArray.findIndex(item => item.pname == pname);
        tempArray.splice(index, 1);

        setProdArray(tempArray);
    }

    function selectProd_click(pname) {
        let deptObj = prodArray.find(item => item.pname == pname);

        setPname(deptObj.pname);
        setPrice(deptObj.price);
        setQty(deptObj.qty);

    }

    let resultArray = prodArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.pname}  </td>
            <td>   {item.price}  </td>
            <td>   {item.qty}  </td>
            <td>   {item.qty * item.price}</td>
            <td>
                <a onClick={() => selectProd_click(item.pname)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteProd_click(item.pname)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });



    function TotalQty() {
        var TQty = Number(0);
        let tempArray = [...prodArray];
        let qa = tempArray.map(e => e.qty);
        for (let i = 0; i < tempArray.length; i++) {
            TQty = TQty + Number(qa[i]);
        }
        setTq(TQty);
    }

    function TotalPrice() {
        TotalQty();
        var Tprice = Number(0);
        let tempArray = [...prodArray];
        let qa = tempArray.map(e => (e.qty * e.price));
        for (let i = 0; i < tempArray.length; i++) {
            Tprice = Tprice + Number(qa[i]);
        }
        let Nodis = Tprice;
        if (tq > 0 && tq < 10)
            Tprice = Tprice;
        else if (tq >= 10 && tq < 20)
            Tprice = Tprice * 0.95;
        else if (tq >= 20 && tq < 30)
            Tprice = Tprice * 0.9;
        else if (tq >= 30)
            Tprice = Tprice * 0.85;
        setTp(Nodis);
        setTdp(Tprice);
    }



    return (
        <>
            <h1>Product</h1>
            <hr />

            <input type="text" placeholder="Product Name" value={pname} onChange={(e) => setPname(e.target.value)} />
            <input type="text" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Quantity" value={qty} onChange={(e) => setQty(e.target.value)} />
            <hr />
            <input type="button" onClick={getProdButton_click} value="Clear Products" />
            <input type="button" onClick={addProdButton_click} value="Add Product" />
            <input type="button" onClick={updateProdButton_click} value="Update Product" />

            <table border="2" width="500" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                {resultArray}
            </table>
            <hr />
            <p></p>
            <input type="button" onClick={TotalPrice} value="Details Products" />
            <p></p>
            <fieldset>
                <legend>Product Details</legend>
                <p></p>

                <p>Total Price:  {tp} Rupees</p>
                <p>Total Price (After Discount): {tdp} Rupees</p>
                <p>Quantity: {tq} Items</p>

            </fieldset>
            <hr />
        </>
    )
}

export default Product;
