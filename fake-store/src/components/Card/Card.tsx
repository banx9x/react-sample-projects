import { generatePath, Link } from 'react-router-dom';

interface CartPops {}

const Card: React.FC<CartPops> = ({}) => {
  return (
    <Link to={generatePath('/product/:id', { id: '1' })}>
      <div>
        <div className='mb-2'>
          <img
            src='https://cdn.tokyolife.com.vn/forlife/media/catalog/product/cache/61a8c7eb4804248abfa4aef0c8bbd396/_/o/_o_s_mi_b_g_i_ng_n_tay_e4sss002e_gny_290k_qu_n_shorts_b_g_i_e4shp002e_gny_260k_1_.jpg'
            alt=''
          />
        </div>

        <div>
          <h3 className='text-md font-semibold'>Áo sơ mi bé gái E4SSS02E</h3>

          <div className='flex items-baseline'>
            <div className='mr-2'>84.000 ₫</div>
            <div className='font-thin text-sm decoration-slate-500 line-through'>
              120.000 ₫
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
