import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '1234', isLoading: false },
})];

export const WithError = Template.bind({});
WithError.args = {};

WithError.decorators = [StoreDecorator({
    loginForm: {
        username: '123', password: '1234', isLoading: false, error: 'wtf!',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [StoreDecorator({
    loginForm: {
        username: '123', password: '1234', isLoading: true,
    },
})];
