import axios from 'axios'

const URL1 ="http://localhost:8080/customer/getallcustomers"
const URL2 ="http://localhost:8080/customer/addcustomer"
const URL3 ="http://localhost:8080/customer/updatecustomer"
const URL4 ="http://localhost:8080/customer/findcustomerbyid"
const URL5 ="http://localhost:8080/customer/deletecustomer"
const URL6 ="http://localhost:8080/customer/findcustomer"


class CustomerService {
    
    getallCustomers(){
        return axios.get(URL1);
    }
    addCustomer(customer){
        return axios.post(URL2,customer)
    }
    updatecustomer(customer,customerId){
        return axios.put(URL3+'/'+ customerId, customer);
    }
    getcustomerbyid(customerId){
        return axios.get(URL4+'/'+customerId);
    }
    deletecustomer(customerId){
        return axios.delete(URL5+'/'+customerId);
    }
    getcustomerbyname(userName){
        return axios.get(URL6+'/'+userName);
    }

}
export default new CustomerService();