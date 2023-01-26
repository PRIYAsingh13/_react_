import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "priya"
const lname = "singh"
const currDate = new Date().getDate();
const currDate1 = new Date().toLocaleDateString()
const currTime = new Date().toLocaleTimeString()
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI3k3GEVnCEXd54ISam3Ix7uwWZtIj1nHg&usqp=CAU"
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI3k3GEVnCEXd54ISam3Ix7uwWZtIj1nHg&usqp=CAU"
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI3k3GEVnCEXd54ISam3Ix7uwWZtIj1nHg&usqp=CAU"
const links = "https://www.google.co.in/"



ReactDOM.render(
  <>
    <h1>priya</h1>
    <p>List of 5 series</p>
    <ol>
      <li>Dark</li>
      <li>two</li>
      <li>three</li>
      <li>four</li>
      <li>five</li>

    </ol>
    <h1 className='self'> {name} is the best</h1>
    <h1 className='self'>{`my name is ${name} ${lname}`}</h1>
    <p>Current Date is = {currDate}</p>
    <p>Current Date is = {currDate1}</p>
    <p>Current Time is = {currTime}</p>

    <h1 contentEditable="true">i am web developer</h1>

    <img className='selff' src={img1} alt="flag" />
    <img className='selff' src={img2} alt="flag" />
    <img className='selff' src={img3} alt="flag" />

    <a href={links} target="_google" >go to google</a>




  </>,
  document.getElementById('root')
);