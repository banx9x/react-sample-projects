import { Card, Container, Main, ProductList } from 'components';

const Category = () => {
  return (
    <Main>
      <section className='mb-16'>
        <Container>
          <div className='mb-8'>
            <h2 className='text-2xl'>Men</h2>
          </div>

          <div>Filter</div>

          <ProductList>
            <Card />
            <Card />
            <Card />
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

export default Category;
