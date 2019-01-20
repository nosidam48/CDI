import React from "react";
import "./style.css";

function FilterPublic({ children }) {
    return (
        <div className="col-md-3 my-4 p-0 border">
            <div className="label p-0 m-0">
                <h6 className="text-uppercase text-center py-2 label-text">Search options</h6>
            </div>
            <div className="px-2 pt-2">
                <h6 className="text-center text-uppercase font-weight-bold">Location</h6>
                <select className="form-control">
                    <option selected>No preference</option>
                    <optgroup label="El Salvador" />
                    <option>-- El Guayabo</option>
                    <option>-- La Libertad</option>
                    <option>-- Soyapango</option>
                    <optgroup label="Honduras" />
                    <option>-- Choluteca</option>
                    <option>-- Danli</option>
                    <option>-- La Ceiba</option>
                    <option>-- La Lima</option>
                    <option>-- Los Cruces</option>
                    <option>-- San Pedro Sula</option>
                    <optgroup label="Guatemala" />
                    <option>-- Guatemala City</option>
                    <optgroup label="Nicaragua" />
                    <option>-- Managua</option>
                </select>
            </div>
            <div className="px-2 pt-4">
                <h6 className="text-center text-uppercase font-weight-bold">Gender</h6>
                <select className="form-control">
                    <option selected>No preference</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="px-2 pt-4">
                <h6 className="text-center text-uppercase font-weight-bold">Age</h6>
            </div>
        </div>
    )   
}
        
export default FilterPublic