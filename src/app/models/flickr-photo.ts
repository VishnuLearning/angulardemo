export class FlickrPhoto {
    url: string;
    name: string;

    constructor(photo) {
        this.url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;
        this.name = photo.title;
    }
}