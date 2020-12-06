//包
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store'

//组件
import KYOAppHeader from '@/components/app-header'
import KYOAppFooter from '@/components/app-footer'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <KYOAppHeader />
                {renderRoutes(routes)}
                <KYOAppFooter />
            </HashRouter>
        </Provider>
    )
})
