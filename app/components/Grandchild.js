// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
 
getInitialState: function(){
  return { text : this.props.text };
},

render: function() {
   console.log("reaching inside gchild render");

var filtered = this.state.data.filter((data) => {
      if (data.slug.toLowerCase().indexOf(this.state.text.toLowerCase()) != -1)
        return true;
      else
        return false;
    });

   console.log(this.props.data);
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
          {/*
            This component will display 4 times what it's parent (Child) displays
          */}
          <div className="grandchild-title-div">
            {this.props.text}
            <ol>
              {
                filteredArray.map((arg) => {
                  if (this.props.categories === "house" || "senate"){
                   return (
                      <li className="grandchild-title">
                      <a href={arg.govtrack_url} target="_blank">{arg.title}</a>
                      </li>);
                  } else {
                      return (
                      <li className="grandchild-title">
                      <a href="https://openstates.org/ca/bills/{arg.session}/{arg.bill_id}/" target="_blank">{arg.title}</a>
                      </li>);
                  }
                })
              }
            </ol>
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
