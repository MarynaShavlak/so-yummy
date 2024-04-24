import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { СhoseYourBreakfast } from 'components/СhoseYourBreakfast/СhoseYourBreakfast';
import { Background } from 'reusableComponents/Background/Background';
import { Main } from 'reusableComponents/Main/Main';
import { GoToTop } from 'reusableComponents/ScrollToTop/ScrollToTop';

const MainPage = () => {
  return (
    <Main>
      <Background noDots />
      <СhoseYourBreakfast />
      <PreviewCategories />
      <GoToTop />
    </Main>
  );
};

export default MainPage;
