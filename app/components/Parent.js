// Include React
var React = require("react");
var Axios = require("axios");


//var helpers = require("./utils/helper");

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
    // var parameter = 'introduced';
    // var key = '&apikey=yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8';
    // var url = 'https://api.propublica.org/congress/v1/115/house/bills/${parameter}.json${key}';
    
   Axios.get('https://openstates.org/api/v1/bills/?state=ca&q=all&apikey=cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf', {}).then(function(data){
    console.log(data);
    this.setState({data: data.data}) 
   }.bind(this));
   },
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ categories: this.state.categories});
  },
  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the categories -- and it will be passed  ALL children
  resetClick: function() {
    this.setState({ categories: ''});
  },

  // Here we render the function
  render: function() {
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
                        <a className="btn categories" onClick={this.handleClick}>House</a>
                        <a className="btn categories" onClick={this.handleClick}>Senate</a>
                        <a className="btn categories" onClick={this.handleClick}>State</a>
                        <a className="btn categories" onClick={this.handleClick}>Local</a>
                    </div>
                </div>
            </div>
        </div>

        <Child data={this.state.data} />

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
