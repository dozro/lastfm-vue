import type { App } from 'vue'
import components from './components'

import {lib} from './scripts/index'
import {vuelib} from './components/index'

import './style/scss/main.module.scss';

function install(app: App) {
  (Object.keys(components) as Array<keyof typeof components>)
    .forEach(key => {
      app.component(key, components[key])
    })
}


export default { install }

export const ts_lib = lib;

export const vue_component_lib = vuelib;

export * from './components'
export * from './scripts'
