import React from 'react'
import Home from './pages/Home'
import SettingTextPage from './pages/SettingTextPage'
import NotFoundPage from './pages/NotFoundPage'
import TodolistPage from './pages/TodolistPage'
import TodolistReduxPage from './pages/TodolistReduxPage'
import ShopCartPage from './pages/ShopCartPage'
import ProductListPage from './pages/ProductListPage'
import ProductsListHandlePage from './pages/ProductsListHandlePage'

const routes = [
    
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/setting_text',
        exact: false,
        main: () => <SettingTextPage />
    },
    {
        path: '/todolist',
        exact: false,
        main: () => <TodolistPage />
    },
    {
        path: '/todolist_redux',
        exact: false,
        main: () => <TodolistReduxPage />
    },
    {
        path: '/shopcart',
        exact: false,
        main: () => <ShopCartPage />
    },
    {
        path: '/productlist',
        exact: true,
        main: () => <ProductListPage />
    },
    {
        path: '/productlist/edit/:id',
        exact: false,
        main: ({ match, history }) => <ProductsListHandlePage match={match} history={history} />
    },
    {
        path: '/productlist/add',
        exact: false,
        main: ({ history }) => <ProductsListHandlePage history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes