import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterByType, resetFilter } from '../../features/filter/filterSlice';

export default function LeftSideNavbar() {
	// ! Required hooks and variables
	const dispatch = useDispatch();

	const handleResetFilter = () => {
		dispatch(resetFilter());
	};

	const handleFilterByType = (type) => {
		dispatch(filterByType(type));
	};

	return (
		<aside className='sidebar'>
			<ul className='space-y-4'>
				<li>
					<button
						className='main-menu menu-active'
						id='lws-alljobs-menu'
						onClick={handleResetFilter}>
						<i className='fa-solid fa-briefcase'></i>
						<span> All Available Jobs</span>
					</button>
					<ul className='space-y-6 lg:space-y-2 '>
						<li>
							<button
								className='sub-menu'
								id='lws-internship-menu'
								onClick={() =>
									handleFilterByType('Internship')
								}>
								<i className='fa-solid fa-stop !text-[#FF5757]'></i>{' '}
								Internship
							</button>
						</li>
						<li>
							<button
								className='sub-menu'
								id='lws-fulltime-menu'
								onClick={() => handleFilterByType('Full Time')}>
								<i className='fa-solid fa-stop !text-[#FF8A00]'></i>{' '}
								Full Time
							</button>
						</li>
						<li>
							<button
								className='sub-menu'
								id='lws-remote-menu'
								onClick={() => handleFilterByType('Remote')}>
								<i className='fa-solid fa-stop !text-[#56E5C4]'></i>{' '}
								Remote
							</button>
						</li>
					</ul>
				</li>
				<li>
					<Link
						to='/addJob'
						className='main-menu'
						id='lws-addJob-menu'>
						<i className='fa-solid fa-file-circle-plus'></i>
						<span> Add NewJob</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
}
