import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

// import classes from './transfer-history.module.css';

const TransferHistory = ({userId}) => {
	const dispatch = useDispatch();
	const {transfers} = useSelector(state =>state.transfers)

	useEffect(() => {
		dispatch(getUsersTransfers(userId));
	}, [dispatch,userId]);

	return (
		<div>
			{transfers &&
				transfers.map(transfer => <TransferItem transfer={transfer} key={transfer.id} />)}
		</div>
	);
};

export default TransferHistory;
