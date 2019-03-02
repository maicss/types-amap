import {Bounds, EventBindable, LngLat, Map, Pixel, shortPositions, Size} from "./base"

export type anchorPositions =
    'top-left'
    | 'top-center'
    | 'top-right'
    | 'middle-left'
    | 'center'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'

type markerAnimation = 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_DROP' | 'AMAP_ANIMATION_BOUNCE'

interface markerOptions {
    map: Map
    position?: LngLat
    anchor?: anchorPositions
    offset?: Pixel
    icon?: string | Icon
    content?: string | object
    topWhenClick?: boolean
    bubble?: boolean
    draggable?: boolean
    raiseOnDrag?: boolean
    cursor?: string
    visible?: boolean
    // default 100
    zIndex?: number
    angle?: number
    autoRotation?: boolean
    animation?: markerAnimation
    shadow?: Icon
    title?: string
    clickable?: boolean
    shape?: MarkerShape
    extData?: any
    label?: { content?: string, offset?: { x: number, y: number } }
}

export class Marker extends EventBindable {
    constructor(markerOptions: markerOptions)

    markOnAMAP(obj: { name: string, position?: LngLat }): void

    getAnchor(): string

    setAnchor(anchor: anchorPositions): void

    getOffset(): Pixel

    setOffset(offset: Pixel): Pixel

    setAnimation(animate: markerAnimation): void

    setClickable(clickable: boolean): void

    getClickable(): boolean

    getPosition(): LngLat

    setPosition(lnglat: LngLat): void

    setAngle(angle: number): void

    setLabel(label: Object): void

    getLabel(): object

    getAngle(): number

    setzIndex(index: number): void

    getzIndex(): number

    setIcon(content: string | Icon)

    getIcon(): string | Icon

    setDraggable(draggable: boolean): void

    getDraggable(): boolean

    hide(): void

    show(): void

    setCursor(cursor: string): string

    setContent(html: string | HTMLDocument)

    getContent(): string

    moveAlong(path: LngLat[], speed: number, f?: <T>(arg: T) => T, circlable?: boolean)

    moveTo(lnglat: LngLat, speed: number, f?: <T>(arg: T) => T)

    stopMove(): void

    pauseMove(): void

    resumeMove(): void

    setMap(map: Map | null): void

    getMap(): Map

    setTitle(title: string): void

    getTitle(): string

    setTop(isTop: boolean): void

    getTop(): boolean

    setShadow(icon: Icon): void

    getShadow(): Icon

    setShape(shape: MarkerShape): void

    getShape(): MarkerShape

    setExtData(ext: any)

    getExtData(): any
}

export class Icon {
    constructor(size: Size, imageOffset: Pixel, image: string, imageSize: Size)

    getImageSize(): Size

    setImageSize(size: Size): void
}

export class MarkerShape {
    constructor(markerShapeOptions: {
        coords: number[]
        type: 'circle' | 'poly' | 'rect'
    })

}

interface ElasticMarkerOptions {
    map: Map,
    position: LngLat,
    styles?: {
        icon: {
            img: string,
            size?: [number, number],
            ancher?: [number, number],
            imageOffset?: [number, number]
            fitZoom?: number
            imageSize?: [number, number]
            scaleFactor?: number,
            minScale?: number
        }
        label: {
            content: string
            position?: shortPositions
            offset?: [number, number]
            minZoom?: number
        }
    }[],
    zoomStyleMapping?: object,
    topWhenClick?: boolean,
    bubble?: boolean,
    draggable?: boolean,
    cursor?: string,
    visible?: boolean,
    zIndex?: number,
    clickable?: boolean,
    extData?: any
}

export class ElasticMarker extends EventBindable {
    constructor(elasticMarker: ElasticMarkerOptions)

    markOnMap(obj: { name: string, position?: LngLat }): void

    setClickable(clickable: boolean): void

    getClickable(): boolean

    getPosition(): LngLat

    setPosition(lnglat: LngLat): void

    setzIndex(index: number): void

    getzIndex(): number

    setDraggable(draggable: boolean): void

    getDraggable(): boolean

    hide(): void

    show(): void

    setCursor(cursor: string): string

    setMap(map: Map | null): void

    getMap(): Map

    setTitle(title: string): void

    getTitle(): string

    setTop(isTop: boolean): void

    getTop(): boolean

    setExtData(extData: any): void

    getExtData(): any
}

interface TextOptions {
    text: string
    map: Map
    position?: LngLat
    anchor?: anchorPositions
    offset?: Pixel,
    topWhenClick?: boolean
    bubble?: boolean
    draggable?: boolean
    raiseOnDrag?: boolean
    cursor?: string
    visible?: boolean
    zIndex?: number
    angle?: number
    autoRotation?: boolean
    animation?: markerAnimation
    shadow?: Icon
    title?: string
    clickable?: boolean
    extData?: any
}

export class Text extends EventBindable {
    constructor(textOptions: TextOptions)

    getText(): string

    setText(text: string): void

    setStyle(style: object): void

    markOnMap(obj: { name: string, position?: LngLat }): void

    getAnchor(): string

    setAnchor(anchor: anchorPositions): void

    getOffset(): Pixel

    setOffset(offset: Pixel): Pixel

    setAnimation(animate: markerAnimation): void

    setClickable(clickable: boolean): void

    getClickable(): boolean

    getPosition(): LngLat

    setPosition(lnglat: LngLat): void

    setAngle(angle: number): void

    getAngle(): number

    setzIndex(index: number): void

    getzIndex(): number

    setDraggable(draggable: boolean): void

    getDraggable(): boolean

    hide(): void

    show(): void

    setCursor(cursor: string): string

    moveAlong(path: LngLat[], speed: number, f?: <T>(arg: T) => T, circlable?: boolean)

    moveTo(lnglat: LngLat, speed: number, f?: <T>(arg: T) => T)

    stopMove(): void

    pauseMove(): void

    resumeMove(): void

    setMap(map: Map | null): void

    getMap(): Map

    setTitle(title: string): void

    getTitle(): string

    setTop(isTop: boolean): void

    getTop(): boolean

    setShadow(icon: Icon): void

    getShadow(): Icon

    setExtData(ext: any)

    getExtData(): any
}

interface PolylineOptions {
    map: Map
    path: LngLat[]
    zIndex?: number
    bubble?: boolean
    cursor?: string
    geodesic?: boolean
    isOutline?: boolean
    borderWeight?: number
    outlineColor?: string
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    strokeStyle?: string
    strokeDasharray?: number[]
    lineJoin?: 'miter' | 'round' | 'bevel'
    lineCap?: 'butt' | 'round' | 'square'
    draggable?: boolean
    extData?: any
    showDir?: boolean
}

export class Polyline extends EventBindable {
    constructor(polyOptions: PolylineOptions)

    setPath(path: LngLat[]): void

    getPath(): LngLat[]

    setOptions(opt: PolylineOptions): void

    getOptions(): PolylineOptions

    getLength(): number

    getBounds(): Bounds

    hide(): void

    show(): void

    setMap(map: Map | null)

    setExtData(extData: any): void

    getExtData(): any

}

interface PolygonOptions {
    map: Map
    path: LngLat[] | LngLat[][]
    zIndex?: number
    bubble?: boolean
    cursor?: string
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    fillColor?: string
    fillOpacity?: number
    draggable?: number
    extData?: any
    strokeStyle?: string
    strokeDasharray?: number[]
}
export class Polygon extends EventBindable {
    constructor(polygonOptions: PolylineOptions)

    setPath(path: LngLat[] | LngLat[][]): void

    getPath(): LngLat[] | LngLat[][]

    setOptions(opt: PolygonOptions): void

    getOptions(): object

    getBounds(): Bounds

    getArea(): number

    hide(): void

    show(): void

    setMap(map: Map | null): void

    setExtData(extData: any): void

    getExtData(): any

    contains(point: LngLat): boolean
}

interface BezierCurveOptions {
    path: LngLat[] | LngLat[][]
    map: Map
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    strokeStyle?: 'dashed' | 'solid'
    strokeDasharray?: number[]
    zIndex?: number
    showDir?: boolean
    bubble?: boolean
    cursor?: string
    isOutline?: boolean
    outlineColor?: string
    borderWeight?: number
}

export class BezierCurve extends EventBindable {
    constructor(bezierCurveOptions: BezierCurveOptions)

    setPath(path: LngLat[] | LngLat[][]): void

    getPath(): LngLat[] | LngLat[][]

    setOptions(opt: PolylineOptions): void

    getOptions(): BezierCurveOptions

    getLength(): number

    getBounds(): Bounds

    hide(): void

    show(): void

    setMap(map: Map | null): void

    setExtData(extData: any): void

    getExtData(): any
}

interface CircleOptions {
    map: Map
    center: LngLat
    radius: number
    zIndex: number
    bubble?: boolean
    cursor?: string
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    fillColor?: string
    fillOpacity?: number
    strokeStyle?: 'solid' | 'dashed'
    extData?: any
    strokeDasharray?: number[]
}

export class Circle extends EventBindable {
    constructor(circleOptions: CircleOptions)

    setCenter(lnglat: LngLat): void

    getCenter(): LngLat

    getBounds(): Bounds

    setRadius(radius: number): void

    getRadius(): number

    setOptions(opt: CircleOptions): void

    getOptions(): CircleOptions

    hide(): void

    show(): void

    setMap(map: Map | null): void

    setExtData(extData: any): void

    getExtData(): any

    contains(point: LngLat): boolean
}

interface CircleMarkerOptions {
    map: Map
    center: LngLat
    radius: number
    zIndex?: number
    bubble?: boolean
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    fillColor?: string
    fillOpacity?: number
    extData?: any
}

export class CircleMarker extends EventBindable {
    constructor(circleMarkerOptions: CircleMarkerOptions)

    setCenter(lnglat: LngLat): void

    getCenter(): LngLat

    setRadius(radius: number): void

    getRadius(): number

    setOptions(opt: CircleMarkerOptions): void

    getOptions(): CircleMarkerOptions

    hide()

    show()

    setMap(map: Map | null): void

    setExtData(extData: any): void

    getExtData(): any
}

interface EllipseOptions {
    map: Map
    center: LngLat
    radius?: [number, number]
    zIndex?: number
    bubble?: boolean
    cursor?: string
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    fillColor?: string
    fillOpacity?: number
    strokeStyle?: string
    extData?: any
    strokeDasharray?: number[]
}

export class Ellipse extends EventBindable {
    getCenter(): LngLat

    setCenter(lnglat: LngLat): void

    getBounds(): Bounds

    setOptions(opts: EllipseOptions): void

    getOptions(): EllipseOptions

    hide()

    show()

    setMap(map: Map | null): void

    setExtData(extData: any): void

    getExtData(): any

    contains(point: LngLat): boolean
}

interface RectangleOptions {
    map: Map
    bounds: Bounds
    zIndex?: number
    bubble?: boolean
    cursor?: string
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
    fillColor?: string
    fillOpacity?: number
    strokeStyle?: string
    extData?: any
    strokeDasharray?: number[]
}

export class Rectangle extends EventBindable {
    constructor(rectangleOptions: RectangleOptions)

    getBounds(): Bounds

    setBounds(bounds: Bounds): void

    setOptions(opts: RectangleOptions): void

    getOptions(): RectangleOptions

    hide(): void

    show(): void

    setMap(map: Map | null)

    setExtData(extData: any): void

    getExtData(): any

    contains(point: LngLat): boolean
}

type availOverlayGroupType = Marker | Polygon | Polyline | Circle | Rectangle | Ellipse | BezierCurve

export class OverlayGroup extends EventBindable {
    constructor(overlayGroupOptions: availOverlayGroupType[])

    addOverlay(overlay: availOverlayGroupType): void

    addOverlays(overlays: availOverlayGroupType[]): void

    getOverlays(): availOverlayGroupType[]

    hasOverlay(overlay: availOverlayGroupType): boolean

    removeOverlay(overlay: availOverlayGroupType): void

    removeOverlays(overlays: availOverlayGroupType[]): void

    clearOverlays(): void

    eachOverlay(iterator: (availOverlayGroupType, index: number, collections: availOverlayGroupType[]) => void): void

    setMap(map: Map): void

    setOptions(opts: availOverlayGroupType[]): void

    show(): void

    hide(): void
}

interface GeoJSONOptions {
    geoJSON: object

    getMarker?: (geojson: object, lnglat: LngLat) => void
    getPolyline?: (geojson: object, lnglat: LngLat) => void
    getPolygon?: (geojson: object, lnglat: LngLat) => void
}

export class GeoJSON extends EventBindable {
    constructor(geojsonOptions: GeoJSONOptions)

    importData(geoJSON: object): void

    toGeoJSON(): object

    addOverlay(overlay: availOverlayGroupType): void

    addOverlays(overlays: availOverlayGroupType[]): void

    getOverlays(): availOverlayGroupType[]

    hasOverlay(overlay: availOverlayGroupType): boolean

    removeOverlay(overlay: availOverlayGroupType): void

    removeOverlays(overlays: availOverlayGroupType[]): void

    clearOverlays(): void

    eachOverlay(iterator: (availOverlayGroupType, index: number, collections: availOverlayGroupType[]) => void): void

    setMap(map: Map): void

    show(): void

    hide(): void
}

export class GroundImage extends EventBindable {
    constructor(groundImageOptions: {
        map: Map
        clickable?: boolean
        opacity?: number
    })

    getMap(): Map

    setMap(map: Map): void

    getOpacity(): number

    setOpacity(opacity: number): void

    getBounds(): Bounds

    getImageUrl(): string
}

export class ContextMenu extends EventBindable {
    constructor(contextMenuOptions: {
        position: LngLat
        content: string | HTMLElement
        width?: number
    })

    addItem(text: string, fn: Function, num: number)

    removeItem(text: string, fn: Function): void

    open(map: Map, position: LngLat): void

    close(): void

}
