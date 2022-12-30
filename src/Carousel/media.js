// import media1 from "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg";
// import media2 from "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg";
// import media3 from "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg";
// import media4 from "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg";
// import media5 from "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg";
// const media1 = () => {
//   return (
//     <div class="a-section a-spacing-none _cropped-image-link_style_fluidImageContainer__2jd50">
//       <img
//         alt="Join Prime"
//         src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
//       />
//     </div>
//   );
// };

export const media = [
  "https://m.media-amazon.com/images/I/61jTCk6f0UL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png",
  "https://m.media-amazon.com/images/I/61VRFv7mLfL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61jTCk6f0UL._SX3000_.jpg"
];
export const mediaByIndex = (index) => media[index % media.length];
