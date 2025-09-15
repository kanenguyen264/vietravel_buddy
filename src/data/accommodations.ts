export interface Accommodation {
  id: string;
  name: string;
  type: 'resort' | 'hotel' | 'homestay';
  city: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  amenities: string[];
  address: string;
  phone: string;
  email: string;
  features: string[];
  reviews: {
    id: string;
    userName: string;
    userAvatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const accommodations: Accommodation[] = [
  // TPHCM
  {
    id: '1',
    name: 'Sheraton Saigon Hotel & Towers',
    type: 'hotel',
    city: 'TPHCM',
    price: 2800000,
    originalPrice: 3200000,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    rating: 4.8,
    reviewCount: 1247,
    description: 'Khách sạn 5 sao sang trọng tại trung tâm Sài Gòn với view sông tuyệt đẹp',
    amenities: ['WiFi miễn phí', 'Hồ bơi', 'Spa', 'Gym', 'Nhà hàng', 'Bar'],
    address: '88 Đồng Khởi, Quận 1, TPHCM',
    phone: '028 3827 2828',
    email: 'reservations.saigon@sheraton.com',
    features: ['View sông Sài Gòn', 'Trung tâm thành phố', 'Dịch vụ 5 sao'],
    reviews: [
      {
        id: '1',
        userName: 'Minh Châu',
        userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        rating: 5,
        comment: 'Khách sạn tuyệt vời! Phòng sạch sẽ, view đẹp và dịch vụ chuyên nghiệp.',
        date: '2025-01-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Saigon Skydeck Homestay',
    type: 'homestay',
    city: 'TPHCM',
    price: 450000,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    rating: 4.6,
    reviewCount: 89,
    description: 'Homestay ấm cúng với view toàn cảnh thành phố từ tầng cao',
    amenities: ['WiFi miễn phí', 'Bếp riêng', 'Máy giặt', 'Ban công'],
    address: 'Quận 1, TPHCM',
    phone: '0901 234 567',
    email: 'saigonsky@gmail.com',
    features: ['View thành phố', 'Gần trung tâm', 'Giá tốt'],
    reviews: [
      {
        id: '2',
        userName: 'David Kim',
        userAvatar: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
        rating: 5,
        comment: 'Amazing view and very friendly host! Perfect location.',
        date: '2025-01-08'
      }
    ]
  },
  // Đà Nẵng
  {
    id: '3',
    name: 'InterContinental Danang Sun Peninsula Resort',
    type: 'resort',
    city: 'Đà Nẵng',
    price: 4500000,
    originalPrice: 5200000,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    rating: 4.9,
    reviewCount: 892,
    description: 'Resort 5 sao đẳng cấp thế giới trên bán đảo Sơn Trà với thiết kế độc đáo',
    amenities: ['Bãi biển riêng', 'Spa', 'Golf', 'Hồ bơi vô cực', '4 nhà hàng', 'Kids club'],
    address: 'Bãi Bắc, Sơn Trà, Đà Nẵng',
    phone: '0236 393 8888',
    email: 'danang@ihg.com',
    features: ['Thiết kế độc đáo', 'Bãi biển riêng', 'Dịch vụ đẳng cấp'],
    reviews: [
      {
        id: '3',
        userName: 'Lan Phương',
        userAvatar: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
        rating: 5,
        comment: 'Resort tuyệt vời nhất từng ở! Thiết kế đẹp, dịch vụ hoàn hảo.',
        date: '2025-01-05'
      }
    ]
  },
  {
    id: '4',
    name: 'Danang Golden Bay Hotel',
    type: 'hotel',
    city: 'Đà Nẵng',
    price: 1200000,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    rating: 4.5,
    reviewCount: 456,
    description: 'Khách sạn 4 sao hiện đại gần biển Mỹ Khê với đầy đủ tiện nghi',
    amenities: ['Hồ bơi', 'Spa', 'Nhà hàng', 'Gym', 'WiFi miễn phí'],
    address: '01 Lê Văn Duyệt, Đà Nẵng',
    phone: '0236 392 9999',
    email: 'info@dananggoldenbay.com',
    features: ['Gần biển Mỹ Khê', 'Tiện nghi hiện đại', 'Giá hợp lý'],
    reviews: [
      {
        id: '4',
        userName: 'Tuấn Minh',
        userAvatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
        rating: 4,
        comment: 'Khách sạn tốt, gần biển, nhân viên thân thiện.',
        date: '2025-01-12'
      }
    ]
  },
  // Hà Nội
  {
    id: '5',
    name: 'Lotte Hotel Hanoi',
    type: 'hotel',
    city: 'Hà Nội',
    price: 2200000,
    originalPrice: 2600000,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    rating: 4.7,
    reviewCount: 1089,
    description: 'Khách sạn 5 sao cao cấp tại trung tâm Hà Nội với tầm nhìn toàn cảnh',
    amenities: ['Spa', 'Hồ bơi', 'Executive Lounge', 'Nhà hàng Michelin', 'Gym'],
    address: '54 Liễu Giai, Ba Đình, Hà Nội',
    phone: '024 3333 1000',
    email: 'info@lotte.com.vn',
    features: ['Trung tâm Hà Nội', 'View toàn cảnh', 'Dịch vụ cao cấp'],
    reviews: [
      {
        id: '5',
        userName: 'Thu Hà',
        userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
        rating: 5,
        comment: 'Khách sạn đẳng cấp, phòng đẹp, ăn uống ngon.',
        date: '2025-01-07'
      }
    ]
  },
  {
    id: '6',
    name: 'Hanoi Old Quarter Homestay',
    type: 'homestay',
    city: 'Hà Nội',
    price: 350000,
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    rating: 4.4,
    reviewCount: 234,
    description: 'Homestay truyền thống giữa lòng phố cổ Hà Nội',
    amenities: ['WiFi miễn phí', 'Bếp chung', 'Sân thượng', 'Xe đạp miễn phí'],
    address: 'Phố cổ Hà Nội',
    phone: '0912 345 678',
    email: 'hanoioldquarter@gmail.com',
    features: ['Giữa lòng phố cổ', 'Trải nghiệm địa phương', 'Giá rẻ'],
    reviews: [
      {
        id: '6',
        userName: 'James Wilson',
        userAvatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg',
        rating: 4,
        comment: 'Great location in Old Quarter. Authentic experience!',
        date: '2025-01-09'
      }
    ]
  },
  // Phan Thiết
  {
    id: '7',
    name: 'Anantara Mui Ne Resort',
    type: 'resort',
    city: 'Phan Thiết',
    price: 3800000,
    originalPrice: 4300000,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    rating: 4.8,
    reviewCount: 567,
    description: 'Resort sang trọng bên bờ biển Mũi Né với kiến trúc Việt Nam đương đại',
    amenities: ['Bãi biển riêng', 'Spa Anantara', 'Hồ bơi', 'Nhà hàng', 'Water sports'],
    address: 'Mũi Né, Phan Thiết',
    phone: '0252 374 1888',
    email: 'muine@anantara.com',
    features: ['Bãi biển đẹp', 'Kiến trúc độc đáo', 'Dịch vụ 5 sao'],
    reviews: [
      {
        id: '7',
        userName: 'Hoàng Nam',
        userAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        rating: 5,
        comment: 'Resort tuyệt vời! Bãi biển đẹp, phòng sang trọng.',
        date: '2025-01-06'
      }
    ]
  },
  // Nha Trang
  {
    id: '8',
    name: 'InterContinental Nha Trang',
    type: 'hotel',
    city: 'Nha Trang',
    price: 2600000,
    originalPrice: 3000000,
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg',
    rating: 4.6,
    reviewCount: 789,
    description: 'Khách sạn 5 sao đẳng cấp quốc tế ngay trung tâm Nha Trang',
    amenities: ['Hồ bơi vô cực', 'Spa', 'Nhà hàng', 'Bar rooftop', 'Gym'],
    address: '32-34 Trần Phú, Nha Trang',
    phone: '0258 388 7777',
    email: 'nhatrang@ihg.com',
    features: ['Trung tâm Nha Trang', 'View biển đẹp', 'Tiện nghi cao cấp'],
    reviews: [
      {
        id: '8',
        userName: 'Mai Linh',
        userAvatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
        rating: 5,
        comment: 'Khách sạn đẹp, view biển tuyệt vời, dịch vụ tốt.',
        date: '2025-01-11'
      }
    ]
  }
];