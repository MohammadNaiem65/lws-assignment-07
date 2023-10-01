import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { editJob } from '../../features/jobs/jobsSlice';

export default function EditJob() {
	// ! Required hooks and variables
	const {
		title: jobTitle,
		type: jobType,
		salary: jobSalary,
		deadline: jobDeadline,
		id,
	} = useSelector((state) => state.jobs.editingJobDetails);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState(jobTitle);
	const [type, setType] = useState(jobType);
	const [salary, setSalary] = useState(jobSalary);
	const [deadline, setDeadline] = useState(jobDeadline);

	const handleEditJob = (e) => {
		e.preventDefault();

		const data = { title, type, salary, deadline };

		dispatch(editJob({ id, data }));
		navigate('/');
	};

	const content = (
		<main className='max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
			<h1 className='mb-10 text-center lws-section-title'>Edit Job</h1>

			<div className='max-w-3xl mx-auto'>
				<form className='space-y-6' onSubmit={handleEditJob}>
					<div className='fieldContainer'>
						<label
							htmlFor='lws-JobTitle'
							className='text-sm font-medium text-slate-300'>
							Job Title
						</label>
						<select
							id='lws-JobTitle'
							name='lwsJobTitle'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							className='px-3 py-1 text-slate-300'>
							<option value='' hidden>
								Select Job
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
							name='lwsJobType'
							value={type}
							onChange={(e) => setType(e.target.value)}
							required
							className='px-3 py-1 text-slate-300'>
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
								name='lwsJobSalary'
								id='lws-JobSalary'
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
								required
								className='!rounded-l-none !border-0'
								placeholder='20,00,000'
							/>
						</div>
					</div>

					<div className='fieldContainer'>
						<label htmlFor='lws-JobDeadline'>Deadline</label>
						<input
							type='date'
							name='lwsJobDeadline'
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
							className='cursor-pointer btn btn-primary w-fit bg-green-300'>
							Edit
						</button>
					</div>
				</form>
			</div>
		</main>
	);

	return title ? (
		content
	) : (
		<h2 className='text-xl font-semibold text-white'>
			Select a job from{' '}
			<Link
				to='/'
				className='text-green-400 px-1 border-b-2 border-green-400'>
				Home
			</Link>{' '}
			to update it.
		</h2>
	);
}
