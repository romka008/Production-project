import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/features";

import { Sidebar as OldSidebar } from "./old/Sidebar";
import { Sidebar as NewSidebar } from "./newDesign/Sidebar";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<NewSidebar className={className} />}
            off={<OldSidebar className={className} />}
        />
    );
});
