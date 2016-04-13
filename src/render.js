/* @flow */

import {batchInsertMessages} from './batchInsertMessages'
import {NodeProxy} from './NodeProxy'
import {isDefined} from './is'
import {$$root} from './symbol'

import {VirtualElement} from './types'

export function render (vnode: VirtualElement, node: HTMLElement): void {
  const containerProxy: NodeProxy = NodeProxy.fromElement(node)
  const previous: VirtualElement = containerProxy.getAttribute($$root)

  if (isDefined(previous)) {
    previous.destroy()
  }

  batchInsertMessages(queue => {
    vnode.initialize()
    containerProxy.replaceChild(vnode.getNodeProxy(), 0)
    queue.push(vnode)
  })

  containerProxy.setAttribute($$root, vnode)
}