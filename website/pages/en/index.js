const React = require('react');

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;

    return (
      <div>
        <div className="homeContainer">
          <div className="homeSplashFade">
            <div className="wrapper homeWrapper">
              <div className="inner">
                <h2 className="projectTitle">
                  {siteConfig.title}
                  <small>{siteConfig.tagline}</small>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
