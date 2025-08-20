
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionIntro } from "components/Section"

import TopupFeaturedText from "./_ui/TopupFeaturedText"
import TopupMain from "./_ui/TopupMain"
import TopupTerms from "./_ui/TopupTerms"

import introBg from "assets/payment/bg-intro.png"

import "./_styles.sass"

const Topup = () => {

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowDl, setIsShowDl] = useState(false);

    return(
        <PageLayout
            pageClass="ran-topup"
            pageName="Top-up"
            isLogin={isShowLogin}
            isDl={isShowDl}
            isLoading={false}
            callbackIsLogin={setIsShowLogin}
            callbackIsDl={setIsShowDl}
        >

            <SectionIntro
                topText="Top-up E-Points"
                subtitle="1 PHP = 1 E-Point"
                bg={introBg}
                extraClass="ran-topup__intro"
            >
                <div className="frame__desc">
                    <p>
                        Please follow the instructions carefully to ensure a smooth and efficient top-up process. Our support team is available to assist you during designated hours. If you encounter any issues outside of these times, rest assured that your requests will be addressed as soon as possible.
                    </p>
                </div>
            </SectionIntro>

            
            <TopupFeaturedText />

            <TopupMain />

            <TopupTerms />

        </PageLayout>
    )
}

export default Topup;