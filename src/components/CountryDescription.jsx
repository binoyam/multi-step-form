/* eslint-disable react/prop-types */
import BackIcon from '../assets/arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
function CountryDescription({ countries }) {
  const { countryName } = useParams();

  // Find the selected country object based on the countryName parameter
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );

  return (
    <section className="country_description">
      <button className="back_btn">
        <img src={BackIcon} alt="back" />
        <Link to="/">Back</Link>
      </button>
      <div className="country_info_container">
        <div className="country_flag">
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name}'s flag`}
          />
        </div>
        <div className="country_info_details">
          <h1 className="country_title">{selectedCountry.name}</h1>
          <div className="detail_cols">
            <div className="col">
              <p>
                <span className="pre_text">Native Name: </span>
                {selectedCountry.nativeName}
              </p>
              <p>
                <span className="pre_text">Population: </span>
                {selectedCountry.population.toLocaleString()}
              </p>
              <p>
                <span className="pre_text">Region: </span>
                {selectedCountry.region}
              </p>
              <p>
                <span className="pre_text">Sub Region: </span>
                {selectedCountry.subregion}
              </p>
              <p>
                <span className="pre_text">Capital: </span>
                {selectedCountry.capital}
              </p>
            </div>
            <div className="col">
              <p>
                <span className="pre_text">Top Level Domain: </span>
                {selectedCountry.topLevelDomain[0]}
              </p>
              <div className="flex">
                <span className="pre_text">Currencies: </span>
                {selectedCountry.currencies.map((currency) => (
                  <div key={currency.code}>{currency.name}</div>
                ))}
              </div>
              <div className="flex">
                <span className="pre_text">Languages: </span>
                {selectedCountry.languages.map((language) => (
                  <div key={language.iso639_1}>{language.name}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="borders_wrapper flex">
            <p>Border Countries: </p>
            {selectedCountry.borders?.map((border, index) => (
              <div className="border_country" key={index}>
                {border}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDescription;
