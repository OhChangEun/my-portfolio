interface HeaderNavProps {
  menuItems: { id: string; label: string }[];
  selectedMenu: string;
  handleMenuClick: (id: string) => void;
}

const HeaderNav = ({
  menuItems,
  selectedMenu,
  handleMenuClick,
}: HeaderNavProps) => {
  return (
    <nav className="flex gap-6 text-sm font-light">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleMenuClick(item.id)}
          className={`px-2 py-1 rounded hover:text-primary focus:outline-none ${
            selectedMenu === item.id
              ? "text-primary font-normal"
              : "text-secondary"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default HeaderNav;
