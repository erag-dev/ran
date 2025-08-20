
import { SectionFilters } from "components/Section"
import { FormSelectField as Select } from "components/Form"

import {
    SELECTION_CATEGORY,
    SORT
} from "../_const"

const NewsFilters = () => {

    return(
        <SectionFilters extraClass="ran-news__filters">
            
            <Field
                label="Category"
                selection={SELECTION_CATEGORY}
            />

            <Field
                label="Sort"
                selection={SORT}
            />

        </SectionFilters>
    )
}

export default NewsFilters;

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