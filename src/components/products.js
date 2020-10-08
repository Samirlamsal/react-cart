// const Book_data=[
//   {
//     title:'Behave',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Robert Sapolsky',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Behave',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Robert Sapolsky',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Behave',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Robert Sapolsky',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Behave',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Robert Sapolsky',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Behave',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Robert Sapolsky',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Origin',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Dan Brown',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'Da vinci code',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Dan Brown',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   },
//   {
//     title:'The Winner Stands Alone',
//     image:'./book_images/behave.png',
//     price:'400',
//     author:'Paulo Coelho',
//     description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//   }
// ]


const Book_data = []
fetch('http://127.0.0.1:8000/products/')
.then(response=>response.json())
.then(data=>console.log('Data: ', data))


export default Book_data;
