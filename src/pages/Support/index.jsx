
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionIntro } from "components/Section"

import SupportFeaturedText from "./_ui/SupportFeaturedText"
import SupportContents from "./_ui/SupportContents"

import introBg from "assets/support/bg-intro.png"

import "./_styles.sass"

const Support = () => {

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowDl, setIsShowDl] = useState(false);

    return(
        <PageLayout
            pageClass="ran-support"
            pageName="Support"
            isLogin={isShowLogin}
            isDl={isShowDl}
            isLoading={false}
            callbackIsLogin={setIsShowLogin}
            callbackIsDl={setIsShowDl}
        >

            <SectionIntro
                topText="Support"
                bg={introBg}
                extraClass="ran-support__intro"
            >
                <div className="frame__desc">
                    <p>
                        We’re here to assist you with any questions or issues you may have while playing. Whether you need help with account management, technical difficulties, or game mechanics, our dedicated team is ready to provide the guidance you need.
                        <br/><br/>
                        <span className="italic">Your gaming experience is our priority!</span>
                    </p>
                </div>
            </SectionIntro>

            
            <SupportFeaturedText />

            <SupportContents />

        </PageLayout>
    )
}

export default Support;