import axios from 'axios'

const URL1 ="http://localhost:8080/vegetable/getallvegetables"
const URL2 = "http://localhost:8080/vegetable/getvegetablebyname"
const URL3 = "http://localhost:8080/vegetable/addvegetable"
const URL4 = "http://localhost:8080/vegetable/updatevegetable"
const URL5 = "http://localhost:8080/vegetable/findvegetablebyid"
const URL6 = "http://localhost:8080/vegetable/deletevegetable"
const URL7 = "http://localhost:8080/vegetable/getvegetablebycategory"

class VegetableService {

    getallvegetables(){
        return axios.get(URL1);
    }

    getvegetablebyname(vegetableName){
        return axios.get(URL2 + '/' + vegetableName);
    }
    addvegetable(vegetable){
        return axios.post(URL3,vegetable);
    }
    updatevegetable(vegetable,vegetableId){
        return axios.put(URL4+'/'+ vegetableId, vegetable);
    }
    getvegetablebyid(vegetableId){
        return axios.get(URL5+'/'+vegetableId);

    }
    deletevegetable(vegetableId){
        return axios.delete(URL6+'/'+vegetableId);
    }

    getvegetablebycategory(vegetableCategory){
        return axios.get(URL7 + '/' + vegetableCategory);
    }
}
export default new VegetableService();