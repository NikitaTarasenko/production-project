/* eslint-disable i18next/no-literal-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from 'react-i18next';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import { TextTheme, Text, TextAlign } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '@/entities/Profile/model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency } from '@/entities/Currency/model/types/currency';
import { CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?:string;
  isLoading?: boolean;
  readOnly? : boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (cur?: Currency) => void;
  onChangeCountry?: (Country?: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('');
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        readOnly,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Failed loading of profile')}
                    text={t('Try to refresh the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Modes = {
        [cls.editing]: !readOnly,
    };
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>

            <div className={cls.data}>
                {data?.avatar
                && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="avatar" />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Firstname"
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Lastname"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};
