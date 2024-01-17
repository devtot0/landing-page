import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "300+", label: "species" },
  { value: "3", label: "Shops" },
  { value: "10k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Monstera deliciosa",
    price: "$99.00",
  },
  {
    imgURL: shoe5,
    name: "Hoya carnosa",
    price: "$50.00",
  },
  {
    imgURL: shoe6,
    name: "Hibiscus rosa-sinensis",
    price: "$20.99",
  },
  {
    imgURL: shoe7,
    name: "Ficus elastica",
    price: "$49.99",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Shipping",
    subtext: "Enjoy quick and free delivery right to your doorstep",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Our payments are secured by a third party vendor.",
  },
  {
    imgURL: support,
    label: "Consumer Care",
    subtext:
      "Our resourceful and  dedicated staff is here to assist you and to answer all your questions.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ann Brown",
    rating: 4.5,
    feedback:
      "This is my go-to place for getting my favourite plants. Excellent customer is ensured always.",
  },
  {
    imgURL: customer2,
    customerName: "Mark Smith",
    rating: 4.5,
    feedback:
      "I love this shop so much, they always go an extra mile to make the customer content",
  },
];

export const footerLinks = [
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@plantasia.com", link: "mailto:customer@plantasia.com" },
      { name: "+0123456789", link: "tel:+0123456789" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
