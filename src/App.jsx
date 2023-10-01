import { Link, Outlet } from 'react-router-dom';
import logoImg from './assets/logo.svg';
import LeftSideNavbar from './shared/LeftSideNavbar/LeftSideNavbar';
import './App.css';

function App() {
	return (
		<div className='w-full min-h-screen'>
			<Link
				to='/'
				className='max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0'>
				<img src={logoImg} />
			</Link>

			<section className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 '>
				<LeftSideNavbar />
				<div className='lg:pl-[14rem] mt-[5.8125rem]'>
					<Outlet />
				</div>
			</section>
		</div>
	);
}

export default App;
