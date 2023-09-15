import styled from 'styled-components'
import { Container } from '..'
import { ThemeSwitcher } from 'src/features/theme/ThemeSwitcher'
import {useCleanup} from "src/features/controls/use-cleanup.ts"

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`

const Title = styled.h3`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
	cursor: pointer;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
`

export const Header = () => {
	const cleanUp = useCleanup()

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>Where is the world?</Title>
					<ThemeSwitcher />
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
