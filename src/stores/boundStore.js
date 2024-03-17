import { create } from 'zustand'
import todoStore from './todoStore'
import userStore from './userStore'

const useBoundStore = create((...a) => ({
  ...todoStore(...a),
  ...userStore(...a),
}))

export default useBoundStore