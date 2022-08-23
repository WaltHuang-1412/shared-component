declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        isFull: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        bindValue: import("vue").WritableComputedRef<string | number>;
        isPrefix: import("vue").ComputedRef<boolean>;
        isSuffix: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        isFull: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        modelValue: string | number;
        isFull: boolean;
    }>;
};
export default _default;
export declare const Default: (args: any) => {
    components: {
        BasicInput: import("vue").DefineComponent<{
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            isFull: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            bindValue: import("vue").WritableComputedRef<string | number>;
            isPrefix: import("vue").ComputedRef<boolean>;
            isSuffix: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            isFull: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {
            modelValue: string | number;
            isFull: boolean;
        }>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
