import React, {useState} from 'react'
import Part1Card from './Part1Card'

function Part1({orgOrmData}) {
  
  const [search, setSearch] = useState("")

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const searchedData = orgOrmData.filter((organization) => {
    if (search === "") {
        return false;
      } else {
        return organization.myShopifyDomain === search  
      }
  })

  return (
    <div className='part1'>
      <h1>Optimization Settings</h1>
      <p className='title-description'>Takes the value of a myShopifyDomain field as an input and returns their optimization settings</p>
      <select
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      >
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
        {searchedData.map((org) => {
            return <Part1Card key={org.myShopifyDomain} org={org}/>
          })}
      </div>
    </div>
  )
}

export default Part1