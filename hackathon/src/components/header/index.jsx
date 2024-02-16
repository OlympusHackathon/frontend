import React from 'react';

export const Header = ()=>{
    return (
        <header style={{backgroundColor: '#99cfe0', color:'white', padding:'20px', display: 'flex',
        justifyContent:'space-between',alignItems:'center'}}>
        <div>
            <h1>Enter Header Title Here</h1>
        </div>
        <div style={{
            display:"flex",
            gap:'30px',
            height:"100px",
            alignItems:"center",
            justifyContent:"center"
        }}>
        <a href="#">Dashboard</a>
        <a href="#">Courses</a>
        <a href="#">Timetable</a>
        </div>
        </header>
    );
};
export default Header;

