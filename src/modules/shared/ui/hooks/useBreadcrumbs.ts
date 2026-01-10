"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/routes";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export function useBreadcrumbs(dynamicLabel?: string): BreadcrumbItem[] {
  const pathname = usePathname();

  // Always start with Home
  const items: BreadcrumbItem[] = [
    { label: ROUTES.HOME.label, path: ROUTES.HOME.path },
  ];

  if (!pathname) return items;

  const segments = pathname.split("/").filter((segment) => segment !== "");
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Find custom label from ROUTES
    // We search through the ROUTES object values to find a matching path
    const routeEntry = Object.values(ROUTES).find((route) => {
      // Handle static paths (string)
      if (typeof route.path === 'string') {
        return route.path === currentPath;
      }
      return false;
    });

    let label = routeEntry?.label;

    if (isLast && dynamicLabel) {
      label = dynamicLabel;
    }

    // Fallback for unknown segments
    if (!label) {
      label = segment;
    }

    // Prevent duplicate Home if pathname is just "/"
    if (currentPath !== "/") {
      items.push({ label, path: currentPath });
    }
  });

  return items;
}
