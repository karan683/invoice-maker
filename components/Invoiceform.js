import React, {useState} from 'react'
import Product from './Product'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import axios from 'axios';
import download from 'downloadjs'

const Invoiceform = () => {

    const [products, setProducts] = useState([
        { id:nanoid(10), desc: "", price: 0, quantity: 1 }
    ])

    const [totalamount, settotalamount] = useState(0);
    const [finaltax, setfinaltax] = useState(0);
    const [finaldiscount, setfinaldiscount] = useState(0);
    const [finalshipping, setfinalshipping] = useState(0);

    const [totaldue, settotaldue] = useState(totalamount);

    


    const [type, settype] = useState('Invoice');
    const [from, setfrom] = useState('');
    const [to, setto] = useState('');
    const [imageUrl, SetImageUrl] = useState('');
    const [image, setImage] = useState(null);
    const [invoicenum, setinvoicenum] = useState('');
    const [date, setdate] = useState('');
    const [note, setnote] = useState('');


    const taxhandler = (e) => {
        const prevtax = finaltax
        setfinaltax(e.target.value)
        const taxtotal = totalamount * (Number(e.target.value)/100)
        settotaldue( totaldue + taxtotal - ((prevtax/100)*totalamount))
    }

    const discounthandler = (e) => {
        const prevdis = finaldiscount
        setfinaldiscount(e.target.value)
        const distotal = totalamount * (Number(e.target.value)/100)
        settotaldue( totaldue - distotal + ((prevdis/100)*totalamount))
    }

    const shippinghandler = (e) => {
        const prevship = finalshipping
        setfinalshipping(e.target.value)
        settotaldue(totaldue + Number(e.target.value) - prevship)
    }




    const addnewitem = () => {
        const newproduct = { id:nanoid(10), desc: "", price: 0, quantity: 1 }
        setProducts([...products, newproduct]);
    }

    const imageEventHandler = (e) => {
        var reader = new FileReader();
        reader.onload = function() {
            SetImageUrl(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log(Image)

    }

    const pdfkitmaker = () => {
        axios.post('/api/pdfmake', {
            from,
            to,
            date,
            invoicenum,
            note,
            totalamount,
            finaldiscount,
            finaltax,
            finalshipping,
            totaldue,
            products
        },{ responseType: 'blob' }).then((response) => {
            // console.log(response)
            download(response.data, "invoice.pdf", "application/pdf");
        }).catch((err) => {
            console.log(err)
        })

    }


    return (
        <div className="flex flex-col xl:flex-row justify-center mt-20 xl:space-x-14">
            <div className="border w-full max-w-4xl mt-5 rounded  shadow-lg p-3 md:p-10 bg-white ">
                <div className="flex flex-col md:flex-row md:space-x-10">

                    <div className="md:w-1/2 w-full">
                        <div className="relative w-full">
                            <label className="absolute text-gray-600 pl-4 text-xs top-1" htmlFor="type">Type</label>
                            <select value={type} onChange={e => settype(e.target.value)} name="type" id="type" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none cursor-pointer border-none font-bold focus:bg-purple-100">
                                <option className="font-semibold " value="Invoice">Invoice</option>
                                <option className="font-semibold" value="Estimate">Estimate</option>
                                <option className="font-semibold " value="Quote">Quote</option>
                            </select>
                        </div>

                        <div className="relative w-full mt-10">
                            <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="from">From</label>
                            <textarea value={from} onChange={e => setfrom(e.target.value)} rows="4" type="text" id="from" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none whitespace-pre border-none resize-none focus:bg-purple-100"/>
                        </div>

                        <div className="relative w-full mt-10">
                            <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="from">To</label>
                            <textarea value={to} onChange={e => setto(e.target.value)} rows="4" type="text" id="to" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none whitespace-pre border-none  resize-none focus:bg-purple-100"/>
                        </div>

                    </div>

                    <div className="md:w-1/2 w-full mt-10 lg:mt-0">
                        <div className="flex items-center">
                            {!imageUrl && <label className="w-full h-44 flex flex-col items-center px-4 py-6 bg-white text-purple-500 font-semibold rounded border-dashed border-2 border-gray-400 cursor-pointer">
                                <span className="mt-12 text-base leading-normal">&#128190; Add Logo</span>
                                <input type='file' onChange={imageEventHandler} className="hidden" id="image" accept="image/png, image/jpeg, image/jpg" />
                            </label>}
                            {imageUrl && <div className="">
                                <div className="text-center"><Image src={imageUrl} alt="logo" width={60} height={60}/></div>
                                <button onClick={() => SetImageUrl('')} className="text-purple-400 hover:bg-purple-500 px-3 py-2 rounded hover:text-white block">Remove logo</button>
                            </div>}
                        </div>

                        <div className="relative w-full mt-10">
                            <label className="absolute text-gray-600 pl-4 text-sm top-1" htmlFor="invonum">Invoice Number</label>
                            <input type="text" onChange={e => setinvoicenum(e.target.value)} value={invoicenum} id="invonum" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                        </div>

                        <div className="relative w-full mt-10">
                            <label className="absolute text-gray-600 pl-4 text-sm top-1" htmlFor="date">Date</label>
                            <input type="date" value={date} onChange={e => setdate(e.target.value)} id="date" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none  focus:bg-purple-100"/>
                        </div>

                    </div>
                </div>


                <div className="w-full h-1 mx-auto mt-10  bg-gray-100"></div>

                <div className="hidden md:flex flex-row justify-between mt-10 bg-gray-500 text-white rounded p-2 space-x-12 ">
                    <div className="w-1/2">
                        Description
                    </div>
                    <div className="flex flex-row w-1/2 justify-start space-x-5 ">
                        <div className="w-1/4">Price</div>
                        <div className="w-1/4">Quantity</div>
                        <div className="w-1/4">Amount</div>

                    </div>

                </div>

                {products.map((product) => {
                    return <Product finaltax={finaltax} finaldiscount={finaldiscount} finalshipping={finalshipping} settotaldue={settotaldue} totalamount={totalamount} settotalamount={settotalamount} id={product.id} product={products} setProducts={setProducts}  key={product.id} desc_one={product.desc} price_one={product.price} quantity_one={product.quantity} />
                })}

                <div>
                    <button onClick={addnewitem} className="bg-purple-400 text-white px-3 py-2 mt-10 rounded hover:bg-purple-500">+ New Item</button>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-10">
                    <div className="md:w-1/2 w-full">
                        <div className="relative w-full mt-10">
                            <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="from">Extra Notes</label>
                            <textarea value={note} onChange={e => setnote(e.target.value)} rows="4" type="text" id="from" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none whitespace-pre border-none resize-none focus:bg-purple-100"/>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col p-10">

                        <div className="flex flex-row w-full items-center space-x-5 mt-10 justify-between">
                            <div className="font-semibold">Subtotal :</div>
                            <div className="font-bold">₹ {totalamount}</div>
                        </div>

                        <div className="flex flex-row w-full items-center space-x-5 mt-10 justify-between">
                            <label className="text-gray-800 font-semibold" htmlFor="tax">Tax %</label>
                            <input value={finaltax} onChange={taxhandler} type="number" id="tax" className=" w-24 px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                        </div>

                        <div className="flex flex-row w-full items-center space-x-5 mt-10 justify-between">
                            <label className="text-gray-800 font-semibold" htmlFor="dis">Discount %</label>
                            <input value={finaldiscount} onChange={discounthandler} type="number" id="dis" className="w-24 px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                        </div>

                        <div className="flex flex-row w-full items-center space-x-5 mt-10 justify-between">
                            <label className="text-gray-800 font-semibold" htmlFor="ship">Shipping ₹</label>
                            <input value={finalshipping} onChange={shippinghandler} type="number" id="ship" className="w-24 px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                        </div>

                        <div className="flex flex-row w-full items-center space-x-5 mt-10 justify-between">
                            <div className="font-semibold text-xl">Balance Due :</div>
                            <div className="font-bold text-xl">₹ {totaldue}</div>
                        </div>

                    </div>

                </div>
                
            </div>



            <div className="mt-5 flex flex-col">
                <button className="bg-purple-400 sticky top-5 text-white  font-bold text-lg rounded mb-5 px-14 py-2 hover:bg-purple-500" onClick={pdfkitmaker}>Download</button>
                <button className="bg-purple-400 sticky top-20 text-white  font-bold text-lg rounded mb-5 px-14 py-2 hover:bg-purple-500">Send Mail</button>
                <button className="bg-purple-400 sticky top-36 text-white  font-bold text-lg rounded mb-5 px-16 py-2 hover:bg-purple-500">Preview</button>
            </div>
        





        </div>

 


    )
}

export default Invoiceform
