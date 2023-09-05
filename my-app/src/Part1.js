import React from 'react'
import Part1Card from './Part1Card'

function Part1({orgOrmData}) {

  return (
    <div className='part1'>
      <h1>Find Optimization Settings</h1>
      <select>
        <option>Select A myShopifyDomain</option>
        <option>test-account-1.myshopify.com</option>
        <option>test-account-2.myshopify.com</option>
        <option>test-account-3.myshopify.com</option>
        <option>test-account-4.myshopify.com</option>
        <option>test-account-5.myshopify.com</option>
        <option>test-account-6.myshopify.com</option>
        <option>test-account-7.myshopify.com</option>
        <option>test-account-8.myshopify.com</option>
        <option>test-account-9.myshopify.com</option>
        <option>test-account-10.myshopify.com</option>
      </select>

      <div className='part1-card-holder'>
        {orgOrmData.map((org) => {
            return <Part1Card key={org.myShopifyDomain} org={org}/>
          })}
      </div>
    </div>
  )
}

export default Part1