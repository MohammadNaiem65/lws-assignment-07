import logoImg from '../..//assets/logo.svg';
import LeftSideNavbar from './LeftSideNavbar/LeftSideNavbar';
import MainContainer from './MainContainer/MainContainer';

export default function Home() {
	return (
		<div className='w-full min-h-screen'>
			<nav className='max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0'>
				<img src={logoImg} />
			</nav>

			<section className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 '>
				<LeftSideNavbar />
				<div className='lg:pl-[14rem]  mt-[5.8125rem]'>
					<MainContainer />
				</div>
			</section>
		</div>
	);
}
