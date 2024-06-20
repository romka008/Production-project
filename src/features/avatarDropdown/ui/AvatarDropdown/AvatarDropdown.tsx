import { memo } from "react";
import { ToggleFeatures } from "@/shared/lib/features";
import { AvatarDropdown as OldAvatarDropdown } from "./old/AvatarDropdown";
import { AvatarDropdown as NewAvatarDropdown } from "./newDesign/AvatarDropdown";

interface IAvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: IAvatarDropdownProps) => {
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<NewAvatarDropdown className={className} />}
            off={<OldAvatarDropdown className={className} />}
        />
    );
});
