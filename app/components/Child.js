// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// the child is the componenent that takes up all the space under the jumbotron in parent but only displays actual content on the left third of the page
var Child = React.createClass({
    getInitialState: function() {
    return {
      text: ""
    };
  },

  updateText: function(event){
  console.log("printing in the create class function of child");

    this.setState({
      text: event.target.value,
    });
  },
  
  render: function() {
    return (
    <div className="row child main-area">
      <div className="col-sm-3 filter-box">

      <div className="panel panel-default ">
      
        <div className="panel-heading">
          <h2 className="panel-title select ">Select One:</h2>
        </div>

    <div className="list-group table-of-contents">
      <div >
        <div className="panel-body child-title-div">

         <div>
            <input
              type="text"
              placeholder="search"
              value={this.state.text}
              onChange={this.updateText}
            />
          </div>

            <table className="table table-hover ">
              
              <tbody>
                <tr>                 
                  <td><a className="list-group-item" href="#Appropriation">Appropriation</a></td>
                </tr>
                <tr>
                  <td><a className="list-group-item" href="#Art">Art</a>  </td>
                  
                </tr>
                <tr>
                 <td><a className="list-group-item" href="#Budget">Budget</a></td>
               </tr>
              <tr>
                <td><a className="list-group-item" href="#Business">Business</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#forms">Forms</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Commerce">Commerce</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Education">Education</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Employment">Employment</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" href="#Energy">Energy</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Environmental">Environmental</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Executive Branch">Executive Branch</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Grants">Grants</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Healthcare">HealthcareHomelessness</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Homelessness">Homelessness</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" href="#Housing and Property">Housing and Property</a></td>
              </tr>
              <tr>
                <td> <a className="list-group-item" href="#Immigration">Immigration</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Indigenous Peoples">Indigenous Peoples</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Infrastructure">Infrastructure</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Judicial">Judicial</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Labor">Labor</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" href="#Legislatives">Legislative</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#LGBT">LGBT</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Military">Military</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Municipal">Municipal</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Public Services">Public Services</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Religion">Religion</a></td>
              </tr>
              
              <tr>
                <td><a className="list-group-item" href="#Reproductive Health">Reproductive Health</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Social">Social</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Spending">Spending</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#State Agencies">State Agencies</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Taxes">Taxes</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" href="#Technology">Technology</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Transportation">Transportation</a></td>
              </tr>
              <tr>
               <td><a className="list-group-item" href="#Voting rights">Voting rights</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" href="#Welfare">Welfare</a>/</td>
              </tr>
              
              </tbody>
            </table>
          </div>
      </div>
              </div>   

        
       </div>
     </div>

         <div className="col-sm-9">
          <GrandChild data={this.props.data} category={this.props.categories} text={this.state.text} />
        </div>
   </div>
    );
  }
});

module.exports = Child;
