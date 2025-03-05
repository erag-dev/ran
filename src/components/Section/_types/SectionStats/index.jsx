
import { SectionWithEdges } from "components/Section"

import { STATS } from "./_const"

import "./_styles.sass"

const SectionStats = () => {
    return (
        <SectionWithEdges extraClass="snuggle-stats">
            
            {
                STATS?.map((item, index) => {
                    return <div
                        key={index}
                        className="snuggle-stat"
                    >
                        <p className="snuggle-stat__value">{ item?.count }</p>
                        <p className="snuggle-stat__label">{ item?.name }</p>
                    </div>
                })
            }
            
        </SectionWithEdges>
    )
}

export default SectionStats;