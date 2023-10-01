import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createJob, deleteJob, readJobs, updateJob } from './jobsAPI';

// initial state
const initialState = {
	jobs: [],
	editingJobDetails: {},
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

export const editJob = createAsyncThunk(
	'jobs/editJob',
	async ({ id, data }) => {
		const updatedData = await updateJob(id, data);

		return updatedData;
	}
);

export const removeJob = createAsyncThunk('jobs/removeJob', async (id) => {
	const response = await deleteJob(id);

	return response;
});

// create jobs slice
const jobSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		addEditingJobDetails: (state, action) => {
			state.editingJobDetails = action.payload;
		},
	},
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

		// edit job
		builder
			.addCase(editJob.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(editJob.fulfilled, (state, action) => {
				state.isLoading = false;

				const index = state.jobs.findIndex(
					(job) => job.id === action.payload.id
				);
				state.jobs[index] = action.payload;
			})
			.addCase(editJob.rejected, (state, action) => {
				state.isLoading = false;
				state.jobs = [];
				state.isError = true;
				state.error = action.error.message;
			});

		// delete job
		builder
			.addCase(removeJob.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(removeJob.fulfilled, (state, action) => {
				state.isLoading = false;

				state.jobs = state.jobs.filter(
					(job) => job.id !== action.meta.arg
				);
			})
			.addCase(removeJob.rejected, (state, action) => {
				state.isLoading = false;
				state.jobs = [];
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default jobSlice.reducer;
export const { addEditingJobDetails } = jobSlice.actions;
