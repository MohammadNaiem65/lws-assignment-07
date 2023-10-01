import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createJob, readJobs } from './jobsAPI';

// initial state
const initialState = {
	jobs: [],
	isLoading: false,
	isError: false,
	error: '',
};

// async thunks
export const addJob = createAsyncThunk('jobs/addJob', async (data) => {
	const jobData = await createJob(data);

	return jobData;
});

export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
	const jobs = await readJobs();

	return jobs;
});

// create jobs slice
const jobSlice = createSlice({
	name: 'jobs',
	initialState,
	extraReducers: (builder) => {
		// add job
		builder
			.addCase(addJob.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(addJob.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs.push(action.payload);
			})
			.addCase(addJob.rejected, (state, action) => {
				state.isLoading = false;
				state.jobs = [];
				state.isError = true;
				state.error = action.error.message;
			});

		// get jobs
		builder
			.addCase(getJobs.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(getJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = action.payload;
			})
			.addCase(getJobs.rejected, (state, action) => {
				state.isLoading = false;
				state.jobs = [];
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default jobSlice.reducer;
