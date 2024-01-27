import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
	return (
		<CartContextProvider>
			<Header />
			<Shop>
				{/* This is an example of Component Compisition. Using the Children Prop
        makes it such that you don't have to pass the handle function all the way through */}
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</CartContextProvider>
	);
}

export default App;
