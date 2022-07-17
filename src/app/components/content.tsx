import { addCustomMenu } from '../../context-menu/addCustomMenu';

const Content = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === 'click') {
      console.log('Left click');
    } else if (e.type === 'contextmenu') {
      e.preventDefault();
      console.log('Right click');
      addCustomMenu();
    }
  };
  return (
    <div
      className="content body__content w-full flex-auto"
      onContextMenu={handleClick}
    >
      <div className="content__wrapper"></div>
    </div>
  );
};

export default Content;
