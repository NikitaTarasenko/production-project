import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import Img from './ghost.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Big = Template.bind({});
Big.args = {
    size: 100,
    src: Img,
    alt: 'img',
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: Img,
    alt: 'img',
};
