import { buildProps } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export const signBoardProps = buildProps({
  /**
   *  @description 签名板的宽度
   */
  width: {
    type: String,
    default: '100%',
  },
  /**
   * @description 签名板的高度
   */
  height: {
    type: String,
    default: '100%',
  },
  /**
   * @description 签名的颜色，只支持css命名的颜色值
   */
  textColor: {
    type: String,
    default: '#080808',
  },
  /**
   * @description 禁止使用签名板
   */
  disabled: Boolean,
})

export type SignBoardProps = ExtractPropTypes<typeof signBoardProps>
