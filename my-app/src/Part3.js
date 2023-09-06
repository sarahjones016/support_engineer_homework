import React from 'react'
import Part3Card from './Part3Card'

function Part3({orgOrmData, accountPlanOrmData}) {
  
  return (
    <div className='part3'>
      <h1>Canceled Organizations</h1>
      <p className='title-description'>Returns the list of organizations whose status is cancelled</p>
      <div className='part3-card-holder'>
        {orgOrmData
        .map((org, index) => {
          if (index === 4) {
            return <Part3Card key={org.orgName} org={org} accountPlanOrmData={accountPlanOrmData}/>
          }
            
          })}
      </div>
    </div>
  )
}

export default Part3