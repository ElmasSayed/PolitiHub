var axios = require("axios");
var mongoose = require('mongoose');
//var zips = db.zipDEETS;

// var userZip = parseInt($("#grabZip"));


var parameter;
var parameter2;
var state;
var url;
var key;


var helpers = {

    runHouse: function() {


        return axios('https://openstates.org/api/v1/bills/?state=ca&chamber=lower&q=current&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf')
        .then(function(data) {
            console.log("House results:", data);
            return data
            
        }).catch(function(error) {
            console.log(error);
        });
    },

    runSenate: function() {

        return axios('https://openstates.org/api/v1/bills/?state=ca&chamber=upper&q=all&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf')
        .then(function(data) {
            //console.log(data);
            return data
        }).catch(function(error) {
            console.log(error);
        });
    },

    runLocal: function() {

        var lat = 34.13;
        var long = -118.39;

        var statesURL = 'https://openstates.org/api/v1/legislators/geo/?lat='+lat+'&long='+long+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf';

        return axios.get(statesURL).then(function(response){
            console.log(response);
            return response;
        }).catch(function(error){
            console.log(error);
        })
    }
}

module.exports = helpers;