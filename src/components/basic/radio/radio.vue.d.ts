import type { IRadioType } from './use-radio';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: IRadioType | undefined;
    value: IRadioType;
    label: string | number;
    name?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: IRadioType) => void;
} & {
    change: (value: IRadioType) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: IRadioType | undefined;
    value: IRadioType;
    label: string | number;
    name?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    disabled: boolean;
}>>> & {
    onChange?: ((value: IRadioType) => any) | undefined;
    "onUpdate:modelValue"?: ((value: IRadioType) => any) | undefined;
}, {
    modelValue: IRadioType;
    disabled: boolean;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
