import React, { memo } from 'react'
import KYOTopBanner from './c-cpns/top-banner'
import KYOHotRecommend from './c-cpns/hot-recommend'
import KYORecommendRanking from './c-cpns/recommend-ranking'
import KYONewAlbum from './c-cpns/new-album'
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'
function KYORecommend(props) {
    return (
        <RecommendWrapper>
            <KYOTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <KYOHotRecommend />
                    <KYONewAlbum />
                    <KYORecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
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
