import style from './Switch.module.css';

interface SwitchProps {
  isOn: boolean;
  onClick: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onClick }) => {
  return (
    <div
      className={isOn ? style.switchOn : style.switch}
      onClick={onClick}></div>
  );
};

Switch.displayName = 'Switch';

export default Switch;
