import React from 'react';
import Layout from './HOC/Layout/Layout';
import ItemPage from './containers/ItemPage/ItemPage';

function App() {
	return (
		<Layout>
			<ItemPage />
		</Layout>
	);
}

export default App;
