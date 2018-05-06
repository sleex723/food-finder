import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import styles from './Home.css';
import Logo from '../../img/foodfinder.png'

class Home extends Component {
  state = {
    search: '',
    zipcode: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return(
      <div className={styles.Container}>
        <div className={styles.Main}>
          <img className={styles.Logo} src={Logo}/>
          <div className={styles.Search}>
            <div className={styles.Find}>Find</div>
            <form>
              <FormGroup
                controlId="formBasixText"
                bsSize="lg"
              >
              <FormControl
                className={styles.FormCategory}
                type="text"
                name="search"
                value={this.state.search}
                placeholder="Add categories"
                onChange={this.handleChange}
              />
              </FormGroup>
            </form>
            <div className={styles.Zipcode}>Zipcode</div>
            <FormGroup
                controlId="formBasixText"
                bsSize="lg"
              >
              <FormControl
                className={styles.FormCategory}
                type="text"
                name="zipcode"
                value={this.state.zipcode}
                placeholder="Enter your zipcode"
                onChange={this.handleChange}
              />
              </FormGroup>
              <button className={styles.SearchButton}><span class="glyphicon glyphicon-search"/></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home