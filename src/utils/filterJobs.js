import { matchSorter } from 'match-sorter';

export default function filterJobs(jobs, filteredJobsCarrier, query) {
	const { title, type, salary } = query;

	if (title) {
		filteredJobsCarrier = matchSorter(jobs, title, {
			keys: ['title'],
		})
			.filter((job) => {
				if (type === 'All') {
					return true;
				} else if (type === job.type) {
					return true;
				} else {
					return false;
				}
			})
			.sort((a, b) => {
				if (salary === 'High') {
					return b.salary - a.salary;
				} else if (salary === 'Low') {
					return a.salary - b.salary;
				} else {
					return true;
				}
			});
	} else {
		filteredJobsCarrier = jobs
			.filter((job) => {
				if (type === 'All') {
					return true;
				} else if (type === job.type) {
					return true;
				} else {
					return false;
				}
			})
			.sort((a, b) => {
				if (salary === 'High') {
					return b.salary - a.salary;
				} else if (salary === 'Low') {
					return a.salary - b.salary;
				} else {
					return true;
				}
			});
	}

	return filteredJobsCarrier;
}
