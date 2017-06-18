//$(document).ready(function(){




$("button").on("click", function() {

  event.preventDefault();
  
  const zip = $("#input").val();
  const parseZip = parseInt(zip);
  const doDahZip = zipdb(parseZip);

  console.log(doDahZip); 
 



//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.propublica.org/congress/v1/115/senate/members.json",
//   "method": "GET",
//   "headers": {
//     "x-api-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8",
//     "cache-control": "no-cache",
//     "postman-token": "53d426ad-495b-68b9-1b48-e6033c94d595"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


});


//})