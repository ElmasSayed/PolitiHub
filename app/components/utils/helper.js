var axios = require("axios");

var parameter;
var parameter2;
var state;
var url;
var key;


var helpers = {

    runHouse: function(query) {


        return axios({
            "method": "GET",
            "url": "https://api.propublica.org/congress/v1/115/house/bills/introduced.json",
            "headers": {
                "x-api-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
            }
        }).then(function(data) {
            console.log(data);
            return data
        }).catch(function(error) {
            console.log(error);
        });
    },

    runSenate: function(query) {

        return axios({
            "method": "GET",
            "url": "https://api.propublica.org/congress/v1/115/senate/bills/passed.json",
            "headers": {
                "x-api-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
            }
        }).then(function(data) {
            console.log(data);
            return data
        }).catch(function(error) {
            console.log(error);
        });
    },

    runState: function(query) {
        console.log(query);

        parameter = 'ca'
        parameter2 = 'all'
        var statesURL = "https://openstates.org/api/v1/bills/?state="+parameter+"&q="+parameter2+"&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf"

        return axios.get(statesURL).then(function(response){
            console.log(response);
            return response
        }).catch(function(error){
            console.log(error);
        });
    },

    runLocal: function(query) {
        console.log(query);

        parameter = 'geo/?lat=34.16&long=-118.4';
        var statesURL = 'https://openstates.org/api/v1/legislators/'+parameter;

        return axios.get(statesURL).then(function(response){
            console.log(response);
            return response;
        }).catch(function(error){
            console.log(error);
        })
    }



    	    // if(current == "House"){
    //     Axios({
    //         "method": "GET",
    //         "url": "https://api.propublica.org/congress/v1/115/house/bills/passed.json",
    //         "headers": {
    //             "x-api-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
    //         } 
    //     }).then(function(data) {
    //         console.log(data);
    //         return data
    //     }).catch(function(error) {
    //         console.log(error);
    //     });
    
    // }
    // if(current == "Senate"){

    //     Axios({
    //       method: 'post',
    //       url: 'https://api.propublica.org/congress/v1/115/senate/bills/introduced.json',
    //       headers: {
    //       "X-API-Key": 'yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8'
    //       }
    //     }).then(function(data){
    //       console.log("promise console log")
    //     this.setState({data: data.data}) 
    //     }.bind(this));

    // }if(current == "State"){

    //   Axios.get('https://openstates.org/api/v1/bills/?state=ca&q=all&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf', {}).then(function(data){
    //    this.setState({data: data.data}) 
    //   }.bind(this));

    // }
    // if(current == "Local"){

    //   Axios.get('https://openstates.org/api/v1/bills/?state=ca&q=all&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf', {}).then(function(data){
    //   this.setState({data: data.data}) 
    //   }.bind(this));

    // }
}

module.exports = helpers;