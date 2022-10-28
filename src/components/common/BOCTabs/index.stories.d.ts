import BOCTabs from './index.vue';
import { Meta, StoryFn } from '@storybook/vue3';
declare const _default: Meta<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
}, {
    styleType: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: string;
}>>;
export default _default;
export declare const Default: StoryFn<typeof BOCTabs>;
export declare const Card: StoryFn<typeof BOCTabs>;
export declare const BorderCard: StoryFn<typeof BOCTabs>;
