import { flatten } from '@cotto/utils.ts'
import { Observable } from './observable'
import { VNode, VElementNode, toVNode, VSVGNode } from './vnode'
import { Props } from './props'

export interface VNodeFactory {
    (type: string, props?: Props, ...children: Child[]): VNode,
}

export interface TagFn {
    /* tslint:disable:unified-signatures */
    (props: Props): VNode
    (children?: Child | Child[]): VNode
    (props: Props, children: Child | Child[]): VNode
    /* tslint:eable:unified-signatures */
}

export type Child = string | number | null | undefined | boolean | VNode | Observable<any>

export const h = (function () {
    return Object.assign(h, { svg })
    // tslint:disable:no-shadowed-variable
    function h(type: string, props: Props = {}, ...children: any[]): VNode {
        return new VElementNode(type, props, flatten(children, toVNode))
    }
    function svg(type: string, props: Props = {}, ...children: any[]): VNode {
        return new VSVGNode(type, props, flatten(children, toVNode))
    }
    // tslint:enable:no-shadowed-variable
})()

export function hh(tagName: string, factory: VNodeFactory = h): TagFn {
    return function tag(arg: any) {
        if (arg != null && arg.constructor === Object) {
            return factory(tagName, ...arguments)
        } else {
            return factory(tagName, {}, arguments.length <= 0 ? [] : arguments[0])
        }
    }
}

/* HTMLElement */
export const a = hh('a')
export const abbr = hh('abbr')
export const acronym = hh('acronym')
export const address = hh('address')
export const applet = hh('applet')
export const area = hh('area')
export const article = hh('article')
export const aside = hh('aside')
export const audio = hh('audio')
export const b = hh('b')
export const base = hh('base')
export const basefont = hh('basefont')
export const bdi = hh('bdi')
export const bdo = hh('bdo')
export const bgsound = hh('bgsound')
export const big = hh('big')
export const blink = hh('blink')
export const blockquote = hh('blockquote')
export const body = hh('body')
export const br = hh('br')
export const button = hh('button')
export const canvas = hh('canvas')
export const caption = hh('caption')
export const center = hh('center')
export const cite = hh('cite')
export const code = hh('code')
export const col = hh('col')
export const colgroup = hh('colgroup')
export const command = hh('command')
export const content = hh('content')
export const data = hh('data')
export const datalist = hh('datalist')
export const dd = hh('dd')
export const del = hh('del')
export const details = hh('details')
export const dfn = hh('dfn')
export const dialog = hh('dialog')
export const dir = hh('dir')
export const div = hh('div')
export const dl = hh('dl')
export const dt = hh('dt')
export const element = hh('element')
export const em = hh('em')
export const embed = hh('embed')
export const fieldset = hh('fieldset')
export const figcaption = hh('figcaption')
export const figure = hh('figure')
export const font = hh('font')
export const form = hh('form')
export const footer = hh('footer')
export const frame = hh('frame')
export const frameset = hh('frameset')
export const h1 = hh('h1')
export const h2 = hh('h2')
export const h3 = hh('h3')
export const h4 = hh('h4')
export const h5 = hh('h5')
export const h6 = hh('h6')
export const head = hh('head')
export const header = hh('header')
export const hgroup = hh('hgroup')
export const hr = hh('hr')
export const html = hh('html')
export const i = hh('i')
export const iframe = hh('iframe')
export const img = hh('img')
export const input = hh('input')
export const ins = hh('ins')
export const isindex = hh('isindex')
export const kbd = hh('kbd')
export const keygen = hh('keygen')
export const label = hh('label')
export const legend = hh('legend')
export const li = hh('li')
export const link = hh('link')
export const listing = hh('listing')
export const main = hh('main')
export const map = hh('map')
export const mark = hh('mark')
export const marquee = hh('marquee')
export const math = hh('math')
export const menu = hh('menu')
export const menuitem = hh('menuitem')
export const meta = hh('meta')
export const meter = hh('meter')
export const multicol = hh('multicol')
export const nav = hh('nav')
export const nextid = hh('nextid')
export const nobr = hh('nobr')
export const noembed = hh('noembed')
export const noframes = hh('noframes')
export const noscript = hh('noscript')
export const object = hh('object')
export const ol = hh('ol')
export const optgroup = hh('optgroup')
export const option = hh('option')
export const output = hh('output')
export const p = hh('p')
export const param = hh('param')
export const picture = hh('picture')
export const plaintext = hh('plaintext')
export const pre = hh('pre')
export const progress = hh('progress')
export const q = hh('q')
export const rb = hh('rb')
export const rbc = hh('rbc')
export const rp = hh('rp')
export const rt = hh('rt')
export const rtc = hh('rtc')
export const ruby = hh('ruby')
export const s = hh('s')
export const samp = hh('samp')
export const script = hh('script')
export const section = hh('section')
export const select = hh('select')
export const shadow = hh('shadow')
export const small = hh('small')
export const source = hh('source')
export const spacer = hh('spacer')
export const span = hh('span')
export const strike = hh('strike')
export const strong = hh('strong')
export const style = hh('style')
export const sub = hh('sub')
export const summary = hh('summary')
export const sup = hh('sup')
export const slot = hh('slot')
export const table = hh('table')
export const tbody = hh('tbody')
export const td = hh('td')
export const template = hh('template')
export const textarea = hh('textarea')
export const tfoot = hh('tfoot')
export const th = hh('th')
export const time = hh('time')
export const title = hh('title')
export const tr = hh('tr')
export const track = hh('track')
export const tt = hh('tt')
export const u = hh('u')
export const ul = hh('ul')
export const video = hh('video')
export const wbr = hh('wbr')
export const xmp = hh('xmp')

/* SVGElement */
// TODO: svg tag helper...