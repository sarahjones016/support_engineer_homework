import React from 'react'

function Part3Card({org, accountPlanOrmData}) {

let status

accountPlanOrmData.map((accountPlanData) => {

        if (accountPlanData.organizationId === org.id) {
            if (accountPlanData.status === "CANCELLED") {
                (status = accountPlanData.status)
            }
        }
        return status 
    })



  return (
    <div className='part3-output'>
        <h3>{org.orgName}</h3>
        <div>
            <p>Status: {status}</p>
        </div>
    </div>
  )
}

export default Part3Card