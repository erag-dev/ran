import { Suspense, lazy } from "react"
import { 
	BrowserRouter as Router, 
	Routes, 
	Route,
} from "react-router-dom"

import AppLoader from "components/AppLoader"

const HomePage = lazy(() => import('pages/Home'));
const RankPage = lazy(() => import('pages/Rank'));
const TopupPage = lazy(() => import('pages/Topup'));
const NewsPage = lazy(() => import('pages/News'));
const SupportPage = lazy(() => import('pages/Support'));

/* ----------------------------
	Error Pages
   ---------------------------- */
const ErrorPageNotFound = lazy(() => import('pages/Error404'));


// ********************************************************************************************************************************
// ********************************************************************************************************************************

const routes = () => {

	return (		
		// <Router basename="/">
		<Router basename="/ran">
			<Suspense fallback={<AppLoader isShow={true} />}>
				<Routes>

					<Route
						path ="/"
						element={<HomePage/>} 
					/>

					<Route
						path ="rankings"
						element={<RankPage/>} 
					/>

					<Route
						path ="top-up"
						element={<TopupPage/>} 
					/>

					<Route
						path ="news"
						element={<NewsPage/>} 
					/>

					<Route
						path ="support"
						element={<SupportPage/>} 
					/>

					<Route path="*" element={<ErrorPageNotFound/>} />

				</Routes>
			</Suspense>
		</Router>
	)
};

export default routes