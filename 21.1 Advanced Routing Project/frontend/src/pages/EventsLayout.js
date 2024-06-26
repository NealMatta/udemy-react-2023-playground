import React from 'react';
import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

export default function RootLayout() {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
}
