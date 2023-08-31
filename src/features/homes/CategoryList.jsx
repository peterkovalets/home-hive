import { styled } from 'styled-components';
import CategoryItem from './CategoryItem';
import Heading from '../../ui/Heading';

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 4.8rem;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function CategoryList() {
  return (
    <Section>
      <Heading as="h3">Categories</Heading>
      <StyledCategories>
        <CategoryItem imgUrl="/rent.jpg" type="rent" />
        <CategoryItem imgUrl="/sale.jpg" type="sale" />
      </StyledCategories>
    </Section>
  );
}

export default CategoryList;
