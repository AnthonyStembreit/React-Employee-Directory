const axios = require ('axios')

export default {
    getUsers: function() {
      return axios.get("https://randomuser.me/api/?results=15&nat=us");
    }
};