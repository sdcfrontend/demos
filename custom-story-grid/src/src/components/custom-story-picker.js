import React from 'react';
import R from 'ramda';

import CustomStoryGrid from './custom-story-grid';

const storyPickerKey = 'customStoryPicker';

const saveToLocalStorage = (array) => {
  localStorage.setItem(storyPickerKey, JSON.stringify(array));
};

class CustomStoryPicker extends React.Component {
  constructor(props){
      super(props);

      const storiesString = localStorage.getItem(storyPickerKey);
      this.state = {
          active: false,
          toggleRandomStories: false,
          toggleSectionView: false,
          chosenOptions: storiesString ? JSON.parse(storiesString) : null,
      }

      this.togglePicker = this.togglePicker.bind(this);
      this.toggleRandomStories = this.toggleRandomStories.bind(this);
      this.toggleSectionView = this.toggleSectionView.bind(this);
  }

  componentDidMount() {
    let chosenOptions = JSON.parse(localStorage.getItem(storyPickerKey));
    const storedToggleRandomStories = localStorage.getItem('toggleRandomStories') && JSON.parse(localStorage.getItem('toggleRandomStories'));
    const storedToggleSectionView = localStorage.getItem('toggleSectionView') && JSON.parse(localStorage.getItem('toggleSectionView'));

    if (chosenOptions) {
      chosenOptions.map((option) => {
        switch(option) { 
          case 'uk':
            this.checkboxUk.checked = true;
            break;
          case 'world':
            this.checkboxWorld.checked = true;
            break;
            case 'us':
            this.checkboxUs.checked = true;
            break;
            case 'business':
            this.checkboxBusiness.checked = true;
            break;
            case 'politics':
            this.checkboxPolitics.checked = true;
            break;
            case 'technology':
            this.checkboxTechnology.checked = true;
            break;
            case 'entertainment':
            this.checkboxEntertainment.checked = true;
            break;
            case 'strange':
            this.checkboxStrange.checked = true;
            break;
        }
      });
    }

    if (storedToggleRandomStories) {
        this.setState({ toggleRandomStories: storedToggleRandomStories });
        this.checkboxRandom.checked = true;
    }

    if (storedToggleSectionView) {
        this.setState({ toggleSectionView: storedToggleSectionView });
        this.checkboxSectionView.checked = true;
    }
  }

  togglePicker() {
      this.setState(prevState => ({
          active: !prevState.active,
      }));
  }

  toggleRandomStories() {
      this.setState({ toggleRandomStories: !this.state.toggleRandomStories });
      localStorage.setItem('toggleRandomStories', JSON.stringify(!this.state.toggleRandomStories));
  }

  toggleSectionView() {
    this.setState({ toggleSectionView: !this.state.toggleSectionView });
    localStorage.setItem('toggleSectionView', JSON.stringify(!this.state.toggleSectionView));
  }   

  setLocalStorage = (event) => {
    const chosenValue = event.target.value;
    let chosenOptions = JSON.parse(localStorage.getItem(storyPickerKey));

    if (chosenOptions) {
      if (R.contains(chosenValue, chosenOptions)) {
        saveToLocalStorage(R.filter((value) => value !== chosenValue, chosenOptions));
        this.setState({chosenOptions: R.filter((value) => value !== chosenValue, chosenOptions)});      
      } else {
        chosenOptions.push(chosenValue);
        saveToLocalStorage(chosenOptions);
        this.setState({chosenOptions});
      }
    } else {
      saveToLocalStorage([chosenValue]);
      this.setState({chosenOptions: [chosenValue]});
    }
  };

  render() {
    return (
      <div className="custom-story-picker">
      <section className="custom-story-picker__container">
          <h2 className="custom-story-picker__title sdc-news-story-grid__title">
              Your Sky News
              <button onClick={this.togglePicker} className={this.state.active ? 'custom-story-picker__toggle custom-story-picker__toggle--active': 'custom-story-picker__toggle'}></button>
          </h2>
          <div className={this.state.active ? 'custom-story-picker__list-wrapper custom-story-picker__list-wrapper--show' : 'custom-story-picker__list-wrapper custom-story-picker__list-wrapper--hide'}>
              <div className="custom-story-picker__list-options">
                <input type="checkbox" ref={checkbox => { this.checkboxRandom = checkbox }} id="random-stories-toggle" onChange={this.toggleRandomStories} />
                <label htmlFor="random-stories-toggle"> <span className="custom-story-picker__list-item">Randomise</span></label>
                <input type="checkbox" ref={checkbox => { this.checkboxSectionView = checkbox }} id="section-view-toggle" onChange={this.toggleSectionView} />
                <label className="custom-story-picker__option-label custom-story-picker__option-label--last" htmlFor="section-view-toggle"> <span className="custom-story-picker__list-item">Section View</span></label>
              </div>
              <ul className="custom-story-picker__list">
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxUk = checkbox; }} name="news-picker" id="news-picker1" value="uk" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker1">UK</label>
                  </li>
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxWorld = checkbox; }} name="news-picker" id="news-picker2" value="world" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker2">World</label>
                  </li>
              </ul>
              <ul className="custom-story-picker__list">
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxUs = checkbox; }} name="news-picker" id="news-picker3" value="us" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker3">US</label>
                  </li>
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxBusiness = checkbox; }} name="news-picker" id="news-picker4" value="business" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker4">Business</label>
                  </li>
              </ul>
              <ul className="custom-story-picker__list">
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxPolitics = checkbox; }} name="news-picker" id="news-picker5" value="politics" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker5">Politics</label>
                  </li>
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxTechnology = checkbox; }} name="news-picker" id="news-picker6" value="technology" onChange={this.setLocalStorage}/>
                      <label htmlFor="news-picker6">Technology</label>
                  </li>    
              </ul>
              <ul className="custom-story-picker__list">
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxEntertainment = checkbox; }} name="news-picker" id="news-picker7" value="entertainment" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker7">Entertainment</label>
                  </li>
                  <li className="custom-story-picker__list-item">
                      <input type="checkbox" ref={(checkbox) => { this.checkboxStrange = checkbox; }} name="news-picker" id="news-picker8" value="strange" onChange={this.setLocalStorage} />
                      <label htmlFor="news-picker8">Strange</label>
                  </li>
              </ul>
          </div>
      </section>
      <CustomStoryGrid
        ref="grid"
        toggleRandomStories={this.state.toggleRandomStories}
        toggleSectionView={this.state.toggleSectionView}
        sections={this.state.chosenOptions} />
    </div>
    );
  }

}

export default CustomStoryPicker;
