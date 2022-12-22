declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    isRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    isFull: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    bindValue: import("vue").WritableComputedRef<string | number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    isRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    isFull: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    isRound: boolean;
    isFull: boolean;
}>;
export default _default;
