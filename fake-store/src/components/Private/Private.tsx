interface PrivateProps {
  children: React.ReactElement;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Private;
