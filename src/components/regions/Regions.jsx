import './Regions.css'

const Regions = ({ countries }) => {

    return (
        <>
            <div className="container">
                <section id="regions">
                    <h2>Countries by Region</h2>

                    <ul>
                        <li>Africa — {countries.filter(c => c?.region === 'Africa').length} Countries</li>
                        <li>Europe — {countries.filter(c => c?.region === 'Europe').length} Countries</li>
                        <li>Asia — {countries.filter(c => c?.region === 'Asia').length} Countries</li>
                        <li>Americas — {countries.filter(c => c?.region === 'Americas').length} Countries</li>
                        <li>Oceania — {countries.filter(c => c?.region === 'Oceania').length} Countries</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Regions