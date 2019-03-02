import {LngLat} from "./base"
import {remoteInvokeStatus} from './plugin'

interface GeocodeResult {
    info: string
    geocodes: Geocode[]
}

interface AddressComponent {
    province: string
    city: string
    citycode: string
    district: string
    adcode: string
    township: string
    street: string
    streetNumber: string
    neighborhood: string
    neighborhoodType: string
    building: string
    buildingType: string
    businessAreas: BusinessArea[]
}

interface BusinessArea {
    id: string
    name: string
    location: string
}

interface Road {
    id: string
    name: string
    distance: number
    location: LngLat
    direction: string
}


interface Cross {
    distance: number
    direction: string
    location: LngLat
    first_id: string
    first_name: string
    second_id: string
    second_name: string
}

interface ReGeocode {
    addressComponent: AddressComponent
    formattedAddress: string
    roads: Road[]
    crosses: Cross[]
    pois: ReGeocodePoi[]
}

interface ReGeocodePoi {
    id: string
    name: string
    type: string
    tel: string
    distance: number
    direction: string
    address: string
    location: LngLat
    businessArea: string
}

interface Geocode {
    addressComponent: AddressComponent
    formattedAddress: string
    location: LngLat
    adcode: string
    level: string
}

interface GeocoderResult {
    info: string
    regeocode: ReGeocode
}

export class Geocode {
    constructor(geocodeOptions: {
        city?: string
        radius?: number
        lang?: string
        batch?: boolean
        extensions?: 'base' | 'all'
    })

    getLocation(address: string, callback: (status: remoteInvokeStatus, result: {} | GeocodeResult) => void)

    setCity(city: string): void

    getAddress(location: LngLat | LngLat[], callback: (status: remoteInvokeStatus, result: {} | GeocoderResult) => void)
}

interface ConvertorResult {
    info: string
    locations: LngLat[]
}

export function convertFrom(lnglat: LngLat | LngLat[], type: 'gps' | 'baidu' | 'mapbar', callback: (status: string, result: {} | ConvertorResult) => void)
