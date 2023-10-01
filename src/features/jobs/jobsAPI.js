import axiosInstance from '../../utils/axios';

export const createJob = async (data) => {
	const res = await axiosInstance.post('/jobs', data);

	return res.data;
};
