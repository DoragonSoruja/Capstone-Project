import salad from "../icons/greek_salad.jpg";
import bruchetta from "../icons/bruchetta.svg";
import dessert from "../icons/lemon dessert.jpg";

function Specials() {
    return (
    <main id="specials">
        <section>
            <h1>This weeks specials!</h1>
        </section>
        <section id="dishes">
            <article>
                <img src={salad} alt="A greek salad"/>
                <h3>Greek salad</h3>
                <p>The famous greek salad of <br/>crispy lettuce, peppers, olives <br/>and our Chicago style feta <br/>cheese, garnished with <br/>crunchy garlic and rosemary <br/>croutons</p>
            </article>
            <article>
                <img src={bruchetta} alt="A bruchetta"/>
                <h3>Bruchetta</h3>
                <p>Our Bruschetta is made from <br/>grilled bread that has been <br/>smeared with garlic and <br/>seasoned with salt and olive <br/>oil. </p>
            </article>
            <article>
                <img src={dessert} alt="A lemon cake"/>
                <h3>Lemon dessert</h3>
                <p>This comes straight from <br/>grandma’s recipe book, every <br/>last ingredient has been <br/>sourced and is as authentic <br/>as can be imagined.</p>
            </article>
        </section>
    </main>
    )
}

export default Specials