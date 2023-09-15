import styled from 'styled-components'
import {Search} from './Search'
import {CustomSelect} from './CustomSelect'
import {useRegion} from './use-region'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

type OptionsType = {
    Africa: {
        value: string
        label: string
    }
    America: {
        value: string
        label: string
    }
    Asia: {
        value: string
        label: string
    }
    Europe: {
        value: string
        label: string
    }
    Oceania: {
        value: string
        label: string
    }
}

const optionsMap: OptionsType = {
    Africa: {value: 'Africa', label: 'Africa'},
    America: {value: 'America', label: 'America'},
    Asia: {value: 'Asia', label: 'Asia'},
    Europe: {value: 'Europe', label: 'Europe'},
    Oceania: {value: 'Oceania', label: 'Oceania'},
}

const options = Object.values(optionsMap)

export const Controls = () => {
    const [region, setRegion] = useRegion()

    return (
        <Wrapper>
            <Search/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region ? optionsMap[region] : ''}
                onChange={setRegion}
            />
        </Wrapper>
    )
}
