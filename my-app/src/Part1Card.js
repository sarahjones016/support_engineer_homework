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

    <div>
        <h3>myShopifyDomain: {org.myShopifyDomain}</h3>
        {/* <h3>myShopifyDomain: {org.myShopifyDomain}</h3> */}
        <h2>Optimization Settings:</h2>
        <h3>Shipping: {shipping}</h3>
        <h3>Theming: {theming}</h3>
        <h3>Transaction: {transaction}</h3>
        <h3>Integrations: {integrations}</h3>
    </div>
  )
}

export default Part1Card