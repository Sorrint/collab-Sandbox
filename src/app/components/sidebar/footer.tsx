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
    <div className="contacts sidebar__contacts text-white text-sm flex-initial">
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className={'contacts__' && contact.title}>
            <span className="contacts__source">{contact.value}</span>
            <span className="contacts__address">{contact.address}</span>
          </div>
        );
      })}
      <div className="button sidebar__button">
        <span className="text button__text">Заказать проект</span>
      </div>
    </div>
  );
};

export default Footer;
