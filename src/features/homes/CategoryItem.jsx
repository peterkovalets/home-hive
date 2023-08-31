import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledCategoryItem = styled.div`
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
    <Link to={`/categories/${type}`}>
      <StyledCategoryItem>
        <Image src={imgUrl} alt={type} />
        <p>Places for {type}</p>
      </StyledCategoryItem>
    </Link>
  );
}

export default CategoryItem;
