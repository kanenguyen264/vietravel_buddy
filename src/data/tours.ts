import { Tour } from '../types/tour';

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Tour Ẩm Thực Sài Gòn Đêm',
    location: 'TPHCM',
    category: 'Tour ẩm thực',
    price: 450000,
    duration: '4 giờ',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    rating: 4.8,
    reviewCount: 127,
    description: 'Khám phá tinh hoa ẩm thực đường phố Sài Gòn cùng HDV địa phương. Thưởng thức các món ăn đặc sản từ phở, bánh mì đến chè và cà phê.',
    availableDates: ['2025-01-15', '2025-01-20', '2025-01-25'],
    maxGroupSize: 8,
    included: ['HDV địa phương', 'Tất cả món ăn', 'Nước uống', 'Xe máy/đi bộ'],
    itinerary: [
      {
        day: 1,
        title: 'Khám Phá Ẩm Thực Đêm Sài Gòn',
        description: 'Bắt đầu từ chợ Bến Thành, đi qua các con hẻm để thưởng thức những món ăn đặc sản',
        activities: [
          '6:00 PM - Tập hợp tại chợ Bến Thành',
          '6:30 PM - Thưởng thức bánh mì Huỳnh Hoa',
          '7:30 PM - Phở đêm trên vỉa hè',
          '8:30 PM - Chè cung đình và kem flan',
          '9:30 PM - Kết thúc tại quán cà phê rooftop'
        ]
      }
    ],
    guide: {
      name: 'Anh Minh',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 4.9,
      experience: '5 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English', '中文'],
      specialties: ['Ẩm thực', 'Lịch sử', 'Văn hóa'],
      bio: 'Sinh ra và lớn lên tại Sài Gòn, tôi đam mê chia sẻ những góc ẩm thực độc đáo mà chỉ người địa phương mới biết.',
      verified: true
    },
    reviews: [
      {
        id: '1',
        userName: 'Lan Anh',
        userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        rating: 5,
        comment: 'Tour tuyệt vời! Anh Minh rất am hiểu và nhiệt tình. Các món ăn đều ngon và đặc sắc.',
        date: '2025-01-10',
        helpful: 12
      },
      {
        id: '2',
        userName: 'David Chen',
        userAvatar: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
        rating: 5,
        comment: 'Amazing food tour! Minh knows all the hidden gems. Perfect for first-time visitors.',
        date: '2025-01-08',
        helpful: 8
      },
      {
        id: '3',
        userName: 'Sarah Johnson',
        userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
        rating: 5,
        comment: 'Absolutely loved this tour! The street food was incredible and Minh was such a knowledgeable guide.',
        date: '2025-01-05',
        helpful: 15
      }
    ]
  },
  {
    id: '2',
    title: 'Workshop Làm Gốm Hội An',
    location: 'Đà Nẵng',
    category: 'Workshop',
    price: 320000,
    duration: '3 giờ',
    image: 'https://images.pexels.com/photos/5999764/pexels-photo-5999764.jpeg',
    rating: 4.7,
    reviewCount: 89,
    description: 'Trải nghiệm làm gốm truyền thống tại làng nghề Thanh Hà. Học kỹ thuật nặn gốm cơ bản và tự tay tạo ra sản phẩm của riêng mình.',
    availableDates: ['2025-01-16', '2025-01-22', '2025-01-28'],
    maxGroupSize: 6,
    included: ['HDV chuyên môn', 'Vật liệu làm gốm', 'Trà và bánh kẹo', 'Sản phẩm hoàn thành'],
    itinerary: [
      {
        day: 1,
        title: 'Workshop Làm Gốm Hội An',
        description: 'Học làm gốm từ cơ bản đến nâng cao với nghệ nhân địa phương',
        activities: [
          '2:00 PM - Giới thiệu về lịch sử làng gốm Thanh Hà',
          '2:30 PM - Học kỹ thuật nặn gốm cơ bản',
          '3:30 PM - Thực hành tạo sản phẩm riêng',
          '4:30 PM - Trang trí và hoàn thiện',
          '5:00 PM - Thưởng trà và chia sẻ kinh nghiệm'
        ]
      }
    ],
    guide: {
      name: 'Chị Mai',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      rating: 4.8,
      experience: '8 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English', '日本語'],
      specialties: ['Thủ công mỹ nghệ', 'Văn hóa dân gian', 'Lịch sử'],
      bio: 'Nghệ nhân gốm với hơn 15 năm kinh nghiệm, đam mê chia sẻ nghề truyền thống với du khách quốc tế.',
      verified: true
    },
    reviews: [
      {
        id: '3',
        userName: 'Hương Giang',
        userAvatar: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
        rating: 5,
        comment: 'Workshop rất hay, chị Mai hướng dẫn tận tình. Sản phẩm cuối cùng đẹp hơn mong đợi!',
        date: '2025-01-12',
        helpful: 15
      }
    ]
  },
  {
    id: '3',
    title: 'Trekking Sapa - Chinh Phục Fansipan',
    location: 'Hà Nội',
    category: 'Tour Trekking',
    price: 1250000,
    duration: '2 ngày 1 đêm',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    rating: 4.9,
    reviewCount: 203,
    description: 'Chinh phục đỉnh Fansipan - nóc nhà Đông Dương. Khám phá cảnh đẹp ruộng bậc thang và văn hóa dân tộc thiểu số.',
    availableDates: ['2025-01-18', '2025-01-25', '2025-02-01'],
    maxGroupSize: 12,
    included: ['HDV leo núi chuyên nghiệp', 'Xe đưa đón', 'Bữa ăn', 'Homestay', 'Bảo hiểm'],
    itinerary: [
      {
        day: 1,
        title: 'Hành trình lên Sapa',
        description: 'Di chuyển từ Hà Nội đến Sapa, khám phá bản Cat Cat',
        activities: [
          '6:00 AM - Khởi hành từ Hà Nội',
          '11:00 AM - Nghỉ chân tại Lào Cai',
          '1:00 PM - Đến Sapa, ăn trưa',
          '3:00 PM - Trekking bản Cat Cat',
          '6:00 PM - Về homestay, nghỉ ngơi'
        ]
      },
      {
        day: 2,
        title: 'Chinh phục Fansipan',
        description: 'Leo lên đỉnh núi cao nhất Việt Nam',
        activities: [
          '5:00 AM - Ăn sáng sớm',
          '6:00 AM - Bắt đầu hành trình leo núi',
          '10:00 AM - Đến trạm dừng giữa chừng',
          '1:00 PM - Đạt đỉnh Fansipan',
          '4:00 PM - Trở về Sapa, ăn tối'
        ]
      }
    ],
    guide: {
      name: 'Anh Dũng',
      avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg',
      rating: 4.9,
      experience: '10 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English'],
      specialties: ['Trekking', 'Sinh tồn', 'Địa lý'],
      bio: 'HDV leo núi chuyên nghiệp với hơn 1000 chuyến leo thành công. An toàn luôn được đặt lên hàng đầu.',
      verified: true
    },
    reviews: [
      {
        id: '4',
        userName: 'Tuấn Anh',
        userAvatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
        rating: 5,
        comment: 'Chuyến trekking tuyệt vời! Anh Dũng rất an toàn và chuyên nghiệp. View từ đỉnh Fansipan thật choáng ngợp!',
        date: '2025-01-05',
        helpful: 23
      }
    ]
  }
];

// Thêm các tour mới với HDV đa dạng
const additionalTours: Tour[] = [
  {
    id: '4',
    title: 'Tour Văn Hóa Huế - Khám Phá Cố Đô',
    location: 'Huế',
    category: 'Tour văn hóa',
    price: 680000,
    duration: '1 ngày',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
    rating: 4.8,
    reviewCount: 156,
    description: 'Khám phá di sản văn hóa thế giới tại cố đô Huế với HDV am hiểu lịch sử. Tham quan Đại Nội, lăng tẩm và thưởng thức ẩm thực cung đình.',
    availableDates: ['2025-01-20', '2025-01-27', '2025-02-03'],
    maxGroupSize: 15,
    included: ['HDV lịch sử chuyên nghiệp', 'Vé tham quan', 'Bữa trưa cung đình', 'Xe đưa đón'],
    itinerary: [
      {
        day: 1,
        title: 'Khám Phá Cố Đô Huế',
        description: 'Tham quan các di tích lịch sử quan trọng của triều Nguyễn',
        activities: [
          '8:00 AM - Tham quan Đại Nội và Tử Cấm Thành',
          '10:30 AM - Thăm Điện Thái Hòa và Cung Diên Thọ',
          '12:00 PM - Ăn trưa món cung đình',
          '2:00 PM - Tham quan Lăng Khải Định',
          '4:00 PM - Thăm chùa Thiên Mụ và sông Hương',
          '6:00 PM - Kết thúc tour'
        ]
      }
    ],
    guide: {
      name: 'Thầy Phúc',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.9,
      experience: '15 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English', 'Français'],
      specialties: ['Lịch sử Việt Nam', 'Văn hóa cung đình', 'Kiến trúc cổ'],
      bio: 'Cử nhân Lịch sử, chuyên gia về triều Nguyễn với hơn 15 năm nghiên cứu và hướng dẫn tại Huế.',
      verified: true
    },
    reviews: [
      {
        id: '5',
        userName: 'Minh Tâm',
        userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        rating: 5,
        comment: 'Thầy Phúc rất am hiểu lịch sử, giải thích sinh động. Tour rất bổ ích!',
        date: '2025-01-10',
        helpful: 18
      }
    ]
  },
  {
    id: '5',
    title: 'Tour Thiên Nhiên Phong Nha - Động Thiên Đường',
    location: 'Quảng Bình',
    category: 'Tour thiên nhiên',
    price: 890000,
    duration: '1 ngày',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    rating: 4.7,
    reviewCount: 134,
    description: 'Khám phá kỳ quan thiên nhiên thế giới tại Phong Nha - Kẻ Bàng. Tham quan động Thiên Đường và động Phong Nha với HDV địa chất chuyên nghiệp.',
    availableDates: ['2025-01-19', '2025-01-26', '2025-02-02'],
    maxGroupSize: 20,
    included: ['HDV địa chất', 'Vé tham quan động', 'Thuyền trên sông Chày', 'Bữa trưa', 'Xe đưa đón'],
    itinerary: [
      {
        day: 1,
        title: 'Khám Phá Động Thiên Đường',
        description: 'Tham quan hệ thống hang động đẹp nhất thế giới',
        activities: [
          '7:00 AM - Khởi hành từ Đồng Hới',
          '8:30 AM - Đến Phong Nha, đi thuyền sông Chày',
          '9:30 AM - Tham quan động Phong Nha',
          '11:30 AM - Di chuyển đến động Thiên Đường',
          '1:00 PM - Ăn trưa tại nhà hàng địa phương',
          '2:30 PM - Khám phá động Thiên Đường',
          '5:00 PM - Trở về Đồng Hới'
        ]
      }
    ],
    guide: {
      name: 'Anh Hải',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      rating: 4.8,
      experience: '7 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English'],
      specialties: ['Địa chất', 'Hang động', 'Sinh thái'],
      bio: 'Kỹ sư địa chất, chuyên gia về hệ thống hang động Phong Nha - Kẻ Bàng, đam mê khám phá thiên nhiên.',
      verified: true
    },
    reviews: [
      {
        id: '6',
        userName: 'Thanh Hương',
        userAvatar: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
        rating: 5,
        comment: 'Anh Hải giải thích rất hay về địa chất. Động Thiên Đường thật kỳ vĩ!',
        date: '2025-01-08',
        helpful: 22
      }
    ]
  },
  {
    id: '6',
    title: 'Workshop Nấu Ăn Hà Nội - Bún Chả & Phở',
    location: 'Hà Nội',
    category: 'Workshop',
    price: 420000,
    duration: '4 giờ',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    rating: 4.9,
    reviewCount: 98,
    description: 'Học nấu những món ăn đặc trưng Hà Nội từ đầu bếp chuyên nghiệp. Tự tay làm bún chả, phở và nem rán.',
    availableDates: ['2025-01-17', '2025-01-24', '2025-01-31'],
    maxGroupSize: 8,
    included: ['Đầu bếp hướng dẫn', 'Nguyên liệu nấu ăn', 'Dụng cụ nấu ăn', 'Bữa ăn hoàn thành'],
    itinerary: [
      {
        day: 1,
        title: 'Workshop Nấu Ăn Hà Nội',
        description: 'Học nấu các món ăn truyền thống Hà Nội',
        activities: [
          '9:00 AM - Giới thiệu về ẩm thực Hà Nội',
          '9:30 AM - Chuẩn bị nguyên liệu làm phở',
          '10:30 AM - Nấu nước dùng phở',
          '11:30 AM - Làm bún chả và nem rán',
          '12:30 PM - Thưởng thức thành quả',
          '1:00 PM - Chia sẻ kinh nghiệm và kết thúc'
        ]
      }
    ],
    guide: {
      name: 'Chị Lan',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      rating: 4.9,
      experience: '12 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English', '中文'],
      specialties: ['Ẩm thực Bắc Bộ', 'Nấu ăn truyền thống', 'Văn hóa ẩm thực'],
      bio: 'Đầu bếp chuyên nghiệp, chuyên gia ẩm thực Hà Nội với hơn 20 năm kinh nghiệm trong nghề.',
      verified: true
    },
    reviews: [
      {
        id: '7',
        userName: 'Emma Watson',
        userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
        rating: 5,
        comment: 'Amazing cooking class! Chef Lan is so patient and knowledgeable. The pho was delicious!',
        date: '2025-01-12',
        helpful: 16
      }
    ]
  },
  {
    id: '7',
    title: 'Tour Mekong Delta - Cần Thơ Floating Market',
    location: 'Cần Thơ',
    category: 'Tour văn hóa',
    price: 550000,
    duration: '1 ngày',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    rating: 4.6,
    reviewCount: 187,
    description: 'Khám phá đồng bằng sông Cửu Long với chợ nổi Cái Răng, vườn trái cây và làng nghề truyền thống.',
    availableDates: ['2025-01-21', '2025-01-28', '2025-02-04'],
    maxGroupSize: 12,
    included: ['HDV địa phương', 'Thuyền tham quan', 'Bữa trưa miệt vườn', 'Trái cây tươi', 'Xe đưa đón'],
    itinerary: [
      {
        day: 1,
        title: 'Khám Phá Đồng Bằng Sông Cửu Long',
        description: 'Trải nghiệm cuộc sống sông nước miền Tây',
        activities: [
          '6:00 AM - Đi thuyền tham quan chợ nổi Cái Răng',
          '8:00 AM - Thưởng thức cà phê sữa đá trên sông',
          '9:30 AM - Tham quan vườn trái cây',
          '11:00 AM - Thăm làng nghề kẹo dừa',
          '12:30 PM - Ăn trưa đặc sản miệt vườn',
          '2:00 PM - Đi thuyền khám phá rạch nhỏ',
          '4:00 PM - Trở về Cần Thơ'
        ]
      }
    ],
    guide: {
      name: 'Anh Tám',
      avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg',
      rating: 4.7,
      experience: '9 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English'],
      specialties: ['Văn hóa miệt vườn', 'Nông nghiệp', 'Đời sống sông nước'],
      bio: 'Sinh ra và lớn lên tại Cần Thơ, am hiểu sâu sắc về văn hóa và đời sống người dân miệt vườn.',
      verified: true
    },
    reviews: [
      {
        id: '8',
        userName: 'Phương Anh',
        userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        rating: 5,
        comment: 'Anh Tám rất thân thiện và hiểu biết. Chợ nổi và vườn trái cây rất thú vị!',
        date: '2025-01-06',
        helpful: 14
      }
    ]
  },
  {
    id: '8',
    title: 'Tour Nhiếp Ảnh Đà Lạt - Golden Hour',
    location: 'Đà Lạt',
    category: 'Tour nhiếp ảnh',
    price: 380000,
    duration: '6 giờ',
    image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
    rating: 4.8,
    reviewCount: 76,
    description: 'Tour nhiếp ảnh chuyên nghiệp tại Đà Lạt với HDV photographer. Chụp ảnh sunrise, cảnh đẹp và hoa.',
    availableDates: ['2025-01-18', '2025-01-25', '2025-02-01'],
    maxGroupSize: 6,
    included: ['Photographer HDV', 'Hướng dẫn kỹ thuật', 'Edit ảnh cơ bản', 'Xe đưa đón', 'Ăn sáng'],
    itinerary: [
      {
        day: 1,
        title: 'Tour Nhiếp Ảnh Golden Hour',
        description: 'Chụp ảnh những khoảnh khắc đẹp nhất Đà Lạt',
        activities: [
          '5:00 AM - Khởi hành chụp sunrise tại đồi chè',
          '6:30 AM - Golden hour photography',
          '8:00 AM - Ăn sáng và nghỉ ngơi',
          '9:30 AM - Chụp ảnh tại vườn hoa',
          '11:00 AM - Portrait session tại hồ Xuân Hương',
          '12:30 PM - Review và edit ảnh',
          '1:30 PM - Kết thúc tour'
        ]
      }
    ],
    guide: {
      name: 'Anh Quang',
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      rating: 4.9,
      experience: '6 năm kinh nghiệm',
      languages: ['Tiếng Việt', 'English'],
      specialties: ['Landscape photography', 'Portrait', 'Golden hour'],
      bio: 'Photographer chuyên nghiệp, chuyên chụp ảnh du lịch và cảnh quan. Đã có nhiều tác phẩm được xuất bản.',
      verified: true
    },
    reviews: [
      {
        id: '9',
        userName: 'Khánh Linh',
        userAvatar: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
        rating: 5,
        comment: 'Anh Quang chụp ảnh rất đẹp và hướng dẫn tận tình. Những bức ảnh tuyệt vời!',
        date: '2025-01-09',
        helpful: 19
      }
    ]
  }
];

// Merge với tours hiện tại
export const allTours = [...tours, ...additionalTours];