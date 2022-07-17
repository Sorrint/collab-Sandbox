const Footer = () => {
  interface contactElement {
    id: number;
    title: string;
    value: string;
    address: string;
  }

  const contacts: contactElement[] = [
    { id: 0, title: 'telegram', value: 'Телеграм', address: '@Sorrint' },
    { id: 1, title: 'email', value: 'Почта', address: 'sorrint@gmail.com' },
  ];

  return (
    <div className="contacts sidebar__contacts text-white text-sm pl-4">
      {contacts.map((contact) => {
        return (
          <div
            key={contact.id}
            className={
              'contacts__' &&
              contact.title &&
              ' pb-1 flex justify-between w-fit'
            }
          >
            <span className="contacts__source pr-2 text-neutral-300">
              {contact.value}
            </span>
            <span className="contacts__address">{contact.address}</span>
          </div>
        );
      })}
      <div className="button sidebar__button flex items-center justify-around h-40px w-44 rounded-lg text-base bg-amber-300 mb-5 mt-4 cursor-pointer">
        <span className="text button__text h-full text-gray-700">
          Заказать проект
        </span>
      </div>
    </div>
  );
};

export default Footer;
