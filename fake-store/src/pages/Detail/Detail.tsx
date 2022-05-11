import { Container, Main, Carousel, CarouselItem } from 'components';
import { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { productId } = useParams();

  const handleClick = useCallback(() => {
    console.log('Add to cart', productId);
  }, [productId]);

  return (
    <Main>
      <Container>
        <div className='mb-8'>Breadcrum</div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className=''>
            <img
              src='https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/_/o/_o_s_mi_b_g_i_ng_n_tay_e4sss002e_gny_290k_qu_n_shorts_b_g_i_e4shp002e_gny_260k_1_.jpg'
              alt=''
            />
          </div>

          <div>
            <h1 className='text-3xl'>Áo trẻ em</h1>
            <p className=''>120 000 ₫</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut qui
              nemo enim sed molestias ducimus eius libero, quis esse nulla
              nesciunt ipsum temporibus animi illum, necessitatibus tempora
              dolorum repellat rem.
            </p>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Detail;
