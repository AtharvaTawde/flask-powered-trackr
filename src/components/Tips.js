import Tip from './Tip';

function Tips({ tips, remove }) {
	return (tips.map(tip => (
		<Tip key={tip.id} tip={tip} remove={remove} />	
	)));
}

export default Tips;

