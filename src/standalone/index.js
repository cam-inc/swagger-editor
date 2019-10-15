import TopbarPlugin from "plugins/topbar"
import StandaloneLayout from "./standalone-layout"

let StandaloneLayoutPlugin = function() {
  return {
    components: {
      StandaloneLayout
    }
  }
}

export default function () {
  return [
    TopbarPlugin,
    StandaloneLayoutPlugin
  ]
}
