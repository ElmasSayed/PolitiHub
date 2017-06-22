// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
   
getInitialState: function(){
  return { 

    text : this.props.text,
    newCall: this.props.newCall

  }

},
  render: function() {

    return (
    <div className="row grandchild">
    <div className="col-sm-12 display-box">
      
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title">LEGISLATIONS</h3>
        </div>
        <div className="panel-body">
      
        
          {/*
            This component will display 4 times what it's parent (Child) displays
          */}

          <div className="grandchild-title-div">
          {this.props.text} 
          {
            this.props.newCall.map(function(filteredBill, index){
            return (<div key={index} className="panel panel-default">
                          <div className="panel-heading">
                          <h3 className="panel-title" >Bill Name: {filteredBill.bill_id} </h3>
                          </div>
                          <p className="panel-body">{filteredBill.title}</p>
                        <button className=".btn-info" ><a href={'https://openstates.org/' + filteredBill.state + '/bills/' +filteredBill.session + '/' +filteredBill.bill_id + '/#billtext'} target="_blank" >View Bill</a></button>
                        </div>);
            })
          }
          {
                
               this.props.data.map(function(bill, index){
                
               return (<div key={index} className="panel panel-default">
                          <div className="panel-heading">
                          <h3 className="panel-title" >Bill Name: {bill.bill_id}</h3>
                          </div>
                          <p className="panel-body">{bill.title}</p>
                          <button className=".btn-info" ><a href={'https://openstates.org/' + bill.state + '/bills/' +bill.session + '/' +bill.bill_id + '/#billtext'} target="_blank" >View Bill</a></button>
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
