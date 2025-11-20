"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Home,
  Star,
  ImageIcon,
  Video,
  Bell,
  FileText,
  Music,
  Share2,
  Trash2,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const toproutes = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },

  {
    label: "Starred",
    href: "/starred",
    icon: Star,
  },

  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

const categories = [
  {
    label: "Starred",
    href: "/starred",
    icon: Star,
  },
  {
    label: "Photos",
    href: "/photos",
    icon: ImageIcon,
  },
  {
    label: "Videos",
    href: "/videos",
    icon: Video,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    label: "Audio",
    href: "/audio",
    icon: Music,
  },
  {
    label: "Shared with me",
    href: "/shared",
    icon: Share2,
  },

  {
    label: "Shared with me",
    href: "/shared",
    icon: Trash2,
  },
];

const bottomRoutes = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Help & support",
    href: "/support",
    icon: HelpCircle,
  },
];

export const SidebarRoutes = () => {
  const [activeRoute, SetActiveRoute] = useState("Home");
  return (
    <div className="w-56 bg-muted/30  border-gray-500 flex flex-col min-h-screen">
      <div className="flex-1 p-4 space-y-12">
        <div>
          {toproutes.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} className="relative ">
              <Button
                variant="ghost"
                className={`w-full flex justify-start rounded-lg cursor-pointer mb-3  text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                  label == activeRoute && "bg-blue-100 text-blue-500"
                }`}
              >
                <Icon />
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Categories
          </h3>

          {categories.map(({ label, icon: Icon, href }) => (
            <Link key={label} href={href} className="relative ">
              <Button
                variant="ghost"
                className={`w-full flex justify-start rounded-lg cursor-pointer mb-3  text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                  label == activeRoute && "bg-blue-100 text-blue-500"
                }`}
              >
                <Icon />
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4">
        {bottomRoutes.map(({ label, icon: Icon, href }) => (
          <Link key={label} href={href} className="relative">
            <Button
              variant="ghost"
              className={`w-full flex justify-start rounded-lg cursor-pointer mb-3 text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                label == activeRoute && "bg-blue-100 text-blue-500"
              }`}
            >
              <Icon />
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
