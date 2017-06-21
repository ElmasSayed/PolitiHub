// Include React
var React = require("react");
var Axios = require("axios");
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

  // Initially, nothing no apis will be called and nothing will be loaded to the screen. Once a tab is clicked,
  // we will call the appropriate api and render it to the screen.

  handleClick: function(event) {

    event.preventDefault();

    this.setState({ categories: event.target.getAttribute('data-value')});

    var current = event.target.getAttribute('data-value');

    if(current == "House"){
        Axios({
            "method": "GET",
            "url": "https://api.propublica.org/congress/v1/115/house/bills/passed.json",
            "headers": {
                "x-api-key": "yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8"
            } 
        }).then(function(data) {
            console.log(data);
            return data
        }).catch(function(error) {
            console.log(error);
        });
    
    }
    if(current == "Senate"){

        Axios({
          method: 'post',
          url: 'https://api.propublica.org/congress/v1/115/senate/bills/introduced.json',
          headers: {
          "X-API-Key": 'yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8'
          }
        }).then(function(data){
          console.log("promise console log")
        this.setState({data: data.data}) 
        }.bind(this));

    }if(current == "State"){

      Axios.get('https://openstates.org/api/v1/bills/?state=ca&q=all&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf', {}).then(function(data){
       this.setState({data: data.data}) 
      }.bind(this));

    }
    if(current == "Local"){

      Axios.get('https://openstates.org/api/v1/bills/?state=ca&q=all&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf', {}).then(function(data){
      this.setState({data: data.data}) 
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
