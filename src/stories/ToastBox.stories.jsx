import { ToastBox } from "../components"

export default {
    title: 'components/ToastBox',
    component: ToastBox,
    tags: ['autodocs'],

}

export const toast = {
    args: {
        autoClose:false,
        isClosable:false, 
        duration:500
    }
} 