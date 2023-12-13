'use client'
import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from './TabItem';


export const SettingsTabs = () => {
    return (
        <Tabs.Root>
            <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
                <TabItem value="tab1" title="My details" />
                <TabItem value="tab2" title="My details" />
                <TabItem value="tab3" title="My details" />
                <TabItem value="tab4" title="My details" />
                <TabItem value="tab5" title="My details" />
                <TabItem value="tab6" title="My details" />
                <TabItem value="tab7" title="My details" />
                <TabItem value="tab8" title="My details" />
                <TabItem value="tab9" title="My details" />
            </Tabs.List>
        </Tabs.Root>
    )
}
