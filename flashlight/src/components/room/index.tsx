import style from './Room.module.css';

interface RoomProps {
  light: boolean;
}

const Room: React.FC<RoomProps> = ({ light, children }) => {
  return (
    <div className={light ? style.lightRoom : style.darkRoom}>{children}</div>
  );
};

Room.displayName = 'Room';

export default Room;
