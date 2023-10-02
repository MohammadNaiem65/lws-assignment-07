import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	title: '',
	type: 'All',
	salary: 'Default',
};

// create filter slice
const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterByTitle: (state, action) => {
			state.title = action.payload;
		},
		filterByType: (state, action) => {
			state.type = action.payload;
		},
		filterBySalary: (state, action) => {
			state.salary = action.payload;
		},
		resetFilter: (state) => {
			state.title = '';
			state.type = 'All';
			state.salary = 'Default';
		},
	},
});

export default filterSlice.reducer;
export const { filterByTitle, filterByType, filterBySalary, resetFilter } =
	filterSlice.actions;
