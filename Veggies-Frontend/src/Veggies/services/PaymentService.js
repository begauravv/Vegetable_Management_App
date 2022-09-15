import axios from 'axios'
const URL1 ="http://localhost:8080/payment/addpayment"
const URL2 ="http://localhost:8080/payment/getallpayments"

class PaymentService{
    
addpayment(payment){
    return axios.post(URL1,payment)
    }
getpayment(){
   return axios.get(URL2);
    }

}
export default new PaymentService();