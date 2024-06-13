import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileRating } from "@/features/ProfileRating";

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
    const { t } = useTranslation("profile");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text text={t("Профиль не найден")} />;
    }
    return (
        <Page data-testid="ProfilePage">
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
