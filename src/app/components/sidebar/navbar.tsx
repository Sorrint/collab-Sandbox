const Navbar = () => {
  interface navElement {
    id: number;
    title: string;
  }
  const elementNames: navElement[] = [
    { id: 0, title: 'Обо мне' },
    { id: 1, title: 'Порфтолио' },
    { id: 2, title: 'Услуги и цены' },
    { id: 3, title: 'Блог-note' },
    { id: 4, title: 'Видео уроки' },
    { id: 5, title: 'Форум' },
    { id: 6, title: 'Дизайн макеты' },
  ];
  return (
    <>
      <nav className="nav sidebar__nav flex-auto w-full">
        <ul className="nav__menu text-white">
          {elementNames.map((element) => {
            return (
              <li
                key={element.id}
                className="nav__element h-8 pl-8 pb-px pt-1 cursor-pointer"
              >
                <span className="hover:after:ease-out hover:after:duration-300  after:content-[''] after:block after:w-0 hover:after:h-0.5 hover:after:w-10 hover:after:bg-zinc-400">
                  {element.title}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
