import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Products from './pages/Products';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/products', element: <Products /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
