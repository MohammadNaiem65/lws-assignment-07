import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../../features/jobs/jobsSlice';
import Job from '../Job/Job';
import filterJobs from '../../../utils/filterJobs';

export default function Jobs() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { jobs, isLoading, isError, error } = useSelector(
		(state) => state.jobs
	);
	const filters = useSelector((state) => state.filters);

	// get jobs
	useEffect(() => {
		dispatch(getJobs());
	}, [dispatch]);

	const filteredJobsRef = useRef([]);
	const filteredJobs = filterJobs(jobs, filteredJobsRef.current, filters);

	// decide the content to render
	let content = null;
	if (isLoading) content = <p className='text-lg text-slate-300'>Loading...</p>;
	else if (!isLoading && isError) {
		content = <p className='text-lg text-red-300'>{error}</p>;
	} else if (!isLoading && filteredJobs.length === 0) {
		content = <p className='text-lg text-slate-300'>No data found.</p>;
	} else if (!isLoading && filteredJobs.length > 0) {
		content = filteredJobs.map((job) => <Job key={job.id} job={job} />);
	}

	return <div className='jobs-list'>{content}</div>;
}
