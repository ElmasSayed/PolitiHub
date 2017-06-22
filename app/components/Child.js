// Include React
var React = require("react");
var axios = require("axios");


// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// the child is the componenent that takes up all the space under the jumbotron in parent but only displays actual content on the left third of the page
var Child = React.createClass({
    getInitialState: function() {
    return {
      text: "",
      newCall: []
    };
  },

  updateText: function(event){
  console.log("printing in the create class function of child");

    this.setState({
      text: event.target.value,
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  handleClick: function(event) {
    

    event.preventDefault();

    this.setState({ categories: event.target.getAttribute('data-value')});

    var current = event.target.getAttribute('data-value');
    var parameter;
        
    if(current == "Appropriation"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Art"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf').then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    
    }
    if(current == "Appropriation"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    
    }
    if(current == "Budget"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    
    }
    if(current == "Business"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Commerce"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Education"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Employment"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Energy"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Environmental"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    
    }
    if(current == "Executive Branch"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Education"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Forms"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Grants"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Healthcare"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Homelessness"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Housing and Property"){
       parameter = str.trim(current);
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Immigration"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Indigenous Peoples"){
       parameter = str.trim(current);
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Infrastructure"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Judicial"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Labor"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Legislative"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "LGBT"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Military"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Municipal"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Public Services"){
       parameter = str.trim(current);
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Religion"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Reproductive Health"){
       parameter = str.trim(current);
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Social"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Spending"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Spending"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "State Agencies"){
       parameter = str.trim(current);
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Taxes"){
       parameter = current;
     return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
      ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Technology"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Transportation"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Voting Rights"){
       parameter = str.trim(current);
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
    if(current == "Welfare"){
       parameter = current;
      return axios.get('https://openstates.org/api/v1/bills/?chamber=lower&q='+parameter+'&per_page=500&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf'
        ).then(function(response){
        console.log(response);
        this.setState({ newCall : response.data});
      }.bind(this));
    }
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
                  <td><a className="list-group-item" data-value="Appropriation" onClick={this.handleClick}>Appropriation</a></td>
                </tr>
                <tr>
                  <td><a className="list-group-item" data-value="Art" onClick={this.handleClick} >Art</a></td>
                  
                </tr>
                <tr>
                 <td><a className="list-group-item" data-value="Budget" onClick={this.handleClick}>Budget</a></td>
               </tr>
              <tr>
                <td><a className="list-group-item" data-value="Business" onClick={this.handleClick}>Business</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Forms" onClick={this.handleClick}>Forms</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Commerce" onClick={this.handleClick}>Commerce</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Education" onClick={this.handleClick}>Education</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Employment" onClick={this.handleClick}>Employment</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="Energy" onClick={this.handleClick}>Energy</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Environmental" onClick={this.handleClick}>Environmental</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Executive Branch" onClick={this.handleClick}>Executive Branch</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Grants" onClick={this.handleClick}>Grants</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Healthcare" onClick={this.handleClick}>Healthcare</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Homelessness" onClick={this.handleClick}>Homelessness</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="Housing and Property" onClick={this.handleClick}>Housing and Property</a></td>
              </tr>
              <tr>
                <td> <a className="list-group-item" data-value="Immigration" onClick={this.handleClick}>Immigration</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Indigenous Peoples" onClick={this.handleClick}>Indigenous Peoples</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Infrastructure" onClick={this.handleClick}>Infrastructure</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Judicial" onClick={this.handleClick}>Judicial</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Labor" onClick={this.handleClick}>Labor</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="Legislatives" onClick={this.handleClick}>Legislative</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="LGBT" onClick={this.handleClick}>LGBT</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Military" onClick={this.handleClick}>Military</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Municipal" onClick={this.handleClick}>Municipal</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Public Services" onClick={this.handleClick}>Public Services</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Religion" onClick={this.handleClick}>Religion</a></td>
              </tr>
              
              <tr>
                <td><a className="list-group-item" data-value="Reproductive Health" onClick={this.handleClick}>Reproductive Health</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Social" onClick={this.handleClick}>Social</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Spending" onClick={this.handleClick}>Spending</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="State Agencies" onClick={this.handleClick}>State Agencies</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Taxes" onClick={this.handleClick}>Taxes</a></td>
              </tr>
              <tr>
                <td ><a className="list-group-item" data-value="Technology" onClick={this.handleClick}>Technology</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Transportation" onClick={this.handleClick}>Transportation</a></td>
              </tr>
              <tr>
               <td><a className="list-group-item" data-value="Voting rights" onClick={this.handleClick}>Voting rights</a></td>
              </tr>
              <tr>
                <td><a className="list-group-item" data-value="Welfare" onClick={this.handleClick}>Welfare</a>/</td>
              </tr>
              
              </tbody>
            </table>
          </div>
      </div>
              </div>   

        
       </div>
     </div>

         <div className="col-sm-9">
          <GrandChild data={this.props.data} category={this.props.categories} text={this.state.text} newCall={this.state.newCall} />
        </div>
   </div>
    );
  }
});

module.exports = Child;
