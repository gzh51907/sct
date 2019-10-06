import { get } from 'network'
// 请求轮播图和评价的数据
export async function  homeMultidate() {   
    return await get('rs/main_page?_=1569941354771');   
}

export async function hotel_com_asc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=synthetical+asc%2Ccreate_time+asc&_=1570197448796');
}

export async function hotel_com_desc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=synthetical+desc%2Ccreate_time+asc&_=1570197448797');
}

export async function hotel_sell_asc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=sale_count+asc%2Ccreate_time+asc&_=1570197448798');
}

export async function hotel_sell_desc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=sale_count+desc%2Ccreate_time+asc&_=1570197448799');
}

export async function hotel_distance_asc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=cistance+asc%2Ccreate_time+asc&_=1570197448800');
}

export async function hotel_distance_desc(){
    return await get('rs/v_comp_index?status=1&latitude=23.1200491&longitude=113.30764968&order=cistance+desc%2Ccreate_time+asc&_=1570197448801');
}