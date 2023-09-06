import React from 'react'

function Part2Card({org, accountPlanOrmData}) {

let status
let plan

accountPlanOrmData.map((planData) => {

    if (planData.organizationId === org.id)

    {
      status = planData.status
      plan = planData.planName 
    }
    return status && plan
  })

let date = org.createdDate.split(" ")
date = date[0].split("-")
date = `${date[1]} / ${date[2]} / ${date[0]}`
 
  return (
    <div className='part2-output'>
        <h3>{org.orgName}</h3>
        <div>
            <p>Plan Name: {plan}</p>
            <p>Status: {status}</p>
            <p>Date Created: {date}</p>
        </div>
    </div>
  )
}

export default Part2Card