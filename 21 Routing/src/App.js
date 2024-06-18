import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/products', element: <Products /> },
			{ path: '/products/:productId', element: <ProductDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
