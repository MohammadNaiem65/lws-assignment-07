import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../../features/jobs/jobsSlice';
import Job from '../Job/Job';

export default function Jobs() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { jobs, isLoading, isError, error } = useSelector(
		(state) => state.jobs
	);

	// get jobs
	useEffect(() => {
		dispatch(getJobs());
	}, [dispatch]);

	// decide the content to render
	let content = null;
	if (isLoading) content = <p className='text-lg'>Loading...</p>;
	else if (!isLoading && isError) {
		content = <p className='text-lg text-red-300'>{error}</p>;
	} else if (!isLoading && jobs.length === 0) {
		content = <p className='text-lg'>No data found.</p>;
	} else if (!isLoading && jobs.length > 0) {
		content = jobs.map((job) => <Job key={job.id} job={job} />);
	}

	return <div className='jobs-list'>{content}</div>;
}
