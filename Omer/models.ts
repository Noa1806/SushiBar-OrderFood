function uId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//class of an item
class Item {
    public img;
    public id: string;
    constructor(public name: string, public details: string, img: string, public price: number) {
        this.id = uId();

        if (img) {
            this.img = img;
        } else {
            this.img = "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528";
        }
    }
}