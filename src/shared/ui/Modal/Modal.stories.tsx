import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur quasi ex doloremque rerum. Deleniti harum dolorum quaerat culpa commodi similique itaque  recusandae saepe provident? Temporibus asperiores distinctio doloribus quod!',

};

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur quasi ex doloremque rerum. Deleniti harum dolorum quaerat culpa commodi similique itaque  recusandae saepe provident? Temporibus asperiores distinctio doloribus quod!',

};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
