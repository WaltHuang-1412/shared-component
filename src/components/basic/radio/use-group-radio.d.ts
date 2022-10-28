import { InjectionKey } from 'vue';
import type { IRadioType } from './use-radio';
interface IProps {
    modelValue: IRadioType;
    name: string | number;
    disabled: boolean;
}
interface IInjectionKey extends IProps {
    setModelValue: (val: IRadioType) => void;
}
export declare const radioInjectionKey: InjectionKey<IInjectionKey>;
export default function useGroupRadio(props: IProps, emit: {
    (e: 'update:modelValue', val: IRadioType): void;
    (e: 'change', val: IRadioType): void;
}): {
    modelValue: IRadioType;
    name: string | number;
    disabled: boolean;
    setModelValue: (val: IRadioType) => void;
};
export {};
