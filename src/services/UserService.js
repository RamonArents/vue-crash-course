import axios from "axios";

export class UserService {

    static getAllusers(){
        let dataURL = `http://jsonplaceholder.typicode.com/users`;
        return axios.get(dataURL);
    }

    static getUser(userId){
      let dataURL = `http://jsonplaceholder.typicode.com/users/${userId}`;
      return axios.get(dataURL);
  }
}