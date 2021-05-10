// import {api}  from "./request.js"
// /**
//  * 请求的方式大写
//  * */ 

// export const listArrlist= (params,util)=>api( '/api/get/getCoo', 'POST',params,util); 

import request from './request.js' 

export function getCatNews(data){ 
	return request({
	    url: '/api/getCatNews',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 
export function searchExchangeRate(data){ 
	return request({
	    url: '/api/searchExchangeRate',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 

export const getDeviceId = (data)=> { 
	return request({
	    url: '/api/getDeviceId',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 

export const addExchangeRateList = (data)=> { 
	return request({
	    url: '/api/addExchangeRateList',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 

export const getAllExchangeRate = (data)=> { 
	return request({
	    url: '/api/getAllExchangeRate',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 

export const upExchangeRate = (data)=> { 
	return request({
	    url: '/api/upExchangeRate',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 
export const deleteExchangeRate = (data)=> { 
	return request({
	    url: '/api/deleteExchangeRate',
		method: 'post',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 }) 
} 




