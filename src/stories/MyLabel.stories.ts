import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";


const meta:Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {control: 'select'},
        fontColor: {control: 'color'},
    }
} satisfies Meta<typeof MyLabel>;

export default meta;


/** Templates con ajustes prefijados. */
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary',
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        fontColor: '#aeafea'
    }
};

export const CustomBackgorundColor: Story = {
    args: {
        label: 'Custom Color label',
        size: 'h1',
        fontColor: '#eee',
        backgroundColor: '#000',
    }
};