import React from 'react';
import { Link } from "react-router-dom"


const ProfileMenu = () => {
    
    // console.log(document.getElementById('menuBarr').children)

    const handleAddClass = (e) => {
        // console.log(e.target)
        // e.target.classList.add('active')
        // e.target.style.color = 'blue'
    }
    // let data = document.getElementById('menuBarr').children
    // data.forEach(element => {
    //     console.log(element)
    // });

    return (

        <div className="col-md-4 p-0 mt-3 col-sm-5 four wide column">
        <div id="menuBarr" className="ui vertical fluid tabular menu">
            <Link onClick={(e)=>handleAddClass(e)} to="/User" className="active item">
                Profilim
            </Link >
            <Link onClick={(e)=>handleAddClass(e)} to="/Announcement" className="item">
                Elan yerlesdir
            </Link >
            <Link onClick={(e)=>handleAddClass(e)} to="/Cv" className="item">
                CV yerlesdir
            </Link >
            <Link onClick={(e)=>handleAddClass(e)} to="/Holding" className="item">
                Sirket Elave et
            </Link >
            <Link onClick={(e)=>handleAddClass(e)} to="/Selects" className="item">
                Secilmisler
            </Link >
            <Link onClick={(e)=>handleAddClass(e)} to="/Packages" className="item">
                Paketler
            </Link >
        </div>
    </div>
    );
};

export default ProfileMenu;