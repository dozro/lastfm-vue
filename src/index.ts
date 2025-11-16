import type { App } from 'vue'
import components from './components'

function install(app: App) {
  (Object.keys(components) as Array<keyof typeof components>)
    .forEach(key => {
      app.component(key, components[key])
    })
}


export default { install }

export * from './components'
export * from './scripts'
