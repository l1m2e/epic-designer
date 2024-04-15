import { type PropType } from "vue";
import { type ComponentSchema } from '../../../core/types/epic-designer';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "ok")[], "update:modelValue" | "close" | "ok", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    componentSchema: {
        type: PropType<ComponentSchema>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    componentSchema: ComponentSchema;
}, {}>, {
    "edit-node"?(_: {}): any;
    node?(_: {
        componentSchema: ComponentSchema;
    }): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};