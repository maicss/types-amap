import {EventBindable, LngLat, Map, Pixel, Size} from "./base"
import {anchorPositions} from "./overlay"

interface CommonInfoWindowOptions {
    content: string | HTMLElement
    position: LngLat
    autoMove?: boolean
    closeWhenClickMap?: boolean
    size?: Size
    anchor?: anchorPositions
    offset?: Pixel
    showShadow?: boolean
}

interface InfoWindowOptions extends CommonInfoWindowOptions {
    isCustom: boolean
}

export class InfoWindow extends EventBindable {
    constructor(infoWindowOptions: InfoWindowOptions)

    open(map: Map, pos: LngLat): void

    close(): void

    getIsOpen(): boolean

    setContent(content: string | HTMLElement): void

    getContent(): string | HTMLElement

    setPosition(lnglat: LngLat): void

    getPosition(): LngLat

    getAnchor(): anchorPositions

    setAnchor(anchor: anchorPositions): void

    getSize(): Size

    setSize(size: Size): void
}

interface AdvancedInfoWindowOptions extends CommonInfoWindowOptions {

    panel: string | HTMLElement
    searchRadius: number
    placeSearch: boolean
    driving: boolean
    walking: boolean
    transit: boolean
    asOrigin: boolean
    asDestination: boolean
}

export class AdvancedInfoWindow extends EventBindable {
    constructor(advancedInfoWindow: AdvancedInfoWindowOptions)

    open(map: Map, pos: LngLat): void

    close(): void

    getIsOpen(): boolean

    setContent(content: string | HTMLElement): void

    getContent(): string | HTMLElement

    setPosition(lnglat: LngLat): void

    getPosition(): LngLat

    getAnchor(): anchorPositions

    setAnchor(anchor: anchorPositions): void

    clear(): void
}
