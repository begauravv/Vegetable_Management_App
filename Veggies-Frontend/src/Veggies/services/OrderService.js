import axios from 'axios'

const URL1 ="http://localhost:8080/order/getallorders"
const URL2 ="http://localhost:8080/order/addorder"
const URL3 ="http://localhost:8080/order/updateorder"



class OrderService {
    
    getallorders(){
        return axios.get(URL1);
    }
    addorder(order){
        return axios.post(URL2+'/',order)
    }
    updatecustomer(order,orderId){
        return axios.put(URL3+'/'+ orderId, order);
    }
    

}
export default new OrderService();