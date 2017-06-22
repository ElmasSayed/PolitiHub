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
                "X-API-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
            } 
        }).then(function(data) {

            console.log(data.data.results[0].bills);
            return data.data.results[0].bills;
        
        }).catch(function(error) {
            console.log(error);
        });
    },

    runSenate: function(query) {

        return axios({
            "method": "GET",
            "url": "https://api.propublica.org/congress/v1/115/senate/bills/introduced.json",
            "headers": {
                "X-API-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
            }
        }).then(function(data) {

			console.log(data.data.results[0].bills);
            return data.data.results[0].bills;

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

}

module.exports = helpers;