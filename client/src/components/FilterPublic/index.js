import React from "react";
import "./style.css";

function FilterPublic({ children }) {
    return (
        <div className="col-md-2 my-4 p-0 border">
            <div className="label p-0 m-0">
                <h6 className="text-uppercase text-center py-2 label-text">Search options</h6>
            </div>
            <div className="px-2 pt-2">
                <h6 className="text-uppercase font-weight-bold pl-1">Location</h6>
                <select className="form-control form-control-sm">
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
                <h6 className="text-uppercase pl-1 font-weight-bold">Gender</h6>
                <select className="form-control form-control-sm">
                    <option selected>No preference</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <button type="button" class="btn btn-primary btn-sm btn-search ml-2 mt-3 mb-2">Search</button>            
        </div>
    )   
}
        
export default FilterPublic