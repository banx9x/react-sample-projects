export const data = {
  categories: [
    {
      id: 1,
      name: 'Men',
    },
    {
      id: 2,
      name: 'Women',
    },
    {
      id: 3,
      name: 'Kid',
    },
  ],
  products: [
    {
      id: 1,
      categoryId: 3,
      title: 'Áo sơ mi bé gái',
      price: 120000,
      promo: 30,
      description: 'Áo bé gái cực kỳ xinh xắn',
      thumbnail: 'images/ao-so-mi-be-gai-01.png',
      images: [
        'images/ao-so-mi-be-gai-01.png',
        'images/ao-so-mi-be-gai-02.png',
        'images/ao-so-mi-be-gai-03.png',
      ],
    },
    // {
    //   id: 1,
    //   categoryId: 3,
    //   name: 'Áo sơ mi cho bé gái',
    //   price: 120000,
    //   thumbnail: 'images/ao-so-mi-be-gai.png',
    // },
    // {
    //   id: 2,
    //   categoryId: 3,
    //   name: 'Áo T-Shirt cho bé gái',
    //   price: 399999,
    //   thumbnail: 'images/ao-t-shirt-be-gai.png',
    // },
    // {
    //   id: 3,
    //   categoryId: 3,
    //   name: 'Quần short cho bé gái',
    //   price: 349999,
    //   thumbnail: 'images/quan-short-be-gai.png',
    // },
    // {
    //   id: 4,
    //   categoryId: 2,
    //   name: 'Áo giữ nhiệt cổ tròn cho nữ',
    //   price: 599999,
    //   thumbnail: 'images/ao-giu-nhiet-co-tron.png',
    // },
    // {
    //   id: 5,
    //   categoryId: 2,
    //   name: 'Đầm nữ sát nách dáng ôm',
    //   price: 999999,
    //   thumbnail: 'images/dam-nu-sat-nach-dang-om.png',
    // },
    // {
    //   id: 6,
    //   categoryId: 3,
    //   name: 'Áo khoác lông cừu không tay cho bé',
    //   price: 299999,
    //   thumbnail: 'images/ao-khoac-long-cuu-khong-tay.png',
    // },
    // {
    //   id: 7,
    //   categoryId: 3,
    //   name: 'Đầm sát nách cho bé gái',
    //   price: 199999,
    //   thumbnail: 'images/dam-sat-nach-be-gai.png',
    // },
  ],
  users: [
    {
      id: 1,
      username: 'banx',
      password: '123456',
      fullname: 'Ba Nguyễn',
      address: {
        city: 'Hà Nội',
        district: 'Cầu Giấy',
        ward: 'Mai Dịch',
        street: 'Số 36, ngõ 22, phố Phạm Thận Duật',
      },
      avatar: '',
    },
  ],
};
