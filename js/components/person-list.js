var React = require('react');
var ReactDOM = require('react-dom');
var Person = require('./person');

var PersonList = React.createClass({
    render: function() {
        return (
            <div className="person-list">
                <Person name={'Derek Zoolander'} imageUrl={'https://s3.drafthouse.com/images/made/zoolander-blue-steel-ben-stiller-today-tease-150720_690101f3edc8f1aa9fc8b8b754527bd5_800_450_81_s.jpg'} job={'Male model'} />
                <Person name={'Jess'} imageUrl={'https://s3.drafthouse.com/images/made/zoolander-blue-steel-ben-stiller-today-tease-150720_690101f3edc8f1aa9fc8b8b754527bd5_800_450_81_s.jpg'} job={'Developer'} />
            </div>
        );
    }
});

module.exports = PersonList;
