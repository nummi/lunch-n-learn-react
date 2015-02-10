var React = require('react');

var SettingsOfficeListItem = require('../components/settings-office-list-item');

module.exports = React.createClass({
  render() {
    var signOutStyle = {
      marginTop: '0',
      marginRight: '15',
      marginBottom: '0',
      marginLeft: '15'
    };

    return (
      <div className="screen">

        <div className="navigation-bar">
          <div className="navigation-bar-title">Settings</div>
        </div>

        <div className="scroll-view __with-navigation-bar-above __with-tab-bar-below">

          <div className="list">
            <div className="list-item list-item--heading">Home Office</div>

            <SettingsOfficeListItem name="Columbus" />
            <SettingsOfficeListItem name="New York" />
            <SettingsOfficeListItem name="San Francisco" />
            <SettingsOfficeListItem name="Singapore" />

            <div className="list-spacer"></div>

            <div className="list-item list-item--with-check">
              <div className="list-item-content">
                <div className="list-item-content-right">
                  <label className="switch">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
                <div className="list-item-text">Show only home office</div>
              </div>
            </div>

          </div>

          <br /><br />

          <div>
            <img src="#" />
            Signed in as Jerry Nummi
          </div>

          <a href="/sign_out" className="button button--red-text" style={signOutStyle}>Sign Out</a>
          <br />
        </div>

      </div>
    );
  }
});
