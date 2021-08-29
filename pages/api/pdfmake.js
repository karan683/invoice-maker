const PDFDocument = require('pdfkit');
const fs = require('fs');
const blobStream = require('blob-stream');
var express = require('express')

export default function handler(req, res) {
  if (req.method === 'POST'){

        const {from, to, date, invoicenum, note, totalamount, finaldiscount, finaltax, finalshipping, totaldue, products} = req.body;
        // console.log(products)

        const doc = new PDFDocument();

        doc
        .fontSize(12)
        .text(from, 50, 75 ,{width : 250})
        .text(to, 50, 175 ,{width : 250})

        doc
        .fontSize(20)
        .text('Invoice', 475, 50 );

        doc
        .fontSize(12)
        .text('Date : ', 440, 200)
        .text(date, 475, 200)
        .text('Invoice number :', 440, 220)
        .text(invoicenum , 440, 233)

        doc.lineWidth(25);

        doc.lineCap('round')
        .strokeColor('#D1D5DB')
        .moveTo(50, 275)
        .lineTo(570, 275)
        .stroke();

        doc
        .fontSize(12)
        .text('Description', 50, 270 ,{width : 170})
        .text('Price', 250, 270 ,{width : 100, align:'right'})
        .text('Quantity', 350, 270 ,{width : 100, align:'right'})
        .text('Total', 470, 270 ,{width : 100, align:'right'})

        let ypoint = 270;
        for (let i = 0; i < products.length; i++) {
            ypoint = ypoint + 30
            let current = products[i]
            doc
            .fontSize(12)
            .text(String(current.desc), 50, ypoint ,{width : 170})
            .text(String(current.price), 250, ypoint ,{width : 100, align:'right'})
            .text(String(current.quantity), 350, ypoint ,{width : 100, align:'right'})
            .text(String(current.price * current.quantity), 470, ypoint ,{width : 100, align:'right'})
        }
        ypoint = ypoint + 90;


        doc
        .fontSize(12)
        .text('Notes : ', 50, ypoint ,{width : 180})
        .text(note, 50, ypoint+15 ,{width : 180})
        .text('subtotal : ', 390, ypoint ,{width : 100})
        .text(String(totalamount), 455, ypoint ,{width : 100, align:'right'})
        .text('discount : ', 390, ypoint+30 ,{width : 100})
        .text(String(finaldiscount), 455, ypoint+30 ,{width : 100, align:'right'})
        .text('tax : ', 390, ypoint+60 ,{width : 100})
        .text(String(finaltax), 455, ypoint+60 ,{width : 100, align:'right'})
        .text('shipping : ', 390, ypoint+90 ,{width : 100})
        .text(String(finalshipping), 455, ypoint+90 ,{width : 100, align:'right'})

        

        doc
        .fontSize(15)
        .text('Balance due : ', 350, ypoint+120 ,{width : 100})
        .text(String(totaldue), 455, ypoint+120 ,{width : 100, align:'right'})


        doc.end();

        res.setHeader('Content-Type', 'application/pdf');
        // res.setHeader("Content-Type", "blob");
        res.send(doc);

}

}  

// {
//     "from" : "Atharv Tathe",
//     "to" : "sham rajesh", 
//     "date" : "29/08/2021",
//     "invoicenum": "211233424",
//     "note" : "pay on time",
//     "totalamount": 500,
//     "finaldiscount": 10, 
//     "finaltax" : 10,
//     "finalshipping" : 50,
//     "totaldue" :550
// }