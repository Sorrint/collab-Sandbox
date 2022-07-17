import Footer from './footer';
import Logo from './logo';
import Navbar from './navbar';

const Sidebar = () => {
  return (
    <div className="sidebar body__sidebar w-64 bg-[url('https://camouf.ru/local/templates/mibazarov/components/bitrix/menu/aside_multimenu/derevo.jpg')] bg-no-repeat bg-cover flex-auto">
      <div className="sidebar__cover flex flex-wrap bg-zinc-900 bg-opacity-50">
        <Logo />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
