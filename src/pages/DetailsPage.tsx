import {useNavigate, useParams} from "react-router-dom"
import {CountryDetails} from "src/features/details/CountryDetails.tsx"

export const DetailsPage = () => {
    const {name} = useParams()
    const navigate = useNavigate()

    return (
        <div>
            <CountryDetails
                name={name}
                navigate={navigate}
            />
        </div>
    )
}

