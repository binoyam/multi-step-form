import { Link } from "react-router-dom";

function Countries(props) {

  return (

    <>
    

      <div className="countries">
        {props.countries.map((country) => (
          <Link to={`/country/${country.name.common}`}>
          <article key={country.name.official}>
            <img 
            src={country.flags.png} 
            alt={country.name.common} 
            title={country.name.common}
            />
            <div className="country-info-div">
              <h3 className="name">{country.name.official}</h3>
              <p className="population">
                <span className="pre-text">Population:</span>
                {new Intl.NumberFormat().format(country.population)}
              </p>

              <p className="region">
                <span className="pre-text">Region:</span> {country.region}
              </p>
              <p className="capital">
                <span className="pre-text">Capital:</span> {country.capital}
              </p>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Countries;
