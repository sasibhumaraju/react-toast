import { ToastsContainer } from "../components";

export default {
    title: 'components/ToastsContainer',
    component: ToastsContainer,
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select'
        },
        theme: {
            control: 'select'
        }
    }
}

export const test = {
    args: {
        placement: 'bottomLeft',
        autoClose:true,
        isClosable:false, 
        duration:2000,
        theme: 'dark'
    }
}   