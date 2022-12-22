import { IProps } from './group-radio.vue';
import { Meta, StoryFn } from '@storybook/vue3';
declare const _default: Meta<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        name: string | number;
        modelValue: import("./use-radio").IRadioType;
        disabled: boolean;
        radioBgc: string;
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<string | number>;
            required: true;
        } & {
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<import("./use-radio").IRadioType>;
            required: true;
        } & {
            default: string;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        radioBgc: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: import("./use-radio").IRadioType) => any) | undefined;
        onChange?: ((val: import("./use-radio").IRadioType) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "modelValue" | "disabled" | "radioBgc">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: ((event: "update:modelValue", val: import("./use-radio").IRadioType) => void) & ((event: "change", val: import("./use-radio").IRadioType) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<string | number>;
            required: true;
        } & {
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<import("./use-radio").IRadioType>;
            required: true;
        } & {
            default: string;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        radioBgc: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: import("./use-radio").IRadioType) => any) | undefined;
        onChange?: ((val: import("./use-radio").IRadioType) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: import("./use-radio").IRadioType) => void;
    } & {
        change: (val: import("./use-radio").IRadioType) => void;
    }, string, {
        name: string | number;
        modelValue: import("./use-radio").IRadioType;
        disabled: boolean;
        radioBgc: string;
    }> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<string | number>;
        required: true;
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./use-radio").IRadioType>;
        required: true;
    } & {
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    radioBgc: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: import("./use-radio").IRadioType) => any) | undefined;
    onChange?: ((val: import("./use-radio").IRadioType) => any) | undefined;
} & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties>;
export default _default;
export declare const Default: StoryFn<IProps>;
