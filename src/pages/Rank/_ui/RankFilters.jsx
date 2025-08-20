
import { SectionFilters } from "components/Section"
import { FormSelectField as Select } from "components/Form"

import {
    SELECTION_CATEGORY,
    SELECTION_SCHOOL,
    SELECTION_CLASS,
} from "../_const"

const RankFilters = () => {

    return(
        <SectionFilters extraClass="ran-rank__filters">
            
            <Field
                label="Category"
                selection={SELECTION_CATEGORY}
            />

            <Field
                label="School"
                selection={SELECTION_SCHOOL}
            />

            <Field
                label="Class"
                selection={SELECTION_CLASS}
            />

        </SectionFilters>
    )
}

export default RankFilters;

const Field = ({
    label,
    selection,
}) => {
    return (
        <div className="ran-filters__field">
            <p className="ran-filters__label fs--16px">{ label }:</p>
            <Select 
                options={selection}
            />
        </div>
    )
}