export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}
