import { createStartHandler, defaultRenderHandler } from '@tanstack/react-start/server'
import { getWebRequest } from 'vinxi/http'
import { createRouter } from './router'

export default createStartHandler({
  createRouter,
  getWebRequest,
})(defaultRenderHandler)
