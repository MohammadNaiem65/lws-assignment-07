import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../../features/jobs/jobsSlice';

export default function AddJob() {
	// ! Required hooks and variables
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [type, setType] = useState('');
	const [salary, setSalary] = useState('');
	const [deadline, setDeadline] = useState('');

	const handleAddJob = (e) => {
		e.preventDefault();

		const data = { title, type, salary, deadline };

		dispatch(addJob(data));
	};

	return (
		<main className='max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
			<h1 className='mb-10 text-center lws-section-title'>Add New Job</h1>

			<div className='max-w-3xl mx-auto'>
				<form className='space-y-6' onSubmit={handleAddJob}>
					<div className='fieldContainer'>
						<label
							htmlFor='lws-JobTitle'
							className='text-sm font-medium text-slate-300'>
							Job Title
						</label>
						<select
							id='lws-JobTitle'
							name='title'
							required
							className='px-3 py-1 text-slate-300'
							value={title}
							onChange={(e) => setTitle(e.target.value)}>
							<option value='' hidden>
								Select Job Title
							</option>
							<option>Software Engineer</option>
							<option>Software Developer</option>
							<option>Full Stack Developer</option>
							<option>MERN Stack Developer</option>
							<option>DevOps Engineer</option>
							<option>QA Engineer</option>
							<option>Product Manager</option>
							<option>Social Media Manager</option>
							<option>Senior Executive</option>
							<option>Junior Executive</option>
							<option>Android App Developer</option>
							<option>IOS App Developer</option>
							<option>Frontend Developer</option>
							<option>Frontend Engineer</option>
						</select>
					</div>

					<div className='fieldContainer'>
						<label htmlFor='lws-JobType'>Job Type</label>
						<select
							id='lws-JobType'
							name='type'
							required
							className='px-3 py-1 text-slate-300'
							value={type}
							onChange={(e) => setType(e.target.value)}>
							<option value='' hidden>
								Select Job Type
							</option>
							<option>Full Time</option>
							<option>Internship</option>
							<option>Remote</option>
						</select>
					</div>

					<div className='fieldContainer'>
						<label htmlFor='lws-JobSalary'>Salary</label>
						<div className='flex border rounded-md shadow-sm border-slate-600'>
							<span className='input-tag'>BDT</span>
							<input
								type='number'
								name='salary'
								id='lws-JobSalary'
								required
								className='!rounded-l-none !border-0'
								placeholder='20,00,000'
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							/>
						</div>
					</div>

					<div className='fieldContainer'>
						<label htmlFor='lws-JobDeadline'>Deadline</label>
						<input
							type='date'
							name='deadline'
							id='lws-JobDeadline'
							value={deadline}
							onChange={(e) => setDeadline(e.target.value)}
							required
						/>
					</div>

					<div className='text-right'>
						<button
							type='submit'
							id='lws-submit'
							className='cursor-pointer btn bg-green-400 btn-primary w-fit'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
