import React from "react";
import { Form } from "reactstrap";
import { InputField, SearchType, FormBtn,} from "../Form";
import "./style.css";

function SearchKid(props) {
    return (
        <div>
            <Form inline>
                <SearchType
                    value={props.typeValue}
                    onChange={props.onChange}
                    name={props.typeName}
                    id={props.typeId}
                />
                <InputField
                    value={props.termValue}
                    onChange={props.onChange}
                    name={props.termName}
                    className="mr-2"
                />
                <FormBtn
                    id={props.submitId}
                    className="search-btn"
                    onClick={props.onClick}
                    btnText="Search"
                    type="submit"
                />
            </Form>
        </div>
    )
}
export default SearchKid;