module.exports.getPnr = ()=> {
var url= "http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en&ir_action=pnr&pnr="+pnrNum;
return url;
}
