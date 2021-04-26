import {ElMessage} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { IMessage } from 'element-plus/lib/el-message/src/types'
import { SFCWithInstall } from 'element-plus/lib/utils/types'

export default (app: { use: (arg0: SFCWithInstall<IMessage>) => void }) => {
    locale.use(lang)
    app.use(ElMessage)

}
