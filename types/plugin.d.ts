import {Bounds, EventBindable, LngLat, Map} from "./base"
import {Polygon} from "./overlay"

export type remoteInvokeStatus = 'complete' | 'error' | 'no_data'

export class CustomLayer {
    constructor(customLayerOptions: {
        map: Map
        zIndex?: number
        opacity?: number
        zooms?: [number, number]
    })

    setOpacity(opacity: number): void

    setMap(map: Map | null): void

    getMap(): Map

    show(): void

    hide(): void

    setzIndex(zIndex: number): void

    getzIndex(): number
}

interface AutocompleteResult {
    info: string
    count: number
    tips: Tip[]
}

interface Tip {
    name: string
    district: string
    adcode: string
}

export class Autocomplete extends EventBindable {
    constructor(autoCompleteOptions: {
        type?: string
        city?: string
        datatype?: 'all' | 'poi' | 'bus' | 'busline'
        citylimit?: boolean
        input?: string | HTMLInputElement
        output?: string | HTMLDivElement
        outPutDirAuto?: boolean
    })

    search(keyword: string, callback: (status: remoteInvokeStatus, result: {} | AutocompleteResult) => void)

    setType(type: string): void

    setCity(city: string): void

    setCityLimit(yes: boolean): void
}

interface PoiList {
    pois: Poi[]
    pageIndex: number
    pageSize: number
    count: number
}

interface CityInfo {
    name: string
    citycode: string
    adcode: string
    count: number
}

interface Poi {
    id: string
    name: string
    type: string
    location: LngLat
    address: string
    distance: number
    tel: string
    website: string
    pcode: string
    citycode: string
    adcode: string
    postcode: string
    pname: string
    cityname: string
    adname: string
    email: string

    [key: string]: any
}

interface Discount {
    title: string
    detail: string
    start_time: string
    end_time: string
    sold_time: string
    photos: Photo[]
    url: string
    provider: string
}

interface GroupBuy {
    title: string
    type_code: string
    type: string
    detail: string
    stime: string
    etime: string
    count: number
    sold_num: number
    original_price: number
    groupbuy_price: number
    discount: number
    ticket_address: string
    ticket_tel: string
    photos: Photo[]
    url: string
    provider: string
}

interface Dining {
    cuisines: string
    tag: string
    intro: string
    rating: string
    cp_rating: string
    deep_src: string
    taste_rating: string
    environment_rating: string
    service_rating: string
    cost: string
    recommend: string
    atmosphere: string
    ordering_wap_url: string
    ordering_web_url: string
    ordering_app_url: string
    opentime_GDF: string
    opentime: string
    addition: string
    photos: Photo[]
}

interface Hotel {
    rating: string
    star: string
    intro: string
    lowest_price: string
    faci_rating: string
    health_rating: string
    environment_rating: string
    service_rating: string
    traffic: string
    addition: string
    deep_src: string
    photos: Photo[]
}

interface Cinema {
    intro: string
    rating: string
    deep_src: string
    parking: string
    opentime_GDF: string
    openingtime: string
    photos: Photo[]
}

interface Scenic {
    intro: string
    rating: string
    deep_src: string
    level: string
    price: string
    season: string
    recommened: string
    theme: string
    ordering_wap_url: string
    ordering_web_url: string
    opentime_GDF: string
    opentime: string
    photos: Photo[]
}

interface Photo {
    title: string
    url: string
}

interface Content {
    id: string
    name: string
}

interface SearchResult {
    info: string
    poiList: PoiList
    keywordList: string[]
    cityList: CityInfo[]
}

export class PlaceSearch {
    constructor(placeSearchOptions: {
        city?: string
        citylimit?: boolean
        children?: number
        type?: '汽车服务' | '汽车销售' | '汽车维修' | '摩托车服务' | '餐饮服务' | '购物服务' | '生活服务' | '体育休闲服务' | '医疗保健服务' | '住宿服务' | '风景名胜' | '商务住宅' | '政府机构及社会团体' | '科教文化服务' | '交通设施服务' | '金融保险服务' | '公司企业' | '道路附属设施' | '地名地址信息' | '公共设施'
        lang?: 'zh_cn' | 'en'
        pageSize?: number
        pageIndex?: number
        extensions?: 'all' | 'base'
        map?: Map
        panel?: string | HTMLElement
        showCover?: boolean
        renderStyle?: 'newpc' | 'default'
        autoFitView?: boolean
    })

    search(keyword: string, callback: (status: remoteInvokeStatus, result: {} | SearchResult) => void)

    searchNearBy(keyword: string, center: LngLat, radius: number, callback: (status: remoteInvokeStatus, result: {} | SearchResult) => void)

    searchInBounds(keywords: string, bounds: Bounds | Polygon, callback: (status: remoteInvokeStatus, result: {} | SearchResult) => void)

    getDetails(poiID: string, callback: (status: remoteInvokeStatus, result: {} | SearchResult) => void)

    setType(type: string): void

    setCityLimit(yes: boolean): void

    setPageIndex(pageIndex: number): void

    setPageSize(setPageSize: number): void

    setCity(city: string): void

    setLang(lang: 'zh_cn' | 'en'): void

    getLang(): string

    clear(): void

    poiOnAMAP(obj: { id: string, name: string, location: LngLat }): void

    detailOnAMAP(obj: { id: string, name: string, location: LngLat }): void

}

export class PlaceSearchLayer {
    constructor(placeSearchLayerOptions: { map: Map, keywords: string })

    setMap(map: Map): void

    setKeywords(keywords: string): void
}

interface LineInfo {
    id: string
    name: string
    path: LngLat[]
    citycode: string
    type: string
    start_stop: string
    end_stop: string
    stime: string
    etime: string
    basic_price: string
    total_price: string
    via_stops: string[]
    distance: number
    bounds: Bounds
    company: string
}

interface LineSearchResult {
    info: string
    LineInfo: LineInfo[]
    keywordList: string[]
    cityList: CityInfo[]
}

export class LineSearch {
    constructor(lineSearchOptions: {
        pageIndex?: number
        pageSize?: number
        city?: string
        extensions?: string
    })

    searchById(id: string, callback: (status: remoteInvokeStatus, result: {} | LineSearchResult) => void): void

    search(keyword: string, callback: (status: string, result: {} | LineSearchResult) => void): void

    setPageIndex(pageSize: number): void

    setCity(city: string): void
}
