import React, {useState, useEffect} from "react"
import { fetchAPI } from "./random";
import ConfirmedBooking from "./ConfirmedBooking";

function BookingForm() {

    const currentDate = new Date()
    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [initializeTimes, updateTimes] = useState(fetchAPI(currentDate))
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
        updateTimes(fetchAPI(new Date(date)))
    }, [date])

    const handleDateChange = (e) => { setDate(e.target.value); }

    const handleTimeChange = (e) => { setTime(e.target.value); }

    const handleGuestChange = (e) => { setGuests(e.target.value); }

    const handleOccasionChange = (e) => { setOccasion(e.target.value); }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(currentDate)
        setGuests(1)
        setTime("17:00")
        setOccasion("Birthday")
        setConfirmed(true)
    }

    return (
        <section id="form">
        <h1>Book Now</h1>
        {confirmed && <ConfirmedBooking />}
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={handleTimeChange} >
                {initializeTimes.map((time) => (
                    <option>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
        </section>
    )
}

export default BookingForm