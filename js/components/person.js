var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Zoolander';
    var imageUrl = 'https://s3.drafthouse.com/images/made/zoolander-blue-steel-ben-stiller-today-tease-150720_690101f3edc8f1aa9fc8b8b754527bd5_800_450_81_s.jpg';
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

module.exports = Person;