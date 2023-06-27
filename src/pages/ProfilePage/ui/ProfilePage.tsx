import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/PageWrapper';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { Text } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('');

    if (!id) {
        return <Text text={t('Profile not found')} />;
    }
    return (
        <PageWrapper className={classNames('', {}, [className])}>
            <VStack gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </PageWrapper>
    );
};

export default ProfilePage;
