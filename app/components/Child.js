// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// the child is the componenent that takes up all the space under the jumbotron in parent but only displays actual content on the left third of the page
var Child = React.createClass({
    getInitialState: function() {
    return {
      text: "",
      filteredArray: []
    };
  },

  updateText: function(event){

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
                  <td><a className="list-group-item" data-value="appropriation" href="#Appropriation">Appropriation</a></td>
                </tr>
                <tr>
                  <td><a className="list-group-item" data-value="art" href="#Art">Art</a>  </td>
                  
                </tr>
                <tr>
                 <td><a className="list-group-item" data-value="budget" href="#Budget">Budget</a></td>
               </tr>
              <tr>
                <td><a className="list-group-item" data-value="business" href="#Business">Business</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="forms" href="#forms">Forms</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="commerce" href="#Commerce">Commerce</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="education" href="#Education">Education</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="employment" href="#Employment">Employment</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="energy" href="#Energy"></a>Energy></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="environmental" href="#Environmental">Environmental</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="executive" href="#Executive Branch">Executive Branch</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="grants" href="#Grants">Grants</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="healthcare" href="#Healthcare">Healthcare</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="homelessness" href="#Homelessness">Homelessness</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="housing" href="#Housing and Property">Housing and Property</a></td>
              </tr>
              <tr>
                <td> <a className="list-group-item" data-value="immigration" href="#Immigration">Immigration</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Indigenous Peoples">Indigenous Peoples</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Infrastructure">Infrastructure</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Judicial">Judicial</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Labor">Labor</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="welfare" href="#Legislatives">Legislative</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#LGBT">LGBT</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Military">Military</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Municipal">Municipal</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Public Services">Public Services</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Religion">Religion</a></td>
              </tr>
              
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Reproductive Health">Reproductive Health</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Social">Social</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Spending">Spending</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#State Agencies">State Agencies</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Taxes">Taxes</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="welfare" href="#Technology">Technology</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Transportation">Transportation</a></td>
              </tr>
              <tr>
               <td><a className="list-group-item" data-value="welfare" href="#Voting rights">Voting rights</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="welfare" href="#Welfare">Welfare</a>/</td>
              </tr>
              
              </tbody>
            </table>
          </div>
      </div>
              </div>   

        
       </div>
     </div>

         <div className="col-sm-9">
          <GrandChild data={this.props.data} categories={this.props.categories} text={this.state.text} />
        </div>
   </div>
    );
  }
});

module.exports = Child;
