var axios = require("axios");

var parameter;
var parameter2;
var state;
var url;
var key;


var helpers = {

    runHouse: function() {


        return axios('https://openstates.org/api/v1/bills/?chamber=lower&q=current&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf')
        .then(function(data) {
            console.log("House results:", data);
            return data;
            
        }).catch(function(error) {
            console.log(error);
        });
    },

    runSenate: function() {

        return axios('https://openstates.org/api/v1/bills/?chamber=upper&q=current&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf')
        .then(function(data) {
            //console.log(data);
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

}

module.exports = helpers;