import Footer from './footer';
import Logo from './logo';
import Navbar from './navbar';

const Sidebar = () => {
  return (
    <div className="sidebar body__sidebar flex w-64 bg-[url('https://camouf.ru/local/templates/mibazarov/components/bitrix/menu/aside_multimenu/derevo.jpg')] bg-no-repeat bg-cover">
      <div className="sidebar__cover h-full flex flex-col bg-zinc-900 bg-opacity-50">
        <Logo />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
