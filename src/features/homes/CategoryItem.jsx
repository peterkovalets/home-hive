import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledCategoryItem = styled(Link)`
  color: inherit;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

function CategoryItem({ imgUrl, type }) {
  return (
    <StyledCategoryItem to={`/categories/${type}`}>
      <Image src={imgUrl} alt={type} />
      <p>Places for {type}</p>
    </StyledCategoryItem>
  );
}

export default CategoryItem;
