import React from "react";
import "./style.css";

function KidsList({ children }) {
    return (
        <div className="col-md-9 my-4">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="../images/Bairon2.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <h4 className="card-title font-weight-bold">Bairon Dubon</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 15</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> April 23</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Choluteca, Honduras</h6>
                                    <h6 className="learn"><a href="#">Learn more about me</a></h6>
                                    <button type="button" class="btn btn-primary btn-sponsor">Sponsor Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <h6 className="learn"><a href="#">Learn more about me</a></h6>
                                    <button type="button" class="btn btn-primary btn-sponsor">Sponsor Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <h6 className="learn"><a href="#">Learn more about me</a></h6>
                                    <button type="button" class="btn btn-primary btn-sponsor">Sponsor Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <h6 className="learn"><a href="#">Learn more about me</a></h6>
                                    <button type="button" class="btn btn-primary btn-sponsor">Sponsor Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KidsList;

