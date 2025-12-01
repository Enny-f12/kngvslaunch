"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Info,
  GraduationCap,
  Newspaper,
  FolderOpen,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  LucideIcon,
} from "lucide-react";

// --- Interface Definitions ---
interface NavChild {
  name: string;
  href: string;
}
interface NavItem {
  name: string;
  icon: LucideIcon;
  key: string;
  expandable: boolean;
  href?: string;
  children?: NavChild[];
}
interface DashboardLayoutProps {
  children: React.ReactNode;
}
// --- End Interface Definitions ---

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["about"]);
  const pathname = usePathname();

  const toggleMenu = (menu: string) => {
    if (sidebarCollapsed) return;
    setExpandedMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((m) => m !== menu)
        : [...prev, menu]
    );
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    if (!sidebarCollapsed) setExpandedMenus([]);
  };

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: LayoutDashboard, key: "home", expandable: false },
    {
      name: "About KNGVS",
      icon: Info,
      key: "about",
      expandable: true,
      children: [
        { name: "About Us", href: "/about" },
        { name: "Advisory Board", href: "/advisory" },
        { name: "Contact Us", href: "/contact" },
        { name: "Our Team", href: "/teams" },
      ],
    },
    {
      name: "Our Programs",
      icon: GraduationCap,
      key: "programs",
      expandable: true,
      children: [
        { name: "Vacation School", href: "/vacation" },
        { name: "Annual Exhibition", href: "/exhibition" },
        { name: "Amplified Kitchen", href: "/amplified" },
        { name: "World Food Day", href: "/wfd" },
        { name: "Training", href: "/training" },
        { name: "Advocacy", href: "/advocacy" },
      ],
    },
    {
      name: "News & Reports",
      icon: Newspaper,
      key: "news",
      expandable: true,
      children: [
        { name: "Annual Report", href: "/annual" },
        { name: "Gallery", href: "/gallery" },
        { name: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      name: "Resources",
      icon: FolderOpen,
      key: "resources",
      expandable: true,
      children: [
        { name: "Curriculum", href: "/curriculum" },
        { name: "Toolkit", href: "/toolkit" },
      ],
    },
  ];

  const isActive = (href?: string) => href && pathname === href;
  const isParentActive = (children?: NavChild[]) =>
    children?.some((c) => pathname === c.href);

  return (
    <div className="flex h-screen bg-white transition-colors duration-300 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${sidebarCollapsed ? "w-14" : "w-60"}
          bg-white shadow-md border-r border-gray-200 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Logo/Header */}
        <div className="flex items-center justify-between h-16 px-3 border-b border-gray-200">
          <div
            className={`flex items-center transition-all ${
              sidebarCollapsed ? "justify-center w-full" : "space-x-2"
            }`}
          >
            <Image
              width={36}
              height={36}
              src="/assets/sidebar/logo.jpg"
              alt="logo"
              className="rounded-md"
            />
            {!sidebarCollapsed && (
              <h1 className="text-xl font-bold text-[#159c09] tracking-tight">
                KNGVS
              </h1>
            )}
          </div>
          {/* Close button (mobile only) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        {/* Collapse Button */}
        <div className="hidden lg:flex p-2 border-b border-gray-100">
          <button
            onClick={toggleSidebarCollapse}
            className="w-full flex items-center justify-end p-2 rounded-md text-gray-600 hover:text-[#159c09] hover:bg-[#e6f6e5] transition-all duration-150"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 lg:mt-0 px-3 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const expanded = expandedMenus.includes(item.key);
            const active = isActive(item.href) || isParentActive(item.children);
            return (
              <div key={item.key}>
                {item.expandable ? (
                  <button
                    onClick={() => toggleMenu(item.key)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium transition-all duration-150
                      ${
                        active
                          ? "bg-[#e6f6e5] text-[#159c09] border-l-4 border-[#159c09]"
                          : "text-gray-700 hover:bg-[#f3fdf2] hover:text-[#159c09] hover:border-l-4 hover:border-[#159c09]"
                      }
                      ${sidebarCollapsed ? "justify-center border-none" : ""}`}
                    title={sidebarCollapsed ? item.name : undefined}
                    disabled={sidebarCollapsed}
                  >
                    <div
                      className={`flex items-center ${
                        sidebarCollapsed ? "justify-center" : ""
                      }`}
                    >
                      <Icon size={18} className={sidebarCollapsed ? "" : "mr-3"} />
                      {!sidebarCollapsed && <span>{item.name}</span>}
                    </div>
                    {!sidebarCollapsed &&
                      (expanded ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={() => setSidebarOpen(false)}
                    className={`block rounded-md text-sm font-medium transition-all duration-150
                      ${
                        active
                          ? "bg-[#e6f6e5] text-[#159c09] border-l-4 border-[#159c09]"
                          : "text-gray-700 hover:bg-[#f3fdf2] hover:text-[#159c09] hover:border-l-4 hover:border-[#159c09]"
                      }`}
                    title={sidebarCollapsed ? item.name : undefined}
                  >
                    <div
                      className={`flex items-center px-3 py-3 ${
                        sidebarCollapsed ? "justify-center border-none" : ""
                      }`}
                    >
                      <Icon size={18} className={sidebarCollapsed ? "" : "mr-3"} />
                      {!sidebarCollapsed && <span>{item.name}</span>}
                    </div>
                  </Link>
                )}

                {!sidebarCollapsed &&
                  item.expandable &&
                  expanded &&
                  item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm transition-all text-gray-600 hover:bg-[#f3fdf2] hover:text-[#159c09] ${
                            pathname === child.href
                              ? "font-semibold bg-[#e6f6e5] text-[#159c09]"
                              : ""
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between h-14 px-4 border-b border-gray-200 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 hover:text-[#159c09] transition-colors"
          >
            <Menu size={24} />
          </button>
          
        </div>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white transition-colors">
          <div className="p-0">{children}</div>
        </main>
      </div>
    </div>
  );
}
