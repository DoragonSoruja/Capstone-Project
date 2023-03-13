import food from "../icons/restauranfood.jpg"

function Main() {
    return (
    <main id="home">
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned <br/>Mediterranean resturant, <br/>focused on traditional <br/>recipes served with a modern <br/>twist.</p>
            <button><b>Reserve a table</b></button>
        </section>
        <section id="buffer">

        </section>
        <section>
            <img src={food} alt="A chief holding our food" />
        </section>
    </main>
    )
}

export default Main