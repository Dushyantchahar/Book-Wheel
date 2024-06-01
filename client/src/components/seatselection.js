import React, { useState } from 'react'
// import { FaAngleDoubleDown } from "react-icons/fa";

import './seatselection.css'
import { useNavigate } from 'react-router-dom';
export default function SeatSelection() {
const navigate=useNavigate();
    const [name, setName] = useState([])
    // const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    // const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        // if (reservedSeat.includes(newSeat)) {
        //     e. = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        // }
         else {
            setSeatnumber([...seatNumber, newSeat])
            // setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName)
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        // setArrowDown(true)
    
        let string1 = JSON.stringify(seatNumber)
        let string2 = JSON.stringify(name)
        localStorage.setItem("name", name)
        localStorage.setItem("seat", seatNumber)
        
        localStorage.setItem("reservedSeats", string1)
        localStorage.setItem("nameData",string2)
        // console.log(name)
        // console.log(gender)
        navigate('/paymenttab')
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>
            )

        })
    }
    return (
        <div className="ss">
            <div className="row seatback">
                <div className="column1">
                    <div className='heading'>
                    <p><h5>Select Seat</h5></p>
                    </div>
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="1D" id="1D" />
                                            <label htmlFor="1D">1D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="1E" id="1E" />
                                            <label htmlFor="1E">1E</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="2D" id="2D" />
                                            <label htmlFor="2D">2D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="2E" id="2E" />
                                            <label htmlFor="2E">2E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="3D" id="3D" />
                                            <label htmlFor="3D">3D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="3E" id="3E" />
                                            <label htmlFor="3E">3E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="4D" id="4D" />
                                            <label htmlFor="4D">4D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="4E" id="4E" />
                                            <label htmlFor="4E">4E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="5C" id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="5D" id="5D" />
                                            <label htmlFor="5D">5D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="5E" id="5E" />
                                            <label htmlFor="5E">5E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6C" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="6D" id="6D" />
                                            <label htmlFor="6D">6D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="6E" id="6E" />
                                            <label htmlFor="6E">6E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="7C" id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="7D" id="7D" />
                                            <label htmlFor="7D">7D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="7E" id="7E" />
                                            <label htmlFor="7E">7E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8C" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="8D" id="8D" />
                                            <label htmlFor="8D">8D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="8E" id="8E" />
                                            <label htmlFor="8E">8E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="9A" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="9B" id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="9C" id="9C" />
                                            <label htmlFor="9C">9C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="9D" id="9D" />
                                            <label htmlFor="9D">9D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="9E" id="9E" />
                                            <label htmlFor="9E">9E</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="10A" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10B" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10C" id="10C" />
                                            <label htmlFor="10C">10C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="10D" id="10D" />
                                            <label htmlFor="10D">10D</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="10E" id="10E" />
                                            <label htmlFor="10E">10E</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                        </div>
                        {/* <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            <FaAngleDoubleDown />
                        </div> */}
                    </div>
                </div>
            </div>

        </div>

    )
}