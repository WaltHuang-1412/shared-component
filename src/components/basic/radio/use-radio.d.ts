export interface IProps {
    modelValue?: IRadioType;
    value: IRadioType;
    label: string | number;
    name?: string;
    disabled?: boolean;
}
export interface IEmit {
    (e: 'update:modelValue', value: IRadioType): void;
    (e: 'change', value: IRadioType): void;
}
export declare type IRadioType = string | number | boolean;
export default function useRadio(props: IProps, emit: IEmit): {
    modelValue_: import("vue").WritableComputedRef<IRadioType>;
    radioGroup: import("./use-group-radio").IInjectionKey | undefined;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
};
