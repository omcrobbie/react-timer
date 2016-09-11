var React= require('react'),
    {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: ()=>{
        return (
            <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Timer App</li>
                            <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                            <li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">This is a <a>Link</a></li>
                        </ul>
                    </div>
            </div>
        )
    }
})

module.exports = Nav;