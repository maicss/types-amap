import AMAP from './index'

const map = new AMAP.Map('', {})

const marker = new AMAP.Marker({map})

const traffic = new AMAP.TileLayer.Traffic({map,})

