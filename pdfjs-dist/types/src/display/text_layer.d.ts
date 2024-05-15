export type PageViewport = import("./display_utils").PageViewport;
export type TextContent = import("./api").TextContent;
/**
 * Text layer render parameters.
 */
export type TextLayerRenderParameters = {
    /**
     * - Text content to
     * render, i.e. the value returned by the page's `streamTextContent` or
     * `getTextContent` method.
     */
    textContentSource: ReadableStream | TextContent;
    /**
     * - The DOM node that will contain the text
     * runs.
     */
    container: HTMLElement;
    /**
     * - The target viewport to properly layout
     * the text runs.
     */
    viewport: PageViewport;
    /**
     * - HTML elements that correspond to
     * the text items of the textContent input.
     * This is output and shall initially be set to an empty array.
     */
    textDivs?: HTMLElement[] | undefined;
    /**
     * - Some properties
     * weakly mapped to the HTML elements used to render the text.
     */
    textDivProperties?: WeakMap<HTMLElement, Object> | undefined;
    /**
     * - Strings that correspond to
     * the `str` property of the text items of the textContent input.
     * This is output and shall initially be set to an empty array.
     */
    textContentItemsStr?: string[] | undefined;
};
/**
 * Text layer update parameters.
 */
export type TextLayerUpdateParameters = {
    /**
     * - The DOM node that will contain the text
     * runs.
     */
    container: HTMLElement;
    /**
     * - The target viewport to properly layout
     * the text runs.
     */
    viewport: PageViewport;
    /**
     * - HTML elements that correspond to
     * the text items of the textContent input.
     * This is output and shall initially be set to an empty array.
     */
    textDivs?: HTMLElement[] | undefined;
    /**
     * - Some properties
     * weakly mapped to the HTML elements used to render the text.
     */
    textDivProperties?: WeakMap<HTMLElement, Object> | undefined;
    /**
     * true if the text layer must be rotated.
     */
    mustRotate?: boolean | undefined;
    /**
     * true if the text layer contents must be
     * rescaled.
     */
    mustRescale?: boolean | undefined;
};
export function cleanupTextLayer(): void;
/**
 * @param {TextLayerRenderParameters} params
 * @returns {TextLayerRenderTask}
 */
export function renderTextLayer(params: TextLayerRenderParameters): TextLayerRenderTask;
export class TextLayerRenderTask {
    constructor({ textContentSource, container, viewport, textDivs, textDivProperties, textContentItemsStr, }: {
        textContentSource: any;
        container: any;
        viewport: any;
        textDivs: any;
        textDivProperties: any;
        textContentItemsStr: any;
    });
    _container: any;
    _rootContainer: any;
    _textDivs: any;
    _textContentItemsStr: any;
    _fontInspectorEnabled: boolean;
    _textDivProperties: any;
    _canceled: boolean;
    _capability: PromiseWithResolvers<any>;
    _layoutTextParams: {
        prevFontSize: null;
        prevFontFamily: null;
        div: null;
        scale: number;
        properties: null;
        ctx: null;
    };
    _styleCache: any;
    _transform: any[];
    _pageWidth: any;
    _pageHeight: any;
    /**
     * Promise for textLayer rendering task completion.
     * @type {Promise<void>}
     */
    get promise(): Promise<void>;
    /**
     * Cancel rendering of the textLayer.
     */
    cancel(): void;
    _processItems: (() => void) | undefined;
    /**
     * @private
     */
    private _render;
    #private;
}
/**
 * @param {TextLayerUpdateParameters} params
 * @returns {undefined}
 */
export function updateTextLayer({ container, viewport, textDivs, textDivProperties, mustRotate, mustRescale, }: TextLayerUpdateParameters): undefined;
