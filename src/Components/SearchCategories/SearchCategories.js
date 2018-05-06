import React from 'react';
import styles from './SearchCategories.css'

const searchCategories = (props) => {
  // const categories = props.categories.map(category => {
  //   <div className={styles.Category}>
  //     return <button>{category}</button>
  //   </div>
  // })
  return(
    <div className={styles.Categories}>
      {props.categories.map(category => {
        return <div>
				<button onClick={props.removeCategory} name={category} className={styles.Category}>{category}</button>
			</div>;
      })}
    </div>
  )
}

export default searchCategories;