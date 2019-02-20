import React from "react";
import { Form } from "reactstrap";
import { InputField, UserSearchType, SubmitBtn,} from "../Form";

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
                <SubmitBtn
                    id={props.submitId}
                    onClick={props.onClick}
                />
            </Form>
        </div>
    )
}
export default SearchUser;