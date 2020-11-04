import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'


export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/map' component={OrphanagesMap} />
				<Route path='/orphanage/:id' component={Orphanage} />
				<Route path='/orphanages/create' component={CreateOrphanage} />
			</Switch>
		</BrowserRouter>
	)
}

