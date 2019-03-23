/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-23 12:57:49 
 * Last modified  : 2019-03-23 13:45:50
 */

import navConfig from '../Nav/navConfig'

const routerConfig = navConfig.reduce((total, current) => {
    if(current.children){
        return [...total, ...current.children]
    }else{
        return [...total, current]
    }
}, [])

export default routerConfig