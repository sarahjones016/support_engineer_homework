import React, {useState} from 'react'
import Part2Card from './Part2Card'

function Part2({orgOrmData, accountPlanOrmData}) {

  return (
    <div className='part2'>
      <h1>Organization Details</h1>
      <p className='title-description'>Loops through all organizations and shows the date they were created (DD/MM/YYYY), their status, and planName sorted by oldest to newest</p>
      <div className='part2-card-holder'>
        {orgOrmData
        .sort((a, b) => ((a.createdDate) > (b.createdDate) ? 1 : -1))
        .map((org) => {
            return <Part2Card key={org.orgName} org={org} accountPlanOrmData={accountPlanOrmData}/>
          })}
      </div>
    </div>
  )
}

export default Part2