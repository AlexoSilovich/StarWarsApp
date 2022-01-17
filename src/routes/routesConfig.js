import PeoplePage from "@containes/PeoplePage"
import HomePage from "@containes/HomePage"
import PersonPage from "@containes/PersonPage"
import NotFoundPage from "@containes/NotFoundPage"
import FavoritesPage from "@containes/FavoritesPage"
import SearchPage from "@containes/SearchPage"
import ErrorMessage from "@components/ErrorMessage"

const routesConfig = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/people',
        element: PeoplePage
    },
    {
        path: '/people/:id',
        element: PersonPage
    },
    {
        path: '/favorites',
        element: FavoritesPage
    },
    {
        path: '/search',
        element: SearchPage
    },
    {
        path: '/fail',
        element: ErrorMessage
    },
    {
        path: '/not-found',
        element: NotFoundPage 
    },
    {
        path: '*',
        exact: false,
        element: NotFoundPage
    }
]

export default routesConfig