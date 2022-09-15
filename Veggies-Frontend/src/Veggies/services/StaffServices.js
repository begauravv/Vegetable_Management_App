import axios from 'axios'

const URL1 ="http://localhost:8080/getstaff"
const URL2 ="http://localhost:8080/addstaff"
const URL3 ="http://localhost:8080/updatestaff"
const URL4 ="http://localhost:8080/getstaffbyid"
const URL5 ="http://localhost:8080/deletestaff"

class StaffServices {
    
    getStaff(){
        return axios.get(URL1);
    }
    addStaff(staffs){
        return axios.post(URL2,staffs)
    }
    updatestaff(staffs,staffId){
        return axios.put(URL3+'/'+ staffId, staffs);
    }
    getstaffbyid(staffId){
        return axios.get(URL4+'/'+staffId);
    }
    deletestaff(staffId){
        return axios.delete(URL5+'/'+staffId);
    }
}
export default new StaffServices();