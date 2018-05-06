import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import SearchCategories from '../SearchCategories/SearchCategories'
import styles from './Home.css';
import Logo from '../../img/foodfinder.png'

class Home extends Component {
  state = {
    search: '',
    zipcode: '',
    categories: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  removeCategory = category => {
    let categoryCopy = [...this.state.categories];
    let index = categoryCopy.indexOf(category.target.name);
    categoryCopy.splice(index, 1);
    this.setState({ categories: categoryCopy })
  }

  handleSearchCategories = e => {
    if (e.key === 'Enter' || (e.charCode === 32)) {
      this.setState({
        categories: [...this.state.categories, this.state.search]
      })
      this.setState({
        search: ''
      })
    }
  }

  render() {
    return(
      <div className={styles.Container}>
        <div className={styles.Main}>
          <img className={styles.Logo} src={Logo}/>
          <div className={styles.Search}>
            <div className={styles.Find}>Find</div>
            <input
              className={styles.FormCategory}
              type="text"
              name="search"
              onKeyPress={this.handleSearchCategories}
              value={this.state.search}
              placeholder="Add categories"
              onChange={this.handleChange}
            />
            <div className={styles.Zipcode}>Zipcode</div>
            <input
              className={styles.FormCategory}
              type="text"
              name="zipcode"
              onKeyPress={this.handleSearchCategories}
              value={this.state.zipcode}
              placeholder="Enter a zipcode"
              onChange={this.handleChange}
            />
              <button className={styles.SearchButton}><span class="glyphicon glyphicon-search"/></button>
          </div>
          <SearchCategories categories={this.state.categories} removeCategory={this.removeCategory.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Home