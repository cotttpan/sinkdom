import { Observable } from 'rxjs'
import { delay } from '@cotto/utils.ts'
import { mount, VNode } from '../src/index'

export function treeTester() {
    let unmount: any
    return { setup, teardown, testTree }

    function setup() {
        document.body.innerHTML = ''
    }
    async function teardown() {
        await delay(30)
        if (typeof unmount === 'function') {
            unmount()
        }
        unmount = undefined
    }
    function evaluate(str: string) {
        expect(document.body.innerHTML).toBe(str)
    }
    function testTree(name: string, block: () => { tree: VNode, result: Observable<string> | string }) {
        test(name, () => {
            const { tree, result } = block()
            const result$ = (typeof result === 'string' ? Observable.of(result) : result)
            unmount = mount(tree)
            return result$.do(evaluate).toPromise()
        })
    }
}
