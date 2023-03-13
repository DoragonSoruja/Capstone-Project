import React, {useState} from "react"

function BookingForm() {
    const currentDate = new Date()
    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleGuestChange = (e) => {
        setGuests(e.target.value);
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Time is set to ${time}.\nAt ${date} \nThe amount of guests is ${guests} \nThe occasion is a(n) ${occasion}`)
        setDate(currentDate)
        setGuests(1)
        setTime("17:00")
        setOccasion("Birthday")
    }

    return (
        <section>
        <h1>Book Now</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={handleTimeChange} >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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