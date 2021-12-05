import React from 'react';
import india from '../images/india.png';
import heart from '../images/heart.png';
import {
    Link
    
  } from "react-router-dom";
import '../index.css';


function Home() {
    let myStyle={
        body: 'balck',
        backgroundColor : 'black',
        color: 'white',
        
        
    }
    return (
        <>
        <div className="black">
            <div className="container">
                <div className="head1">
                <h1 className=" head" style={myStyle}>Contact us to get started.</h1>
                </div>
                
                <input className="form-control mb-2 mt-5" style={myStyle} list="datalistOptions" id="exampleDataList" placeholder="First Name" />
                <input className="form-control mb-2" style={myStyle} list="datalistOptions" id="exampleDataList" placeholder="Last Name" />
                <input className="form-control mb-4 mt-4" style={myStyle} list="datalistOptions" id="exampleDataList" placeholder="Institute Name" />
                <input className="form-control mb-2 " style={myStyle} list="datalistOptions" id="exampleDataList" placeholder="Email Address" />
                <input className="form-control mb-2 " style={myStyle} list="datalistOptions" id="exampleDataList" placeholder="IPhone Number" />
                <div className="centre">  <button type="button" className="btn btn-primary mt-3 mb-5">Contact Us</button>
                </div>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>    WHY LOOSELEAF? </strong>
                        </button>
                    </h2>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>    PRICING </strong>
                        </button>
                    </h2>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong> RESOURCES</strong>
                        </button>
                    </h2>

                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong> OUR OFFICES</strong>
                        </button>
                    </h2>

                </div>
            </div>
            <br /><br />
            <div className="foot">
                <h5>CONTACT NUMBER</h5>
                <p className="para">+91-9310823646</p>
                <br></br>
                <p className="mb-0 para">Illustration by StorySet</p>
                <p className="mb-0 para">@2021 Looseleaf, LLP, ALL Rights Reserved</p>
                <br></br>

            </div>


            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-whatsapp" style={myStyle} href="http://whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                                <a className="btn btn-social-icon btn-instagram" style={myStyle} href="http://instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-social-icon btn-twitter" style={myStyle} href="http://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-facebook" style={myStyle} href="http://www.facebook.com/profile.php?id="><i className="fab fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" style={myStyle} href="http://www.linkedin.com/in/"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
<div className="India">
                        <p>Made In India&nbsp;<img src={india} alt="not found"/>&nbsp;with&nbsp;<img src={heart} alt=" not found"/>.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bord"></div>
            <div className="row ">
            <div className="col col-3 offset-1">
            <Link to='/' style={{ backgroundColor: "black", color: "white" }}><b>Privacy</b></Link>
            </div>
            <div className="col col-3 offset-1">
            <Link to='/' style={{ backgroundColor: "black", color: "white" }}><b>Terms</b></Link>
            </div>
            <div className="col col-4">
            <Link to='contact' style={{ backgroundColor: "black", color: "white" }}><b>Contact Us</b></Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home

