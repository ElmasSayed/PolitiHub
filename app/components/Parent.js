// Include React
var React = require("react");
//var Axios = require("axios");


var helpers = require("./utils/helper");

// Here we include all of the sub-components
var Child = require("./Child");

// the parent is the overall dashboard but it only actually displays the jumbrotron
var Parent = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      categories: '',
      data: []
    };
  },

  componentDidMount: function() {
   helpers.runHouse().then(function(billData){
      console.log(billData);
      this.setState({ data : billData.data});
      console.log ( billData.data);
    }.bind(this));
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ categories: event.target.getAttribute('data-value')});
    
    var current = event.target.getAttribute('data-value');
    if(current == "House"){
       helpers.runHouse().then(function(billData){
      console.log(billData);
      this.setState({ data : billData.data});
      console.log ( billData.data);
    }.bind(this));
    
    }
    if(current == "Senate"){
      helpers.runSenate().then(function(billData){
      console.log(billData);
      this.setState({ data : billData.data});
      console.log ( billData.data);
    }.bind(this));
       

    }if(current == "State"){
        helpers.runState().then(function(billData){
      console.log(billData);
      this.setState({ data : billData.data});
      console.log ( billData.data);
    }.bind(this));
      
    }
    if(current == "Local"){
      helpers.runLocal().then(function(billData){
      console.log(billData);
      this.setState({ data : billData.data});
      console.log ( billData.data);
    }.bind(this));
     
    }
  },

  // Here we render the function
  render: function() {
    
    return (
        <div className="container-fluid parent">
        <div className="row">
            <div className="col-md-12 title">
                <img src="./images/wh.png" className="logo" /> PolitiHub
                <div className= "elmasA">
                    <button type="button" href="" className="btn glyphicon glyphicon-user personal"></button>
                    <button type="button" className="btn personal"> Logout</button>
                </div>
            </div>
        </div>
    <div className="container-fluid">
        <div className="row col-md-12 button-row">
            <div className="elmasAA">
                <div className="col-md-6">
                    <p>
                        {/* Here we create a button click. Note how we have an onClick event associate with our handleClick function.
                        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
                        <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
                        */}
                    </p>
                </div>
            </div>
            <div className="col-md-12">
                            {/* This is where we'll show the click count for the parent **<h1>{this.state.categories}</h1>** */}

                    {/*
                  Here we'll render the Child component.
                  We'll pass it this component's clicks counter (this.state.clicks)
                  as a "prop" we will also name "clicks".
                  i.e.
                  <ComponentName propName={propValue} />
                */}
                <div className="btn btn-group-justified">
                    <a className="btn categories" onClick={this.handleClick} data-value='House'>House</a>
                    <a className="btn categories" onClick={this.handleClick} data-value='Senate'>Senate</a>
                    <a className="btn categories" onClick={this.handleClick} data-value='State'>State</a>
                    <a className="btn categories" onClick={this.handleClick} data-value='Local'>Local</a>
                </div>
            </div>
        </div>
    </div>

      <Child data={this.state.data}/>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
