import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: ' 100%',
    height: 100,
    border: '0%',
};

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    border: '50%',
};

export const NormalLight = Template.bind({});
NormalLight.args = {
    width: ' 100%',
    height: 100,
    border: '0%',
};
NormalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CircleLight = Template.bind({});
CircleLight.args = {
    width: 100,
    height: 100,
    border: '50%',
};
CircleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalRed = Template.bind({});
NormalRed.args = {
    width: ' 100%',
    height: 100,
    border: '0%',
};
NormalRed.decorators = [ThemeDecorator(Theme.DARK_RED)];

export const CircleRed = Template.bind({});
CircleRed.args = {
    width: 100,
    height: 100,
    border: '50%',
};
CircleRed.decorators = [ThemeDecorator(Theme.DARK_RED)];
