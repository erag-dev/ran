
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionIntro } from "components/Section"

import NewsFilters from "./_ui/NewsFilters"
import NewsContent from "./_ui/NewsContent"

import introBg from "assets/news/bg-intro.png"

import "./_styles.sass"

const News = () => {

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowDl, setIsShowDl] = useState(false);

    return(
        <PageLayout
            pageClass="ran-news"
            pageName="News"
            isLogin={isShowLogin}
            isDl={isShowDl}
            isLoading={false}
            callbackIsLogin={setIsShowLogin}
            callbackIsDl={setIsShowDl}
        >

            <SectionIntro
                topText="News"
                bg={introBg}
                extraClass="ran-news__intro"
            >
                <div className="frame__desc">
                    <p>
                        Stay updated with the latest happenings in the world of Ran Online! Our news page brings you the newest game updates, events, and community highlights. From patch notes to upcoming tournaments, you'll find everything you need to enhance your gaming experience.
                        <br/><br/>
                        Join us as we explore the vibrant universe of Ran Online and celebrate our dedicated community!
                    </p>
                </div>
            </SectionIntro>

            
            <NewsFilters />

            <NewsContent />

        </PageLayout>
    )
}

export default News;