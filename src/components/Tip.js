import React from 'react'

function Tip({ tip }) {
	return (
		<div className="card">
			<h2 className="name">{tip.name}</h2>
			<h4 className="description">{tip.description}</h4>
		</div>
	)
}

export default Tip;