import { Component } from 'react';
// eslint-disable-next-line
import { IOSWebViewProps, AndroidWebViewProps } from './lib/WebViewTypes';

export {
    FileDownload, WebViewMessageEvent, WebViewNavigation,
    WebViewErrorEvent, WebViewNativeConfig
} from "./lib/WebViewTypes";

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps;

declare class WebView<P = {}> extends Component<WebViewProps & P> {
    //>>>>>>> master
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading: () => void;

    /**
     * Extra Native Component Config.
     */
    extraNativeComponentConfig: () => void;

    /**
     * Executes the JavaScript string.
     */
    injectJavaScript: (script: string) => void;

    /**
     * Focuses on WebView redered page.
     */
    requestFocus: () => void;

    scrollToOffset: (x: number, y: number, animated: boolean) => void;

    setZoomScale: (scale: number, animated: boolean) => void;

    zoomToRect: (rect: { x: number, y: number, width: number, height: number }, scale: number, animated: boolean) => void;

    /**
    * Posts a message to WebView.
    */
    postMessage: (message: string) => void;

    /**
    * (Android only)
    * Removes the autocomplete popup from the currently focused form field, if present.
    */
    clearFormData: () => void;

    /**
    * (Android only)
    * Clears the resource cache. Note that the cache is per-application, so this will clear the cache for all WebViews used.
    */
    clearCache: (clear: boolean) => void;

    /**
    * (Android only)
    * Tells this WebView to clear its internal back/forward list.
    */
    clearHistory: () => void;
}

export { WebView };
export default WebView;
