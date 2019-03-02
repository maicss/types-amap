import {LngLat} from "./base"

export function distance(p1: LngLat, p2: LngLat): number

export function ringArea(ring: LngLat[]): number

export function isClockwise(ring: LngLat[]): boolean

export function distanceOfLine(ring: LngLat[]): number

export function ringRingClip(ring1: LngLat[], ring2: LngLat[]): number

export function doesRingRingIntersect(ring1: LngLat[], ring2: LngLat[]): boolean

export function doesLineRingIntersect(line: LngLat[], ring: LngLat[]): boolean

export function doesLineLineIntersect(line1: LngLat[], line2: LngLat[]): boolean

export function doesSegmentPolygonIntersect(p1: LngLat, p2: LngLat, rings: LngLat[][]): boolean

export function doesSegmentRingIntersect(p1: LngLat, p2: LngLat, ring: LngLat[]): boolean

export function doesSegmentLineIntersect(p1: LngLat, p2: LngLat, line: LngLat[]): boolean

export function doesSegmentsIntersect(p1: LngLat, p2: LngLat, p3: LngLat, p4: LngLat): boolean

export function isPointInRing(p: LngLat, ring: LngLat[]): boolean

export function isRingInRing(ring1: LngLat[], ring2: LngLat[]): boolean

export function isPointInPolygon(p: LngLat, rings: LngLat[][]): boolean

export function makesureClockwise(ring: LngLat[]): boolean

export function makesureAntiClockwise(ring: LngLat[]): boolean

export function closestOnSegment(p1: LngLat, p2: LngLat, p3: LngLat): LngLat

export function closestOnLine(p: LngLat, line: LngLat[]): LngLat

export function distanceToSegment(p1: LngLat, p2: LngLat, p3: LngLat): number

export function distanceToLine(p: LngLat, line: LngLat[]): number

export function isPointOnSegment(p1: LngLat, p2: LngLat, p3: LngLat, tolerance: Number): number

export function isPointOnLine(p: LngLat, line: LngLat[], tolerance: Number): boolean

export function isPointOnRing(p: LngLat, ring: LngLat[], tolerance: Number): boolean

export function isPointOnPolygon(p: LngLat, rings: LngLat[][], tolerance: Number): boolean
