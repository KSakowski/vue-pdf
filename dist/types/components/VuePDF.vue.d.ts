import '../../pdfjs-dist/web/pdf_viewer.css';
import type { AnnotationEventPayload, HighlightEventPayload, HighlightOptions, TextLayerLoadedEventPayload, WatermarkOptions } from './types';
declare function reload(): void;
declare function cancel(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    pdf?: any;
    page?: number | undefined;
    scale?: number | undefined;
    rotation?: number | undefined;
    fitParent?: boolean | undefined;
    width?: number | undefined;
    height?: number | undefined;
    textLayer?: boolean | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    intent?: string | undefined;
    annotationLayer?: boolean | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    watermarkText?: string | undefined;
    watermarkOptions?: WatermarkOptions | undefined;
    highlightText?: string | string[] | undefined;
    highlightOptions?: HighlightOptions | undefined;
}>, {
    page: number;
    scale: number;
    intent: string;
}>, {
    reload: typeof reload;
    cancel: typeof cancel;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
    highlight: (payload: HighlightEventPayload) => void;
    loaded: (payload: import("../../pdfjs-dist/types/src/display/display_utils").PageViewport) => void;
    textLoaded: (payload: TextLayerLoadedEventPayload) => void;
    annotationLoaded: (payload: any[]) => void;
    xfaLoaded: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    pdf?: any;
    page?: number | undefined;
    scale?: number | undefined;
    rotation?: number | undefined;
    fitParent?: boolean | undefined;
    width?: number | undefined;
    height?: number | undefined;
    textLayer?: boolean | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    intent?: string | undefined;
    annotationLayer?: boolean | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    watermarkText?: string | undefined;
    watermarkOptions?: WatermarkOptions | undefined;
    highlightText?: string | string[] | undefined;
    highlightOptions?: HighlightOptions | undefined;
}>, {
    page: number;
    scale: number;
    intent: string;
}>>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
    onAnnotationLoaded?: ((payload: any[]) => any) | undefined;
    onHighlight?: ((payload: HighlightEventPayload) => any) | undefined;
    onTextLoaded?: ((payload: TextLayerLoadedEventPayload) => any) | undefined;
    onXfaLoaded?: (() => any) | undefined;
    onLoaded?: ((payload: import("../../pdfjs-dist/types/src/display/display_utils").PageViewport) => any) | undefined;
}, {
    scale: number;
    intent: string;
    page: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
