import React from 'react'

function Tip({ tip, remove }) {
	return (
		<div className="card">
			<h2 className="name">{tip.name}</h2>
			<h4 className="description">{tip.description}</h4>
			<button className="closeButton" onClick={() => remove(tip.id)}>
        Remove Tip
      </button>
		</div>
	)
}

export default Tip;