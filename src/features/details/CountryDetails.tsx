import {NavigateFunction} from "react-router-dom"
import {useDetails} from "src/features/details/use-details.ts"
import {Info} from "src/features/details/Info.tsx"

interface CountryDetailsProps {
    name?: string
    navigate: NavigateFunction
}

export const CountryDetails = ({name, navigate}: CountryDetailsProps) => {
    const {currentCountry, error, status} = useDetails(name)

    return (
        <div>
            {error && (
                <h3>Can not fetch data</h3>
            )}

            {status === 'loading' && (
                <h3>Loading...</h3>
            )}
            {currentCountry && (
                <Info
                    push={navigate}
                    {...currentCountry}
                />
            )}
        </div>
    )
}

