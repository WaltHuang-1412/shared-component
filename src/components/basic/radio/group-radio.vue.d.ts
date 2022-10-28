import type { IRadioType } from './use-radio';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: IRadioType;
    name: string | number;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: IRadioType) => void;
} & {
    change: (val: IRadioType) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: IRadioType;
    name: string | number;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    disabled: boolean;
}>>> & {
    onChange?: ((val: IRadioType) => any) | undefined;
    "onUpdate:modelValue"?: ((val: IRadioType) => any) | undefined;
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
