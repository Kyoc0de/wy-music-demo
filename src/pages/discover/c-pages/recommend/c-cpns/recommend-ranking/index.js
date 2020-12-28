import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import KYOThemeHeaderRCM from '@/components/theme-header-rcm';
import KYOTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';

export default memo(function KYORecomendRanking() {
    // redux hooks
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch]);

    return (
        <RankingWrapper>
            <KYOThemeHeaderRCM title="榜单" />
            <div className="tops">
                <KYOTopRanking info={upRanking}/>
                <KYOTopRanking info={newRanking}/>
                <KYOTopRanking info={originRanking}/>
            </div>
        </RankingWrapper>
    )
})
