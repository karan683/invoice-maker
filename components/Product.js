import React, {useState} from 'react'


const Product = ({finaldiscount, finalshipping, finaltax, settotaldue, totalamount, settotalamount, product, setProducts ,id, desc_one, price_one, quantity_one}) => {


    const [desc, setdesc] = useState(desc_one)
    const [price, setprice] = useState(price_one)
    const [quantity, setquantity] = useState(quantity_one)

    const deleteprod = () => {
        settotalamount(totalamount - price * quantity )
        settotaldue((totalamount - (price * quantity)) + ((totalamount - (price * quantity))*(finaltax/100)) - ((totalamount - (price * quantity))*(finaldiscount/100)) + Number(finalshipping))
        const remainingprod = product.filter(prod => id !== prod.id);
        setProducts(remainingprod);
    }

    const descchangehandler = (e) => {
        setdesc(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                return {...prod, desc : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const pricechangehandler = (e) => {
        setprice(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                settotalamount(totalamount + e.target.value * prod.quantity - prod.price * prod.quantity)
                const temptotal = totalamount + (e.target.value * prod.quantity) - (prod.price * prod.quantity)
                settotaldue(totalamount + (e.target.value * prod.quantity) - (prod.price * prod.quantity) + (temptotal*(finaltax/100)) - (temptotal*(finaldiscount/100)) + Number(finalshipping))
                return {...prod, price : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const quantitychangehandler = (e) => {
        setquantity(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                settotalamount(totalamount + e.target.value * prod.price - prod.quantity*prod.price)
                const temptotal = totalamount + (e.target.value * prod.price) - (prod.quantity*prod.price)
                settotaldue(totalamount + (e.target.value * prod.price) - (prod.quantity*prod.price) + (temptotal*(finaltax/100)) - (temptotal*(finaldiscount/100)) + Number(finalshipping))
                return {...prod, quantity : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }


    return (
        <div className="flex flex-col md:flex-row w-full md:space-x-10 md:border-none border-2 border-purple-50 p-3 md:p-0">

            <div className="relative w-full md:w-1/2 mt-10">
                <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="desc">Description</label>
                <input type="text" id="desc" value={desc} onChange={descchangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-1/2 md:space-x-5 ">

                <div className="relative w-full md:w-1/4 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="price">Price</label>
                    <input type="number" id="price" value={price} onChange={pricechangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                </div>

                <div className="relative w-full md:w-1/4 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1" htmlFor="quan">Quantity</label>
                    <input type="number" id="quan" value={quantity} onChange={quantitychangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                </div>

                <div className="relative w-full md:w-1/4 mt-5 md:mt-10 flex items-center ">
                    <span className="overflow-hidden">₹{price * quantity}</span>
                </div>

                <div className="relative w-full md:w-1/4 mt-5 md:mt-10 flex items-center ">
                    <button onClick={deleteprod}  className="bg-purple-400 text-white py-2 text-sm px-1  rounded hover:bg-purple-500">remove</button>
                </div>

            </div>


        </div>
    )
}
export default Product
