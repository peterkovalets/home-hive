import { styled } from 'styled-components';
import CategoryItem from './CategoryItem';

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 4.8rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function Categories() {
  return (
    <Section>
      <h3>Categories</h3>
      <StyledCategories>
        <CategoryItem imgUrl="rent.jpg" type="rent" />
        <CategoryItem imgUrl="sale.jpg" type="sale" />
      </StyledCategories>
    </Section>
  );
}

export default Categories;
