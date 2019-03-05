import React from "react";
import { Form, Label } from "reactstrap";
import { InputField, 
    GenderField, 
    GradeField, 
    LocationField, 
    UploadPhoto, 
    FormBtn 
    } from "../Form";

function AddKidForm(props) {
    return (
        <div>
            <h5 className="border-bottom">Add a child to the database</h5>
            <Form className="mt-4">
                <Label>First Names</Label>
                <InputField
                    onChange={props.onChangeInput}
                    value={props.firstNameValue}
                    name={props.firstName}
                    placeholder="First names"
                />
                <Label>Last Names</Label>
                <InputField
                    onChange={props.onChangeInput}
                    value={props.lastNameValue}
                    name={props.lastName}
                    placeholder="Last name"
                />
                <Label>Gender</Label>
                <GenderField
                    onChange={props.onChangeInput}
                    value={props.genderValue}
                    name={props.genderName}
                />
                <Label>Birthdate</Label>
                <InputField
                    type="date"
                    onChange={props.onChangeInput}
                    value={props.birthdateValue}
                    name={props.birthdateName}
                />
                <Label>Grade in School</Label>
                <GradeField
                    onChange={props.onChangeInput}
                    value={props.gradeValue}
                    name={props.gradeName}
                />
                <Label>Location</Label>
                <LocationField
                    onChange={props.onChangeInput}
                    value={props.locationValue}
                    name={props.locationName}
                />
                <Label>Bio</Label>
                <InputField
                    type="textarea"
                    onChange={props.onChangeInput}
                    value={props.bioValue}
                    name={props.bioName}
                    placeholder="Description of the child"
                />
                <Label>Profile Photo</Label>
                <UploadPhoto
                    onChange={props.onChangeFile}
                    name={props.photoName}
                    id={props.photoId}
                />
                {/* Set Submit Button to disabled until all fields are filled out */}
                <FormBtn
                    disabled={props.disabled}
                    onClick={props.onClickSubmit}
                    btnText="Submit"
                    type="submit"
                />{' '}
                <FormBtn
                    onClick={props.onClickDiscard}
                    btnText="Discard"
                />
            </Form>
        </div>
    )
}
export default AddKidForm;