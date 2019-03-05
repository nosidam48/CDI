import React from "react";
import { Form } from "reactstrap";
import { InputField, UserSearchType, FormBtn,} from "../Form";

function SearchUser(props) {
    return (
        <div>
            <Form inline>
                <InputField
                    value={props.termValue}
                    onChange={props.onChange}
                    name={props.termName}
                />
                <UserSearchType
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
export default SearchUser;