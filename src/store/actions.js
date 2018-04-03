/**
 * Created by Bianrongcheng on 2018
 */
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from './mutation-types'

import {
  reqAddress,
  reqFoodList,
  reqShopList
} from '../api'

export default{
  async getAddress ({commit,state}) {
    const {latitude,longitude} = state;
    const result = await reqAddress(latitude+','+longitude);
    if(result.code ===0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit}){
    const result = await reqFoodList();
    if(result.code ===0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state;
    const result = await reqShopList(latitude,longitude);
    if(result.code===0){
      const shops =result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
