"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type TabProps = {
  title: string;
  value?: string;
  children: React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
  defaultValue?: string;
};

function toSlug(input: string, index: number) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || `tab-${index + 1}`;
}

export function Tabs({ children, defaultValue }: TabsProps) {
  const tabs = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement<TabProps>[];
  const values = tabs.map((child, index) => child.props.value ?? toSlug(child.props.title, index));
  const activeValue = defaultValue ?? values[0];

  return (
    <TabsPrimitive.Root
      className="not-prose my-6 rounded-lg border bg-card/60 p-4"
      defaultValue={activeValue}
    >
      <TabsPrimitive.List className="flex flex-wrap gap-2 border-b pb-2">
        {tabs.map((child, index) => (
          <TabsPrimitive.Trigger
            key={values[index]}
            value={values[index]}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
              "text-muted-foreground hover:text-foreground"
            )}
          >
            {child.props.title}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      <div className="pt-4">
        {tabs.map((child, index) => (
          <TabsPrimitive.Content key={values[index]} value={values[index]}>
            <div className="space-y-3 text-sm text-muted-foreground">
              {child.props.children}
            </div>
          </TabsPrimitive.Content>
        ))}
      </div>
    </TabsPrimitive.Root>
  );
}

export function Tab(_props: TabProps) {
  return null;
}
