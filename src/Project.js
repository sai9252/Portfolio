import React from "react";
import './Project.css'

function Logo() {
    <style></style>
   return (
     <div className="Logo">
        <h1 className="logo">Logo</h1>
        <div className="head">
            <nav className="nav">
                <h2 className="Beranda">Beranda</h2>
                <h2 className="Portfolio">Portfolio</h2>
                <h2 className="Blog">Blog</h2>
                <h2 className="ContactUS">Contact US</h2>
            </nav>
        </div>
        <h1><button className="hire">Hire me</button></h1>
        </div>
   )
 }
 
 function Myself() {
   return (
     <div className="Myself">
        <h3>Welcome to my world</h3>
        <div className="name">
            <h1 className="hi">Hi, I'm</h1>
            <h1 className="nama">Sai</h1>
            </div>
            <div>
            <h1 className="b">a professional</h1>
            <h1 className="b">B-tech.</h1>
            <h1>
            Random Phrases at here. Lorem ipsum dolor sit amet, consectetur</h1> 
            <h1>adipiscing elit. Donec ut ornare purus, eu pulvinar justo. </h1>
        </div>

     </div>
   )
 }
 
 


 function Project()
 {
    return(
        <div>
            <Logo/>
            <Myself/>
        </div>
    )
 }
 export default Project;