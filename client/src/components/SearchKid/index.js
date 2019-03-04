import React from "react";
import { Form } from "reactstrap";
import { InputField, SearchType, FormBtn,} from "../Form";

function SearchKid(props) {
    return (
        <div>
            <Form inline>
                <InputField
                    value={props.termValue}
                    onChange={props.onChange}
                    name={props.termName}
                />
                <SearchType
                    value={props.typeValue}
                    onChange={props.onChange}
                    name={props.typeName}
                    id={props.typeId}
                />
                <FormBtn
                    id={props.submitId}
                    onClick={props.onClick}
                    btnText="Search"
                    type="submit"
                />
            </Form>
        </div>
    )
}
export default SearchKid;