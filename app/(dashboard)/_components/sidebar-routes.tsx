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
    label: "Trash",
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
    <div className="h-screen flex flex-col overflow-y-auto">
      <div className="flex-1">
        {toproutes.map(({ label, href, icon: Icon }) => (
          <Link key={label} href={href}>
            <Button
              variant="ghost"
              className={`w-full flex justify-start gap-2 items-center rounded-lg cursor-pointer text-sm text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                label == activeRoute && "bg-blue-100 text-blue-500 mb-2"
              }`}
              onClick={() => SetActiveRoute(label)}
            >
              <Icon />
              {label}
            </Button>
          </Link>
        ))}

        <div className="space-y-2 mt-12">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Categories
          </h3>

          {categories.map(({ label, icon: Icon, href }) => (
            <Link key={label} href={href}>
              <Button
                variant="ghost"
                className={`w-full flex justify-start gap-2 items-center rounded-lg cursor-pointer text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                  label == activeRoute && "bg-blue-100 text-blue-500"
                }`}
                onClick={() => SetActiveRoute(label)}
              >
                <Icon />
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {bottomRoutes.map(({ label, icon: Icon, href }) => (
          <Link key={label} href={href}>
            <Button
              variant="ghost"
              className={`w-full flex justify-start gap-2 items-center rounded-lg cursor-pointer text-muted-foreground transition-colors  hover:bg-blue-100 hover:text-blue-500 ${
                label == activeRoute && "bg-blue-100 text-blue-500"
              }`}
              onClick={() => SetActiveRoute(label)}
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
