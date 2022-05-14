import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../store/slices/user.slice';
import classes from './header.module.css';

const Header = () => {

	const dispatch = useDispatch();
	
	
	const logout = ()=>{
		dispatch(usersActions.logout())
	}

	return (
		<header className={classes.header}>
			<div className={classes.brand}>
				<a href="/">Academlo Bank</a>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link to="#" onClick={logout}>Change account</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
