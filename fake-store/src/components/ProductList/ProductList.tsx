interface ProductListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {children}
    </div>
  );
};

export default ProductList;
