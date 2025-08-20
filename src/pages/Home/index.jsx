
import { useState } from "react"

import PageLayout from "components/PageLayout"
import HomeKv from "./_ui/HomeKv"
import HomeBoard from "./_ui/HomeBoard"
import HomeVids from "./_ui/HomeVids"
import HomeSW from "./_ui/HomeSW"
import HomeCW from "./_ui/HomeCW"
import HomeBH from "./_ui/HomeBH"

import "./_styles.sass"

const Home = () => {

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowDl, setIsShowDl] = useState(false);

    return(
        <PageLayout
            pageClass="ran-home"
            pageName="Home"
            isLogin={isShowLogin}
            isDl={isShowDl}
            isLoading={false}
            callbackIsLogin={setIsShowLogin}
            callbackIsDl={setIsShowDl}
        >

            <HomeKv callbackDl={setIsShowDl} />

            <HomeBoard 
                callbackDl={setIsShowDl}
                callbackLogin={setIsShowLogin}
            />

            <HomeVids />

            <HomeSW />

            <HomeCW />

            <HomeBH />

        </PageLayout>
    )
}

export default Home;