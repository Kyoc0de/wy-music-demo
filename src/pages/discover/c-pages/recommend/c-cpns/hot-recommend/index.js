import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import KYOThemeHeaderRCM from '@/components/theme-header-rcm'
import {HOT_RECOMMEND_LIMIT} from '@/common/contants.js'
import {HotRecommendWrapper} from './style'
import {getHotRecommendAction} from "../../store/actionCreators";
import KYOSongsCover from '@/components/songs-cover'

export default memo(function KYOHotRecommend() {

    //state

    //reduc hooks
    const {hotRecommends} = useSelector(state=>({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }), shallowEqual)
    const dispatch = useDispatch()

    //other hooks
    useEffect(()=>{
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <KYOThemeHeaderRCM title="热门推荐" keywords={['话语','流行','摇滚']}/>
            <div className="recommend-list">
                {
hotRecommends.map((item,index)=>{
    return <KYOSongsCover key={item.id} info={item} />
})
                }
            </div>
        </HotRecommendWrapper>
    )
})
