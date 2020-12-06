import { Redirect } from "react-router-dom"
//?奇怪为什么 不引入也可以
import React from 'react'

import KYODiscover from '@/pages/discover'
import KYORecommend from '@/pages/discover/c-pages/recommend'
import KYORanking from '@/pages/discover/c-pages/ranking'
import KYOSongs from '@/pages/discover/c-pages/songs'
import KYOjradio from '@/pages/discover/c-pages/djradio'
import KYOArtist from '@/pages/discover/c-pages/artist'
import KYOAlbum from '@/pages/discover/c-pages/album'
import KYOFriend from '@/pages/friend'
import KYOMine from '@/pages/mine'

const routes = [
    {
        path: '/',
        exact: true,
        render: ()=>(
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        component: KYODiscover,
        routes:[
            {
                path: "/discover",
                exact: true,
                render: () => (
                  <Redirect to="/discover/recommend"/>
                )
              },
              {
                path: "/discover/recommend",
                component: KYORecommend
              },
              {
                path: "/discover/ranking",
                component: KYORanking
              },
              {
                path: "/discover/songs",
                component: KYOSongs
              },
              {
                path: "/discover/djradio",
                exact: true,
                component: KYOjradio
              },
              {
                path: "/discover/artist",
                component: KYOArtist
              },
              {
                path: "/discover/album",
                component: KYOAlbum
              }
        ]
    },
    {
        path: '/friend',
        component: KYOFriend
    },
    {
        path: '/mine',
        component: KYOMine
    }
]

export default routes;