import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/Vstack/VStack";
import { Text } from "shared/ui/Text/Text";
import { EditableProfileCard } from "features/editableProfileCard";

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
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
