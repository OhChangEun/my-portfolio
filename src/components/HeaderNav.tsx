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
    <nav className="flex gap-2 sm:gap-3 md:gap-5 text-xs sm:text-sm font-light overflow-x-auto">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleMenuClick(item.id)}
          className={`px-2 py-1 rounded hover:text-primary focus:outline-none cursor-pointer whitespace-nowrap ${
            selectedMenu === item.id
              ? "text-primary font-medium"
              : "text-gray-600"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default HeaderNav;
