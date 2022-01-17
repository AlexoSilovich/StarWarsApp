import UILoading from "./UILoading"

export default {
    title: 'Ui-Kit/UILoading',
    component: UILoading
}

const Template = (args) => <UILoading {...args} />;

const props = {
    theme: 'black',
    isShadow: false,
    classes: ''
}

export const Black = Template.bind({});

Black.args = {
    ...props,
    theme: 'black'
}

export const White = Template.bind({});

White.args = {
    ...props,
    theme: 'white',
    isShadow: true
}

export const Blue = Template.bind({});

Blue.args = {
    ...props,
    theme: 'blue'
}