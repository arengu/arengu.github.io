/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h1 className="projectTitle">
        Documentation
      </h1>
    );

    const PromoSection = props => (
      <div className="promoBlockSection">
        <div className="promoBlockRow">
          {props.children}
        </div>
      </div>
    );

    const PromoBlock = props => (
      <div className="promoBlockColumn">
        <a href={docUrl(props.url)}>
          <div className="promoBlock">
            <div className="promoBlockImageContainer">
              <img className="promoblockImage" src={props.image} />
            </div>
            <div className="promoBlockTextContainer">
              <span className="promoBlockTextTitle">{props.title}</span>
              <p className="promoBlockText">{props.text}</p>
            </div>
          </div>
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <p>Welcome to Arengu! Here you'll find everything related to our products</p>
          <PromoSection>
            <PromoBlock
              image={`${baseUrl}img/arengu-overview-icon.png`}
              title='Overview'
              text='First time here? Read this short page and learn more about Arengu'
              url='product/'
            />
            <PromoBlock
              image={`${baseUrl}img/arengu-forms-icon.png`}
              title='Forms'
              text='Easily build online forms without writing a single line of code'
              url='product/forms/'
            />
            <PromoBlock
              image={`${baseUrl}img/arengu-flows-icon.png`}
              title='Flows'
              text='Integrate your favourite apps and automate your workflows'
              url='product/flows/'
            />
            <PromoBlock
              image={`${baseUrl}img/arengu-api-icon.png`}
              title='API Reference'
              text='Experiment with our API, and find the details of each endpoint'
              url='api/'
            />
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
