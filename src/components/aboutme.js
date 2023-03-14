import staffA from "../icons/Mario and Adrian A.jpg"
import staffB from "../icons/Mario and Adrian b.jpg"

function AboutMe() {
    return (
    <main id="aboutme">
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned <br/>Mediterranean resturant, <br/>focused on traditional <br/>recipes served with a modern <br/>twist.</p>
        </section>
        <section>
            <img id="image1" src={staffA} alt="Our staff" />
            <img id="image2" src={staffB} alt="Our staff again"/>
        </section>
    </main>
    )
}

export default AboutMe