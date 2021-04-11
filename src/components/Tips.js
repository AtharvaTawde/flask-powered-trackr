import Tip from './Tip';

function Tips({ tips }) {
	return (tips.map(tip => (
		<Tip key={tip.id} tip={tip} />	
	)));
}

export default Tips;

