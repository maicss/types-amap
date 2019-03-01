import {Bounds, EventBindable, LngLat, Map, Pixel, shortPositions, Size} from "./base"

type anchorPositions =
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

export class Marker extends EventBindable {
    constructor(markerOptions: markerOptions)

}

export class Icon {
    constructor(size: Size, imageOffset: Pixel, image: string, imageSize: Size)

    getImageSize(): Size

    setImageSize(size: Size): void
}

export class MarkerShape {
    constructor()

}

interface ElasticMarkerOptions {
    styles?: {
        icon: {
            img: string,
            size: [number, number],
            ancher: [number, number],
            imageOffset?: [number, number]
            fitZoom: number
            imageSize?: [number, number]
            scaleFactor: number,
            minScale: number
        }
        label: {
            content: string
            position?: shortPositions
            offset: [number, number]
            minZoom: number
        }
    }[],
    zoomStyleMapping?: object,
    map: Map,
    position: LngLat,
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
    zIndex?: number
    bubble?: boolean
    cursor?: string
    geodesic?: boolean
    isOutline?: boolean
    borderWeight?: number
    outlineColor?: string
    path?: LngLat[]
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

export class Polygon extends EventBindable {

}
