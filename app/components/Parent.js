// Include React
var React = require("react");
var Axios = require("axios");
var helpers = require("./utils/helper");

// Here we include all of the sub-components
var Child = require("./Child");

var Parent = React.createClass({


  getInitialState: function() {
    return {
      categories: '',
      data: []
    };
  },

  handleClick: function(event) {

    event.preventDefault();

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

  render: function() {
    console.log(this.state.categories, "state");
    return (
      <div className="container-fluid parent">
       
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
                    <div id="tabs" className="btn btn-group-justified">
                        <a className="btn categories" data-value="House" onClick={this.handleClick}>House</a>
                        <a className="btn categories" data-value="Senate" onClick={this.handleClick}>Senate</a>
                        <a className="btn categories" data-value="State" onClick={this.handleClick}>State</a>
                        <a className="btn categories" data-value="Local" onClick={this.handleClick}>Local</a>
                    </div>
                </div>
            </div>
        </div>

        <Child data={this.state.data} categories={this.state.categories} />

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
