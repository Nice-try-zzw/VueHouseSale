import { globalConfig, serverUrl } from './api';
import type { RentForm, SellForm } from '@/api/request';
import type { AddRentResponse, AddSellResponse, DeleteRentInfoByIdResponse, GetAllRentInfoByUserIdResponse, GetAllRentInfoResponse, GetAllSellInfoByUserIdResponse, GetAllSellInfoResponse, GetSellInfoByIdResponse } from '@/api/response';

import { useUserStore } from '@/stores/user';

import axios, { type AxiosResponse } from 'axios';

enum Api {
  AddRent = '/rent/info/add',
  GetAllRentInfoByUserId = '/rent/info/allById',
  GetAllRentInfo = '/rent/info/all',
  DeleteRentInfoById = '/rent/info/delete',

}

/**
 * 添加出租信息
 * @param form 出租信息表单
 */
export function addRent(form: RentForm): Promise<AxiosResponse<AddRentResponse>> {
  const config = {
    ...globalConfig,
    headers: {
      Authorization: useUserStore().authorization,
    }
  }

  return axios.post(`${serverUrl}${Api.AddRent}`, form, config);
}

/**
 * 获取指定用户id的所有出租信息
 * @param userId 用户id
 */
export function getAllRentInfoByUserId(userId: number): Promise<AxiosResponse<GetAllRentInfoByUserIdResponse>> {
  const config = {
    ...globalConfig,
    params: {
      id: userId,
    },
    headers: {
      Authorization: useUserStore().authorization,
    }
  }

  return axios.get(`${serverUrl}${Api.GetAllRentInfoByUserId}`, config);
}

/**
 * 获取所有出租信息
 */
export function getAllRentInfo(): Promise<AxiosResponse<GetAllRentInfoResponse>> {
  const config = {
    ...globalConfig,
    headers: {
      Authorization: useUserStore().authorization,
    }
  }

  return axios.get(`${serverUrl}${Api.GetAllRentInfo}`, config);
}

/**
 * 删除指定id的出租信息
 * @param rentId 出租信息id
 */
export function deleteRentInfoById(rentId: number): Promise<AxiosResponse<DeleteRentInfoByIdResponse>> {
  const config = {
    ...globalConfig,
    params: {
      id: rentId,
    },
    headers: {
      Authorization: useUserStore().authorization,
    }
  }

  return axios.delete(`${serverUrl}${Api.DeleteRentInfoById}`, config);
}