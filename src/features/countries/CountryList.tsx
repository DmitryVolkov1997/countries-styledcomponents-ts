import {useCountries} from "src/features/countries/use-countries.ts"
import {List} from "src/components/List/List.tsx"
import {CountryInfo} from "src/types"
import {Card} from "src/components/Card/Card.tsx"
import {useNavigate} from "react-router-dom"

const CountryList = () => {
    const [countries, {status, error}] = useCountries()
    const navigate = useNavigate()

    return (
        <div>
            {error && (
                <h3>Can not fetch data</h3>
            )}

            {status === 'loading' && (
                <h3>Loading...</h3>
            )}

            <List>
                {countries.map((c) => {
                    const countryInfo: CountryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    }

                    return (
                        <Card
                            key={c.name}
                            onClick={() => void navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    )
                })}
            </List>
        </div>
    )
}

export default CountryList
