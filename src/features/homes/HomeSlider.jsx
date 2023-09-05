import { styled } from 'styled-components';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import supabase from '../../services/supabase';

const StyledSlider = styled(Slider)`
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

function HomeSlider({ images, name }) {
  return (
    <CarouselProvider
      naturalSlideWidth={16}
      naturalSlideHeight={9}
      totalSlides={images.length}
      isPlaying
    >
      <StyledSlider>
        {images.map((image, i) => (
          <Slide index={i} key={image}>
            <Image
              src={
                supabase.storage.from('home-images').getPublicUrl(images[i])
                  .data.publicUrl
              }
              alt={`Photo of ${name}`}
            />
          </Slide>
        ))}
      </StyledSlider>
    </CarouselProvider>
  );
}

export default HomeSlider;
