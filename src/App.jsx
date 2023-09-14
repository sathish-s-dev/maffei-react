// import './App.css';
// import Header from './components/header/header';
import ContactPage from './components/contact/contact';
import Home from './components/home/Home';
import Events from './components/events/Events';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Menu from './components/menu/Menu';
import { Routes, Route } from 'react-router-dom';

function App() {
	const routes = [
		{
			path: '/',
			Component: <Home />,
		},
		{
			path: '/about',
			Component: <About />,
		},
		{
			path: '/gallery',
			Component: <Gallery />,
		},
		{
			path: '/events',
			Component: <Events />,
		},
		{
			path: '/contact',
			Component: <ContactPage />,
		},
		{
			path: '/menu',
			Component: <Menu />,
		},
	];

	return (
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.Component}
				/>
			))}
		</Routes>
	);
}

export default App;
