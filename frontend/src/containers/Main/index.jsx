import { MainTheme as Main } from '../../styles/globalThemeStyles'
import { OverviewContainer, NavbarContainer, ProjectsContainer, ExperiencesContainer, TechstackContainer, BrandsContainer, ContactContainer } from '../../containers'

const MainContainer = () => (
  <Main>
    <OverviewContainer/>
    <NavbarContainer>
      <ProjectsContainer/>
      <ExperiencesContainer/>
      <TechstackContainer/>
      <BrandsContainer/>
      <ContactContainer/>
    </NavbarContainer>
  </Main>
)

MainContainer.propTypes = {}

export default MainContainer