import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/ghost.jpg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            age: 26,
            country: Country.Ukraine,
            lastName: 'Tareas',
            first: 'Nikita',
            city: 'asdasd',
            currency: Currency.USD,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            age: 26,
            country: Country.Ukraine,
            lastName: 'Tareas',
            first: 'Nikita',
            city: 'asdasd',
            currency: Currency.USD,
            avatar,
        },
    },
})];
