import { InjectionKey } from 'vue';
import type { IRadioType } from './use-radio';
export interface IProps {
    modelValue: IRadioType;
    name: string | number;
    disabled?: boolean;
    radioBgc?: string;
}
export interface IInjectionKey extends IProps {
    setModelValue: (val: IRadioType) => void;
}
export declare const radioInjectionKey: InjectionKey<IInjectionKey>;
export default function useGroupRadio(props: IProps, emit: {
    (e: 'update:modelValue', val: IRadioType): void;
    (e: 'change', val: IRadioType): void;
}, instance: any): {
    modelValue: IRadioType;
    name: string | number;
    disabled?: boolean | undefined;
    radioBgc?: string | undefined;
    setModelValue: (val: IRadioType) => Promise<void>;
};
