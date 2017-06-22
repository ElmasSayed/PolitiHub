// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
   
getInitialState: function(){
  return { text : this.props.text };
},
  render: function() {

    return (
    <div className="row grandchild">
    <div className="col-sm-12 display-box">
      
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title">this is where the legislation is posted</h3>
        </div>
        <div className="panel-body">
        <h3> HB 2017 </h3>
        <h5> here we have a description of what the legislation will be, taken from the 'title' of the api </h5>

          <div className="grandchild-title-div">
            {this.props.text}
            {
                  
               this.props.data.map(function(bill, index){
               return (<div key={index} className="panel panel-default">
                          <div className="panel-heading">
                          <h3 className="panel-title" >{bill.bill_id}</h3>
                          </div>
                          <p className="panel-body">{bill.title}</p>
                        <button className=".btn-info" ><a href="http://api.fdsys.gov/link?collection=bills&billtype={bill.bill_type}&billversion=ih&billnum={bill.number}&congress=115" target="_blank">View Bill</a></button>
                        </div>);
               
              })
              }
          </div>
         
        </div>
      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
