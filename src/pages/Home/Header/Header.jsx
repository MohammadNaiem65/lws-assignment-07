import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	filterBySalary,
	filterByTitle,
} from '../../../features/filter/filterSlice';

export default function Header() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [salary, setSalary] = useState('Default');

	useEffect(() => {
		dispatch(filterByTitle(title));
		if (salary === 'Salary (Low to High)') {
			dispatch(filterBySalary('Low'));
		} else if (salary === 'Salary (High to Low)') {
			dispatch(filterBySalary('High'));
		} else {
			dispatch(filterBySalary('Default'));
		}
	}, [title, salary, dispatch]);

	return (
		<div className='md:flex space-y-2 md:space-y-0 justify-between mb-10 '>
			<h1 className='lws-section-title'>All Available Jobs</h1>
			{/* Filter */}
			<div className='flex gap-4'>
				<div className='search-field group flex-1'>
					<i className='fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500'></i>
					<input
						type='text'
						placeholder='Search Job'
						className='search-input'
						id='lws-searchJob'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<select
					id='lws-sort'
					name='sort'
					autoComplete='sort'
					className='px-2 flex-1 text-slate-300'
					value={salary}
					onChange={(e) => setSalary(e.target.value)}>
					<option>Default</option>
					<option>Salary (Low to High)</option>
					<option>Salary (High to Low)</option>
				</select>
			</div>
		</div>
	);
}
