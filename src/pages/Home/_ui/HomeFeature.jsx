
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"

const HomeFeature = ({
    extraClass,
    title,
    collection,
    hasOverlay,
}) => {

    return(
        <SectionNormal 
            extraClass={`ran-home__feature feature--${extraClass}`}
            bg={null}
        >

            <h2 className="frame__header fs--20px" dangerouslySetInnerHTML={{ __html: title }}></h2>
            
            <div className="ran-home__feature-gallery">
                {
                    collection ? (
                        collection?.map((item, index) => {
                            return <ImgBox
                                key={index}
                                src={item}
                                hasOverlay={hasOverlay}
                            />
                        })
                    ): null
                }
            </div>
            


        </SectionNormal>
    )
}

export default HomeFeature;

const ImgBox = ({
    src,
    hasOverlay,
}) => {
    return(
        <div className="ran-home__feature-img">
            {
                hasOverlay ? (
                    <>
                        <AppImg src={src?.main} />

                        <div className="ran-home__feature-img__overlay">
                            <AppImg src={src?.overlay} />
                        </div>
                    </>  

                ): (
                    <AppImg src={src} />
                )
            }
        </div>
    )
}