import React, { Component, PropTypes } from 'react';
//import axios from 'axios';
import { splitEvery } from 'ramda';

import * as feeds from './../feeds/';

class CustomStoryGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      sectionStories: []
    }
  }

  // fetchSectionStories(section) {
  //   return axios.get(`[API_ENPOINT_HERE]${section}.json`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         return res.data;
  //       }
  //       return null;
  //     })
  //     .catch(() => null);
  // }

  fetchSectionStories(section) {
    return feeds[section];
  }

  getSectionTitle({ category: { title } }) {
    switch(title) { 
      case 'POLITICS':
        return 'Politics';
      case 'TECHNOLOGY':
        return 'Technology';
      case 'WORLD NEWS':
        return 'World';
      case 'TECHNOLOGY':
        return 'Technology';
      case 'UK NEWS':
        return 'UK';
      case 'US NEWS':
        return 'US';
      case 'BUSINESS NEWS':
        return 'Business';
      case 'ENTERTAINMENT':
        return 'Entertainment';
      case 'STRANGE!':
        return 'Offbeat';
    }
  }

  getRandomStories({ category: { stories } }, numberOfStories) {
    return stories.sort(() => .5 - Math.random()).slice(0, numberOfStories);
  }

  getTopStories({ category: { stories } }, numberOfStories) {
    return stories.slice(0, numberOfStories);
  }

  selectStories() {
    const numOfSections = Math.min(this.props.numberOfTiles, this.state.sectionStories.length);
    const randomSections = this.state.sectionStories.sort(() => .5 - Math.random()).slice(0, numOfSections);
    const tilesPerSection = this.props.numberOfTiles <= this.state.sectionStories.length ? 1 : Math.round(this.props.numberOfTiles / this.state.sectionStories.length);
    const upper = [...Array(numOfSections)].filter((_, index) => numOfSections - index > tilesPerSection).length;
    
    return randomSections.map((section, index) => {
      const distanceFromLast = numOfSections - index;
      if (distanceFromLast > tilesPerSection) {
        return this.props.toggleRandomStories ? this.getRandomStories(section, tilesPerSection) : this.getTopStories(section, tilesPerSection);
      }
      const updatedTilesPerSection = (this.props.numberOfTiles - (upper * tilesPerSection)) / (numOfSections - upper);
      return this.props.toggleRandomStories ? this.getRandomStories(section, updatedTilesPerSection) : this.getTopStories(section, updatedTilesPerSection);
      
    }).reduce((acc, i) => [...acc, ...i], []);
  }

  renderCard({ url, mainPhoto, headline }, index) {
    const photoUrl = mainPhoto.url.replace('{width}x{height}', '288x216');
    return (
      <div key={index} className="sdc-news-story-grid__card sdc-news-story-grid__card--3col">
        <a className="sdc-news-story-grid__link" href={url}>
          <div className="sdc-news-story-grid__media">
            <div className="sdc-news-story-grid__ratio sdc-news-story-grid__ratio--4/3">
              <img className="sdc-news-story-grid__media-element sdc-news-story-grid__media-img" src={photoUrl} data-lazy-loaded={true} />
            </div>
          </div>
        </a>
        <div className="sdc-news-story-grid__body">
          <h3 className="sdc-news-story-grid__headline">
            <a className="sdc-news-story-grid__link" href={url}>{headline}</a>
          </h3>
        </div>
      </div>
    );
  }

  renderRow = (row, index) => {
    return (
      <div key={index} className="sdc-news-story-grid__row">
        {row.map(this.renderCard)}
      </div>
    );
  }

  renderGrid() {
    if(this.props.toggleSectionView) {
      return (
        <div>
          {this.state.sectionStories.map((section, index) => {
            const rows = splitEvery(3, this.getRandomStories(section, 6));
  
            return (
              <div key={index} ref="ref1" className="sdc-news-story-grid">
                <h2 className="custom-story-picker__title sdc-news-story-grid__title">
                    {this.getSectionTitle(section)}
                </h2>
                {rows.map(this.renderRow)}
              </div>
            );
          })}
        </div>
      );
    }
    
    const selectedStories = this.selectStories();
    const rows = splitEvery(3, selectedStories);
    return (
      <div ref="ref1" className="sdc-news-story-grid">
        {rows.map(this.renderRow)}
      </div>
    );
    return selectedStories.map(renderTile);
  }

  renderPlaceholder() {
    return (
      <h3 className="sdc-news-story-grid__headline sdc-article-quote__inner">
        Select some categories to see content
      </h3>
    );
  }

  componentDidUpdate(nextProps) {
    if (this.props.sections !== nextProps.sections || this.props.toggleRandomStories !== nextProps.toggleRandomStories) {
      const chosenStoryRequests = this.props.sections.map(section => this.fetchSectionStories(section));
      Promise.all(chosenStoryRequests).then(stories => {
        const sectionStories = stories.filter(i => i);
        this.setState({ sectionStories })
      });
    }
  }

  componentDidMount() {
    if (this.props.sections) {
      const chosenStoryRequests = this.props.sections.map(section => this.fetchSectionStories(section));
      Promise.all(chosenStoryRequests).then(stories => {
        const sectionStories = stories.filter(i => i);
        this.setState({ sectionStories })
      });
    }
  }

  render() {
    return this.state.sectionStories.length > 0 ? this.renderGrid() : this.renderPlaceholder();
  }

}

CustomStoryGrid.propTypes = {
  numberOfTiles: PropTypes.number
};

CustomStoryGrid.defaultProps = {
  numberOfTiles: 6
};

export default CustomStoryGrid;