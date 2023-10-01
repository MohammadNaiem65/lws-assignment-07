import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import AddJob from './pages/AddJob/AddJob.jsx';
import EditJob from './pages/EditJob/EditJob.jsx';
import './index.css';
import store from './app/store.js';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/addJob',
				element: <AddJob />,
			},
			{
				path: '/editJob',
				element: <EditJob />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);
