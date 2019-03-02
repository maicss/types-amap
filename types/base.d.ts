import {TileLayer} from './layer'

export type shortPositions = 'BL'|'BM'|'BR'|'ML'|'MR'|'TL'|'TM'|'TR'


type LngLatObj = {
    lat: number
    lng: number
}

interface LngLatResult extends LngLatObj {
    N: number
    O: number
}

type LngLatLike = [number, number]


type EventCallback = (...args: any[]) => void;

export class Pixel {
    constructor(x: number, y: number)

    getX: () => number
    getY: () => number
    equals: (point: Pixel) => Boolean
    toString: () => string
}

export class Size {
    constructor(width: number, height: number)

    getWidth: () => number
    getHeight: () => number
    toString: () => string
}

/**
 * @class
 * @constructor
 * */
export class LngLat {
    /**
     * 创建一个经纬度实例.
     * @param {number} lng - 经度值.
     * @param {number} lat - 纬度值.
     * @param {boolean} [noAutoFix=false] - 是否自动将经度修正到 [-180,180] 区间内。默认为false，即修正
     * @return {LngLatResult}
     */
    constructor(lng: number, lat: number, noAutoFix?: Boolean)

    /**
     * @description 当前经纬度坐标值经度移动w，纬度移动s，得到新的坐标。经度向右移为正值，纬度向上移为正值，单位为米。
     * @since 1.2
     * */
    offset(west: number, south: number): LngLat

    /**@description 当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离，单位为米*/
    distance(lnglat: LngLat | LngLatLike): LngLat

    /**
     * @description 获取经度值
     * @since 1.2
     * */
    getLng(): number

    /**
     * @description 获取纬度值
     * @since 1.2
     * */
    getLat(): number

    /**
     * @description 判断当前坐标对象与传入坐标对象是否相等
     * */
    equals(lnglat: LngLat): Boolean

    toString(): string
}


/** @description 构造一个矩形范围*/
export class Bounds {
    constructor(southWest: LngLat, northEast: LngLat)

    /**
     * @description 指定点坐标是否在矩形范围内
     * @link https://lbs.amap.com/api/javascript-api/example/relationship-judgment/point-surface-relation
     * */
    contains(point: LngLat): Boolean

    /** @description 获取当前Bounds的中心点经纬度坐标*/
    getCenter(): LngLat

    /** @description 获取当前Bounds的西南角坐标*/
    getSouthWest(): LngLat

    /** @description 获取当前Bounds的东北角坐标*/
    getNorthEast(): LngLat

    toString(): string
}

type availablePluginNames =
    'AMap.ElasticMarker'
    | 'AMap.ToolBar'
    | 'AMap.Scale'
    | 'AMap.OverView'
    | 'AMap.MapType'
    | 'AMap.Geolocation'
    | 'AMap.AdvancedInfoWindow'
    | 'AMap.Autocomplete'
    | 'AMap.PlaceSearch'
    | 'AMap.PlaceSearchLayer'
    | 'AMap.DistrictSearch'
    | 'AMap.LineSearch'
    | 'AMap.StationSearch'
    | 'AMap.Driving'
    | 'AMap.TruckDriving'
    | 'AMap.Transfer'
    | 'AMap.Walking'
    | 'AMap.Riding'
    | 'AMap.DragRoute'
    | 'AMap.ArrivalRange'
    | 'AMap.Geocoder'
    | 'AMap.CitySearch'
    | 'AMap.IndoorMap'
    | 'AMap.MouseTool'
    | 'AMap.CircleEditor'
    | 'AMap.PolyEditor'
    | 'AMap.MarkerClusterer'
    | 'AMap.RangingTool'
    | 'AMap.CloudDataLayer'
    | 'AMap.CloudDataSearch'
    | 'AMap.Weather'
    | 'AMap.RoadInfoSearch'
    | 'AMap.Hotspot'
    | 'AMap.Heatmap'
    | 'AMap.CustomLayer'

export function plugin(pluginNames: availablePluginNames | availablePluginNames[], ready?: (...args: any[]) => void): void;

type availableServiceNames = 'movie' | 'hotel'

export function service(serviceName: availableServiceNames, ready?: () => void): void;

export class IndoorMap {
    constructor(opts: {
        zIndex?: number,
        opacity?: number,
        cursor?: string,
        hideFloorBar?: boolean,
        alwaysShow?: boolean
    });

    showIndoorMap(indoorid: string, floor: number, shopid: string): void;

    showFloor(floor: number, noMove: boolean): void;

    setMap(map: Map): void;

    show(): void;

    hide(): void;

    setzIndex(): void;

    showFloorBar(): void;

    hideFloorBar(): void;

    setOpacity(alpha: number): void;

    getOpacity(): number;

    showLabels(): void;

    hideLabels(): void;

    getSelectedBuildingId(): string;

    getSelectedBuilding(): string;
}

interface MapOptions {
    view?: View2D;
    layers?: TileLayer[];
    level?: number;
    center?: LngLat;
    labelzIndex?: number;
    zooms?: number[];
    lang?: string;
    cursor?: string;
    crs?: string;
    animateEnable?: boolean;
    isHotspot?: boolean;
    defaultLayer?: TileLayer;
    rotateEnable?: boolean;
    resizeEnable?: boolean;
    showIndoorMap?: boolean;
    indoorMap?: IndoorMap;
    expandZoomRange?: boolean;
    dragEnable?: boolean;
    zoomEnable?: boolean;
    doubleClickZoom?: boolean;
    keyboardEnable?: boolean;
    jogEnable?: boolean;
    scrollWheel?: boolean;
    touchZoom?: boolean;
    mapStyle?: string;
    features?: string[];
}

export class Map extends EventBindable {
    constructor(container: string | HTMLDivElement, mapOptions: MapOptions)

}

type AllEventNames =
    'change'
    | 'click'
    | 'close'
    | 'choose'
    | 'complete'
    | 'dblclick'
    | 'dragstart'
    | 'dragging'
    | 'dragend'
    | 'hotspotclick'
    | 'hotspotover'
    | 'hotspotout'
    | 'hide'
    | 'mapmove'
    | 'markerClick'
    | 'mousemove'
    | 'mousewheel'
    | 'mouseover'
    | 'mouseout'
    | 'mouseup'
    | 'mousedown'
    | 'movestart'
    | 'moveend'
    | 'moving'
    | 'movealong'
    | 'listElementClick'
    | 'open'
    | 'resize'
    | 'rightclick'
    | 'show'
    | 'select'
    | 'selectChanged'
    | 'touchstart'
    | 'touchmove'
    | 'touchend'
    | 'zoomchange'
    | 'zoomstart'
    | 'zoomend'
    | 'error'

export class View2D {
    /**
     * @param opt {object}
     * @param [opt.center] {LngLat}
     * @param [opt.rotation] {number}
     * @param [opt.zoom] {number}
     * @param [opt.crs=EPSG3857] {{'EPSG3857'|'EPSG3395'|'EPSG4326'}}
     * */
    constructor(opt: {
        center?: LngLat,
        rotation?: number,
        zoom?: number,
        crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326'
    });

    /**
     * To silence lint error, this class has to be exists.
     */
    toString(): string;
}

declare abstract class EventBindable {
    on(eventName: AllEventNames, callback: EventCallback, context?: object): void;

    off(eventName: string, callback: EventCallback, context?: object): void;

    addDomListener(instance: Map, eventName: AllEventNames, handler: EventCallback, context?: object): EventListener

    addListener(instance: Map, eventName: AllEventNames, handler: EventCallback, context?: object): EventListener

    addListenerOnce(instance: Map, eventName: AllEventNames, handler: EventCallback, context?: object): EventListener

    removeListener(eventName: AllEventNames): void

    trigger(instance: Map, eventName: AllEventNames, extArgs: any): void
}

export class ArrayBounds {
    constructor(bounds: LngLat[] | Pixel[])

    contains(point: LngLat | Pixel): boolean
}
