import UIButton from "./UIButton"

export default {
    title: 'Ui-Kit/UIButton',
    component: UIButton
}

const Template = (args) => <UIButton {...args} />;

const props = {
    text: 'Hello',
    onClick: () => console.log('click'),
    disabled: false,
    theme:'light',
    classes: ''
}

export const light = Template.bind({});

light.args = {
    ...props,
    theme: 'light'
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
};