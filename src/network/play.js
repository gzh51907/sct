import { get } from 'network'
export async function playBannerData() {
    return await get('rs/banner?status=1&category=2&page=1&size=10&order=create_time+desc&_=1570351778634');
}

export async function playLogoData() {
    return await get('rs/playscroll_config?status=1&order=order_code+desc&_=1570351778636');
}