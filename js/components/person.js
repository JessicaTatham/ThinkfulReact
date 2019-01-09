var React = require('react');
var ReactDOM = require('react-dom');

var Person = React.createClass({
    getInitialState: function() {
        hightlight: false
    },
    onClick: function() {
        this.setState({
            hightlight: !this.state.hightlight
        })
    }
    render: function() {
        var classes = 'person ' + (this.state.hightlight ? 'hightlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

module.exports = Person;