import Images from "../images/Images";

export const productsArr1 = [
  {
    id: "p1",
    title: "Headphones",
    imageUrl : "https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/1a0f6d85-33a6-4d86-a295-8c91cd4ff0a5/2.png",
    price: 50,
  },

  {
    id: "p2",
    title: "iPhone",
    imageUrl : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
    price: 500,
  },

  {
    id: "p3",
    title: "Refrigerator",
    imageUrl : "https://www.sathya.store/img/category/YSR5reFe4jPMZvX6.jpg",
    price: 700,
  },

  {
    id: "p4",
    title: "Horse Painting",
    imageUrl : "https://i.pinimg.com/originals/14/53/9d/14539d364b9b8d889480167436e918e0.jpg",
    price: 100,
  },
];
const productsArr = [
  {
    id: "p1",
    title: "Headphones",
    imagesArray: [Images.p11, Images.p12, Images.p13, Images.p14],

    price: 50,
  },

  {
    id: "p2",
    title: "iPhone",
    imagesArray: [Images.p21, Images.p22, Images.p23, Images.p24],

    price: 500,
  },

  {
    id: "p3",
    title: "Refrigerator",
    imagesArray: [Images.p31, Images.p32, Images.p33, Images.p34],

    price: 700,
  },

  {
    id: "p4",
    title: "Horse Painting",
    imagesArray: [Images.p41, Images.p42, Images.p43, Images.p44],

    price: 100,
  },
];

export default productsArr;