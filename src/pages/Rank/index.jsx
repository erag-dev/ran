
import { useState } from "react"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import PageLayout from "components/PageLayout"
import { SectionIntro } from "components/Section"

import RankFilters from "./_ui/RankFilters"
import RankTable from "./_ui/RankTable"
import RankCards from "./_ui/RankCards"

import introBg from "assets/rank/bg-intro.png"

import "./_styles.sass"

const Rank = () => {

    const isMobile1000px = useScreenSizeChecker(1000);

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowDl, setIsShowDl] = useState(false);

    return(
        <PageLayout
            pageClass="ran-rank"
            pageName="Rank"
            isLogin={isShowLogin}
            isDl={isShowDl}
            isLoading={false}
            callbackIsLogin={setIsShowLogin}
            callbackIsDl={setIsShowDl}
        >

            <SectionIntro
                topText="Rankings"
                bg={introBg}
                extraClass="ran-rank__intro"
            >
                <div className="frame__desc">
                    <p>
                        Discover the elite players and guilds who are making waves in the game. Track your progress, compare stats, and find inspiration to climb the leaderboard. Whether you’re a seasoned pro or just starting out, our rankings highlight the best of the best in our vibrant gaming community!
                        <br/><br/>
                        <span className="italic">Data are updated every one hour.</span>
                    </p>
                </div>
            </SectionIntro>

            
            <RankFilters />


            {
                !isMobile1000px
                ? <RankTable />
                : <RankCards />
            }

        </PageLayout>
    )
}

export default Rank;