import classnames from 'classnames';

interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ className, children, ...props }) => {
  const mainClasses = classnames('mt-24 mb-16', className);

  return (
    <main className={mainClasses} {...props}>
      {children}
    </main>
  );
};

export default Main;
