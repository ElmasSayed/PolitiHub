// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
   
getInitialState: function(){
  return { 

    text : this.props.text,
    newCall: this.props.newCall,
    categories: this.props.categories

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
           
           

           {
            this.props.newCall.map(function(filteredBill, index){
              return (
                      <div key={index} className="panel panel-default">
                          <div className="panel-heading">
                              <h3 className="panel-title" >Bill Name: {filteredBill.bill_id} </h3>
                          </div>
                              <h3 className="panel-body">{filteredBill.title}</h3>
                                
                                <button className=".btn-info" >
                                  <a href={'https://openstates.org/' + filteredBill.state + '/bills/' +filteredBill.session + '/' +filteredBill.bill_id + '/#billtext'} target="_blank" >View Status Bill</a>
                                </button>
                                
                                <button className=".btn-info" >
                                  <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + filteredBill.session + filteredBill.bill_id} target="_blank" >View Current Bill Literature </a>
                                </button>
                                
                                <button className=".btn-info" >
                                  <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + filteredBill.session + filteredBill.bill_id + 'is/pdf/BILLS-' + filteredBill.session + filteredBill.bill_id  + 'pdf'} target="_blank" >Save</a>
                                </button>

                      </div>
              );
            
            })
          }

          {
            this.props.data.map(function(bill, index){
                return (
                        <div key={index} className="panel panel-default">
                            <div className="panel-heading">
                              <h3 className="panel-title" >Bill Name: {bill.bill_id}</h3>
                            </div>
                              <h3 className="panel-body">{bill.title}</h3>
                             
                              <button className=".btn-info" >
                                <a href={'https://openstates.org/' + bill.state + '/bills/' +bill.session + '/' +bill.bill_id + '/#billtext'} target="_blank" >View Bill Status</a>
                              </button>

                              <button className=".btn-info" >
                                  <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + bill.session +'0'+ bill.bill_id} target="_blank" >View Current Bill Literature </a>
                              </button>
                                
                              <button className=".btn-info" >
                                <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + bill.session + bill.bill_id + 'is/pdf/BILLS-' + bill.session + bill.bill_id  + 'pdf'} target="_blank" >Save</a>
                              </button>

                        </div>
                );
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
