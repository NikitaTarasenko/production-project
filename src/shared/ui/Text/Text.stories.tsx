import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary',
    text: 'Primary Text',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Primary',
    text: 'Primary Text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Primary',

};

export const onlyText = Template.bind({});
onlyText.args = {

    text: 'Primary Text',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: 'Primary',
    text: 'Primary Text',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTitleLight = Template.bind({});
onlyTitleLight.args = {
    title: 'Primary',

};
onlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTextLight = Template.bind({});
onlyTextLight.args = {

    text: 'Primary Text',
};
onlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];
