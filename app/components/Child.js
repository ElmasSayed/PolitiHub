var React = require("react");
var GrandChild = require("./GrandChild");

// the child is the componenent that takes up all the space under the jumbotron in parent but only displays actual content on the left third of the page
var Child = React.createClass({

  render: function() {
    return (
    <div className="row child main-area">
    <div className="col-sm-3 filter-box">
      <div className="panel panel-default ">
      
        <div className="panel-heading">
          <h3 className="panel-title">box housing the filtering area:</h3>
        </div>
        <div className="panel-body text-center">
              <br></br>
              <br></br>
          <h3> here we insert all of the work elmas did on the left hand column with all the sorting info </h3>
        </div>
      </div>
      </div>
         <div className="col-sm-9">

          <GrandChild data={this.props.data} categories={this.props.categories} />

         </div>
     </div>
   
    );
  }
});


module.exports = Child;
