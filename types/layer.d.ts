import {Bounds, EventBindable, LngLatObj, Map, Pixel, Size} from "./base"

declare abstract class Layer extends EventBindable {
    setOpacity(alpha: number): void;

    show(): void;

    hide(): void;

    getTiles(): string[];

    reload(): void;

    setTileUrl(): void;

    /**@desc 获取该图层可显示的级别范围；在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]*/
    getZooms(): number[];

    /**@param index=1 {number} */
    setzIndex(index: number): void;

    setMap(map: Map): void;
}

/**
 * @interface TileLayerOptions
 * @property TileLayerOptions.map {Map}
 * @property [TileLayerOption.tileSize=256] {256 | 128 | 64} - 切片大小
 * @property [TileLayerOptions.tileUrl] {string} - 自1.3版本起，该属性与getTileUrl属性合并 @deprecated @see(TileLayerOptions.errorUrl)
 * @property [TileLayerOptions.getTileUrl] {function | string}
 * @property [TileLayerOptions.errorUrl] {string}
 * @property [TileLayerOptions.opacity=1] {number} - [0, 1]
 * @property [TileLayerOptions.zooms] {[number, number]}
 * @property [TileLayerOptions.detectRetina=false] {Boolean}
 * */
interface TileLayerOptions {
    map: Map,
    tileSize?: number,
    tileUrl?: string,
    errorUrl?: string,
    getTileUrl?: (x: number, y: number, z: number) => string | string,
    zIndex?: number,
    opacity?: number,
    zooms?: [number, number],
    detectRetina?: boolean
}

interface TrafficLayerOptions extends TileLayerOptions {
    autoRefresh?: Boolean
    interval?: number
}

interface FlexibleLayerOptions extends TileLayerOptions {
    createTile(x: number, y: number, z: number, success: () => void, fail: () => void): void

    cacheSize: number,
}

interface massMarksOptions {
    cursor?: string
    alwaysRender?: boolean
    style?: MassStyleObject | Array<MassStyleObject>
}

interface MassStyleObject {
    anchor: Pixel
    url: string
    size: Size
    rotation?: number
}

interface MassMarksData {
    lnglat: LngLatObj,
    name: string,
    id: string | number

    [key: string]: any
}

export class MassMarks {
    /**
     * @description 创建海量点类。data为点对象的数组，点对象为包含经纬度lnglat属性的Object，opts为点与点集合的绘制样式。
     例data: [{lnglat: [116.405285, 39.904989], name: i,id:1},{}, …]或url串，支持从服务器直接取数据*/
    constructor(data: Array<MassMarksData>, massMarksOption: massMarksOptions)
}

interface BuildingsOptions {
    zooms?: [number, number],
    opacity?: number,
    heightFactor?: number,
    visible?: boolean,
    map: Map,
    zIndex?: number
}

/** @since 1.4.6*/
export class Buildings {
    constructor(buildingsOptions: BuildingsOptions)

    setMap(map: Map | null): void

    show(): void

    hide(): void

    setStyle(options: object): void
}

interface ImageLayerOptions {
    bounds: Bounds
    url: string
    visible?: boolean
}

export class ImageLayer {
    constructor(imageLayerOptions: ImageLayerOptions)

    getMap(): Map

    getBounds(): Bounds

    setBounds(bounds: Bounds): void

    getzIndex(): number

    getElement(): HTMLCanvasElement

    setImageUrl(url: string): void

    getImageUrl(): string
}

interface VideoLayerOptions {
    url: string | string[]
    map: Map
    bounds: Bounds
    autoplay?: boolean
    loop?: boolean
    opacity?: number
    visible?: boolean
    zIndex?: number
    zooms?: [number, number]
}

export class VideoLayer {
    constructor(videoOptions: VideoLayerOptions)

    setMap(map: Map | null): void

    getMap(): Map

    show(): void

    hide(): void

    setzIndex(zindex: number): void

    getzIndex(): number

    getElement(): HTMLVideoElement

    setVideoUrl(url: string | string[]): void

    getVideoUrl(): string
}

interface CanvasLayerOptions {
    map: Map
    canvas: HTMLCanvasElement
    bounds: Bounds
    opacity?: number
    visible?: boolean
    zIndex?: number
    zooms?: [number, number]
}

export class CanvasLayer {
    constructor(canvasLayerOptions: CanvasLayerOptions)

    reFresh(): void

    setMap(map: Map | null): void

    getMap(): Map

    show(): void

    hide(): void

    setzIndex(zindex: number): void

    getzIndex(): number

    getElement(): HTMLCanvasElement

    setCanvas(HTMLCanvasElement): void
}

export class TileLayer extends Layer {
    constructor(tileLayerOptions: TileLayerOptions)
}

export class TileLayerGroup {
    constructor(layers: TileLayer[])

    addLayer(layer: TileLayer): void

    addLayers(layers: TileLayer[]): void

    getLayers(): TileLayer[]

    hasLayer(layer: TileLayer): Boolean

    removeLayer(layer: Layer): void

    removeLayers(layers: Layer): void

    clearLayers(): void

    eachLayer: (layer: TileLayer, index: number, collections: TileLayer[]) => void

    setMap(map: Map): void

    setOptions(opt: TileLayerOptions): void

    show(): void

    hide(): void
}

export namespace TileLayer {
    class Traffic extends TileLayer {
        constructor(trafficLayerOptions: TrafficLayerOptions)
    }

    class RoadNet extends TileLayer {
        constructor(roadNetOptions: TileLayerOptions)
    }

    class Flexible extends TileLayer {
        constructor(flexibleLayerOptions: FlexibleLayerOptions)

        getzIndex(): number

        getMap(): Map
    }

    class Satellite extends TileLayer {
        constructor(satelliteOptions: TileLayerOptions)
    }
}
