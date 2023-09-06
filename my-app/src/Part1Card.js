import React from 'react'

function Part1Card({org}) {

let shipping
let theming
let transaction
let integrations

if ((org.setup.optimization.shipping) === false) {
    shipping = "False"
}  else {
    shipping = "True"
}

if ((org.setup.optimization.theming) === false) {
    theming = "False"
}  else {
    theming = "True"
}

if ((org.setup.optimization.transaction) === false) {
    transaction = "False"
}  else {
    transaction = "True"
}

if ((org.setup.optimization.integrations) === false) {
    integrations = "False"
}  else {
    integrations = "True"
}

  return (

    <div className='output'>
        <h3>{org.myShopifyDomain}</h3>
        <div className='settings'>
            <p>Shipping: {shipping}</p>
            <p>Theming: {theming}</p>
            <p>Transaction: {transaction}</p>
            <p>Integrations: {integrations}</p>
        </div>
        
    </div>
  )
}

export default Part1Card