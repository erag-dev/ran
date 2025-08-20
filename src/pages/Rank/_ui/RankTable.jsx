
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import Pagination from "components/Pagination"

import bgLightning from "assets/lightning.png"

import { RANKINGS } from "../_const"

const RankTable = () => {

    return(
        <SectionNormal 
            extraClass="ran-rank__tableholder"
            bg={bgLightning}
        >

            <table className="ran-rank__table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Class</th>
                        <th>Name</th>
                        <th>School</th>
                        <th>PVP Kills</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        RANKINGS?.map((item, index) => {
                            return <>
                                <tr key={`space-${index}`} className="space" colSpan="6"></tr>
                                <tr key={`row-${index}`}>
                                    <td>{index + 1}</td>
                                    <td><AppImg src={item?.class} extraClass="ran-rank__table-class" /></td>
                                    <td>{item?.name}</td>
                                    <td><AppImg src={item?.school} extraClass="ran-rank__table-school" /></td>
                                    <td>{item?.kills}</td>
                                    <td>{item?.level}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
          
            <Pagination />

        </SectionNormal>
    )
}

export default RankTable;