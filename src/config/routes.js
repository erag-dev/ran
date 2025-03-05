import { Suspense, lazy } from "react"
import { 
	BrowserRouter as Router, 
	Routes, 
	Route,
} from "react-router-dom"

import AppLoader from "components/AppLoader"

const HomePage = lazy(() => import('pages/Home'));
const RankPage = lazy(() => import('pages/Rank'));

/* ----------------------------
	Error Pages
   ---------------------------- */
const ErrorPageNotFound = lazy(() => import('pages/Error404'));


// ********************************************************************************************************************************
// ********************************************************************************************************************************

const routes = () => {

	return (		
		<Router basename="/ran">
			<Suspense fallback={<AppLoader isShow={true} />}>
				<Routes>

					<Route
						path ="/"
						element={<HomePage/>} 
					/>

					<Route
						path ="rank"
						element={<RankPage/>} 
					/>

					<Route path="*" element={<ErrorPageNotFound/>} />

				</Routes>
			</Suspense>
		</Router>
	)
};

export default routes