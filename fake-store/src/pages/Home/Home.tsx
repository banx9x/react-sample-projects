import {
  Carousel,
  CarouselItem,
  Card,
  ProductList,
  Main,
  Terminal,
} from 'components';
import { Container } from 'components';
import { useGetNewArivalsQuery } from 'services/product.services';

const Home = () => {
  const { isFetching, isError, error } = useGetNewArivalsQuery(null);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    throw error;
  }

  return (
    <Main>
      <section className='mb-16'>
        <Container>
          <div className='hidden'>
            <h2 className='text-2xl'>Promotions</h2>
          </div>

          <Carousel>
            <CarouselItem>
              <div className='aspect-w-5 aspect-h-3 md:aspect-h-2'>
                <div className='w-full h-full text-4xl flex items-center justify-center bg-gradient-to-r from-zinc-500 to-emerald-500'>
                  Banner 1
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='aspect-w-5 aspect-h-3 md:aspect-h-2'>
                <div className='w-full h-full text-4xl flex items-center justify-center bg-gradient-to-r from-zinc-500 to-emerald-500'>
                  Banner 2
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='aspect-w-5 aspect-h-3 md:aspect-h-2'>
                <div className='w-full h-full text-4xl flex items-center justify-center bg-gradient-to-r from-zinc-500 to-emerald-500'>
                  Banner 3
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </Container>
      </section>

      <section>
        <Container>
          <div className='flex items-center space-x-2 justify-center mb-8'>
            <div className='w-16 h-0.5 bg-slate-500'></div>
            <h2 className='text-2xl w-auto'>New Arivals</h2>
            <div className='w-16 h-0.5 bg-slate-500'></div>
          </div>

          <ProductList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ProductList>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
