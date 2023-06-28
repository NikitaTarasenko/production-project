import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',

};
export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'Text',
    size: SizeButton.L,
};
export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'Text',
    size: SizeButton.XL,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BACKGROUND_INVERTED = Template.bind({});
BACKGROUND_INVERTED.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Squared = Template.bind({});
Squared.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};

export const SquaredL = Template.bind({});
SquaredL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
};

export const SquaredXL = Template.bind({});
SquaredXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true,

};
