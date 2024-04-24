import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/common/Container.styled';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import { FlexContainer, MainTitle, Section } from './AddRecipePage.styled';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { useMediaQuery } from 'react-responsive';
import { Subtitle } from 'components/AddRecipeForm/AddRecipeForm.styled';
import { useScrollToTop } from 'hooks/useScrollToTop';

export default function AddRecipePage() {
  useScrollToTop();
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <Section>
      <Container>
        <MainTitle>Add recipe</MainTitle>
        <FlexContainer>
          <AddRecipeForm />
          <div>
            {isDesktop && (
              <div>
                <Subtitle>Follow us</Subtitle>
                <SocialMedia variant="greenToBlack" mt="40px" />
              </div>
            )}
            <PopularRecipes />
          </div>
        </FlexContainer>
      </Container>
    </Section>
  );
}
