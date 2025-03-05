
import { useState } from "react"

import PageLayout from "components/PageLayout"
import HomeKv from "./_ui/HomeKv"
import HomeSteps from "./_ui/HomeSteps"
import HomePets from "./_ui/HomePets"
import HomeHelp from "./_ui/HomeHelp"

import "./_styles.sass"

const Home = () => {

    const [isShowAdopt, setIsShowAdopt] = useState(false);

    return(
        <PageLayout
            pageClass="snuggle-home"
            pageName="Home"
            isAdopt={isShowAdopt}
            isLoading={false}
            callbackIsAdopt={setIsShowAdopt}
        >

            <HomeKv callbackAdopt={setIsShowAdopt} />

            <HomeSteps />

            <HomePets />

            <HomeHelp />

        </PageLayout>
    )
}

export default Home;