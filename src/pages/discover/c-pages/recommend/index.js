import React, { memo, useEffect } from 'react'
// import { hydrate } from 'react-dom'
import {useDispatch,useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function KYORecommend(props) {

    //
    const {topBanners} = useSelector(state => ({
        topBanners : state.recommend.topBanners
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    return (
        <div>
            <h2>{topBanners.length}</h2>
        </div>
    )
}

export default memo(KYORecommend)

// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(KYORecommend))
