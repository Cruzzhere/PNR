const express = require('express')
const app = express()
const bp = require('body-parser');
const pnrJ = require(__dirname +'/pnr.js');
const port = 3000
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res)=>{
  pnrNum=req.body.pnrq;
  res.redirect("http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en&ir_action=pnr&pnr="+pnrNum)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
