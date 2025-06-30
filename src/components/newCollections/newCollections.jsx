import React from 'react'
import './newCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newCollections'>
      <h1>NEW COLLECTIONS</h1>

      {/* Add wrapper around the grid to control width */}
      <div className="collections-wrapper">
        <div className="collections">
          {new_collections.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewCollections
