export interface UMKM {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  address: string;
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  filter: string;
  socialMedia?: string;
}

export const umkmData: UMKM[] = [
  {
    id: 1,
    name: "Soto Ayam Pak Nur",
    description: "Soto Ayam Pak Nur merupakan salah satu kuliner khas Surabaya yang menawarkan cita rasa autentik.",
    fullDescription:
      "Soto Ayam Pak Nur merupakan salah satu kuliner khas Surabaya yang menawarkan cita rasa autentik dengan kuah bening gurih, suwiran ayam lembut, serta tambahan koya yang menambah kekayaan rasa. Tempat makan ini menjadi pilihan banyak warga sekitar untuk sarapan maupun makan siang karena penyajiannya cepat, rasa yang konsisten, serta harga yang terjangkau. Dengan suasana sederhana namun nyaman, Soto Ayam Pak Nur berhasil mempertahankan cita rasa tradisional yang selalu dirindukan oleh para pelanggan.",
    address: "Jl. Ketintang No.117, Wonokromo, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/1/thumbnail.png",
    gallery: ["/foto_umkm/1/pict_1.png", "/foto_umkm/1/pict_2.png", "/foto_umkm/1/pict_3.png"],
    coordinates: { lat: -7.309582759537848, lng: 112.72871834328097 },
    filter: "Kuliner",
  },
  {
    id: 2,
    name: "Hi Me Hair & Beauty Salon",
    description: "Hi Me Hair & Beauty Salon hadir sebagai tempat perawatan rambut dan kecantikan yang menawarkan pelayanan profesional.",
    fullDescription:
      "Hi Me Hair & Beauty Salon hadir sebagai tempat perawatan rambut dan kecantikan yang menawarkan pelayanan profesional dengan suasana yang bersih dan modern. Salon ini menyediakan berbagai layanan, mulai dari potong rambut, hair treatment, pewarnaan, hingga perawatan wajah dengan produk berkualitas tinggi. Dengan tenaga ahli yang berpengalaman dan pelayanan yang ramah, Hi Me menjadi pilihan tepat bagi siapa pun yang ingin tampil lebih percaya diri sekaligus menikmati waktu perawatan diri yang menenangkan.",
    address: "Jl. Ketintang No.115, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur 60235",
    image: "/foto_umkm/2/thumbnail.png",
    gallery: ["/foto_umkm/2/pict_1.png", "/foto_umkm/2/pict_2.png", "/foto_umkm/2/pict_3.png", "/foto_umkm/2/pict_4.png", "/foto_umkm/2/pict_5.png", "/foto_umkm/2/pict_6.png"],
    coordinates: { lat: -7.3095535225897175, lng: 112.72862587130307 },
    filter: "Kecantikan",
    socialMedia: "https://sites.google.com/view/himebeauty", // Ditambahkan
  },
  {
    id: 3,
    name: "Ayam Mandi Sarjana",
    description: "Ayam Mandi menghadirkan pengalaman kuliner unik dengan cita rasa khas Timur Tengah yang autentik.",
    fullDescription:
      "Ayam Mandi menghadirkan pengalaman kuliner unik dengan cita rasa khas Timur Tengah yang autentik. Menu andalannya berupa ayam panggang berbumbu rempah-rempah pilihan disajikan bersama nasi gurih dan sambal yang menggugah selera. Dengan porsi yang melimpah dan rasa yang kuat, tempat makan ini menjadi destinasi favorit bagi pecinta masakan berbasis rempah. Suasana tempat yang bersih dan nyaman menjadikannya cocok untuk makan bersama keluarga atau teman.",
    address: "Jl. Ketintang No.99, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur 60243",
    image: "/foto_umkm/3/thumbnail.png",
    gallery: ["/foto_umkm/3/pict_1.png", "/foto_umkm/3/pict_2.png", "/foto_umkm/3/pict_3.png", "/foto_umkm/3/pict_4.png", "/foto_umkm/3/pict_5.png"],
    coordinates: { lat: -7.309292352448106, lng: 112.7283048823644 },
    filter: "Kuliner",
    socialMedia: "https://www.instagram.com/ayammandisarjana/tagged/", // Ditambahkan
  },
  {
    id: 4,
    name: "Toko Rizky Jaya Camilan Ketintang",
    description: "Toko Rizky Jaya merupakan toko camilan yang menyediakan berbagai jenis makanan ringan khas Nusantara.",
    fullDescription:
      "Toko Rizky Jaya merupakan toko camilan yang menyediakan berbagai jenis makanan ringan khas Nusantara, mulai dari keripik, kacang, hingga aneka jajanan tradisional. Seluruh produk disajikan dengan kualitas terjaga dan harga yang bersahabat, menjadikannya pilihan ideal untuk oleh-oleh atau stok camilan di rumah. Dengan pelayanan yang ramah dan lokasi yang strategis di kawasan Ketintang, toko ini telah menjadi tempat favorit masyarakat sekitar dalam memenuhi kebutuhan camilan sehari-hari.",
    address: "Jl. Ketintang No.115, Wonokromo, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/4/thumbnail.png",
    gallery: ["/foto_umkm/4/pict_1.png", "/foto_umkm/4/pict_2.png", "/foto_umkm/4/pict_3.png", "/foto_umkm/4/pict_4.png"],
    coordinates: { lat: -7.309574828372756, lng: 112.72869921739012 },
    filter: "Kuliner",
  },
  {
    id: 5,
    name: "Bakso Solo & Mie Ayam Pak Salam",
    description: "Bakso Solo & Mie Ayam menawarkan cita rasa khas Solo yang autentik dengan kuah kaldu gurih.",
    fullDescription:
      "Bakso Solo & Mie Ayam menawarkan cita rasa khas Solo yang autentik dengan kuah kaldu gurih, bakso kenyal, dan mie lembut yang berpadu sempurna. Tempat ini dikenal karena konsistensi rasa dan kesegaran bahan yang digunakan setiap harinya. Selain menu utama, tersedia juga berbagai pilihan tambahan seperti pangsit goreng dan tahu bakso. Dengan harga terjangkau dan suasana yang sederhana namun nyaman, tempat ini menjadi destinasi favorit masyarakat sekitar untuk menikmati hidangan tradisional Indonesia.",
    address: "Jl. Ketintang No.155, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur 60243",
    image: "/foto_umkm/5/thumbnail.png",
    gallery: ["/foto_umkm/5/pict_1.png", "/foto_umkm/5/pict_2.png", "/foto_umkm/5/pict_3.png", "/foto_umkm/5/pict_4.png", "/foto_umkm/5/pict_5.png", "/foto_umkm/5/pict_6.png"],
    coordinates: { lat: -7.309627679177407, lng: 112.73059468220875 },
    filter: "Kuliner",
  },
  {
    id: 6,
    name: "Martabak Jadoel",
    description: "Martabak Jadoel menghadirkan cita rasa klasik yang tak lekang oleh waktu.",
    fullDescription:
      "Martabak Jadoel menghadirkan cita rasa klasik yang tak lekang oleh waktu. Dengan resep tradisional dan bahan berkualitas, martabak manis dan martabak telurnya memiliki tekstur lembut serta aroma khas yang menggoda selera. Pilihan topping yang beragam seperti cokelat, keju, dan kacang menjadikannya favorit bagi berbagai kalangan. Suasana penjualannya yang sederhana justru menambah kesan nostalgia bagi pelanggan yang ingin menikmati jajanan malam khas Indonesia.",
    address: "Jl. Ketintang No.153, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur 60243",
    image: "/foto_umkm/6/thumbnail.png",
    gallery: ["/foto_umkm/6/pict_1.png", "/foto_umkm/6/pict_2.png", "/foto_umkm/6/pict_3.png"],
    coordinates: { lat: -7.309616793837938, lng: 112.73048947671694 },
    filter: "Kuliner",
  },
  {
    id: 7,
    name: "Prima Fotocopy",
    description: "Prima Fotocopy merupakan layanan percetakan dan fotokopi yang menyediakan berbagai kebutuhan dokumen.",
    fullDescription:
      "Prima Fotocopy merupakan layanan percetakan dan fotokopi yang menyediakan berbagai kebutuhan dokumen, mulai dari print, scan, hingga laminating dan penjilidan. Dikenal karena kecepatan layanan serta hasil cetak yang rapi, tempat ini menjadi pilihan utama bagi mahasiswa, pelajar, maupun pekerja di sekitar Ketintang. Dengan harga yang kompetitif dan pelayanan ramah, Prima Fotocopy selalu berkomitmen memberikan hasil terbaik bagi pelanggan.",
    address: "Jl. Ketintang No.172, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/7/thumbnail.png",
    gallery: ["/foto_umkm/7/pict_1.png", "/foto_umkm/7/pict_2.png", "/foto_umkm/7/pict_3.png", "/foto_umkm/7/pict_4.png", "/foto_umkm/7/pict_5.png", "/foto_umkm/7/pict_6.png"],
    coordinates: { lat: -7.309802176009869, lng: 112.7311378430574 },
    filter: "ATK",
  },
  {
    id: 8,
    name: "Angsle dan Ronde Burjo Pak Eko",
    description: "Angsle dan Ronde Burjo Pak Eko merupakan kedai legendaris yang dikenal dengan minuman tradisional.",
    fullDescription:
      "Angsle dan Ronde Burjo Pak Eko merupakan kedai legendaris yang dikenal dengan minuman tradisional hangat khas Jawa Timur. Angsle dan ronde yang disajikan memiliki cita rasa manis gurih dengan kuah jahe yang menenangkan tubuh. Setiap porsi berisi bahan-bahan segar seperti roti tawar, mutiara, dan kacang hijau yang menambah kenikmatan. Kedai ini menjadi tempat favorit warga sekitar untuk bersantai di malam hari sambil menikmati suasana hangat dan ramah khas Surabaya.",
    address: "Jl. Ketintang No.42, Ketintang, Kec. Wonokromo, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/8/thumbnail.png",
    gallery: ["/foto_umkm/8/pict_1.png", "/foto_umkm/8/pict_2.png", "/foto_umkm/8/pict_3.png", "/foto_umkm/8/pict_4.png", "/foto_umkm/8/pict_5.png", "/foto_umkm/8/pict_6.png"],
    coordinates: { lat: -7.308452890071907, lng: 112.72623834642386 },
    filter: "Kuliner",
  },
  {
    id: 9,
    name: "Yoiki Kopi & Waffles",
    description: "Yoiki Kopi & Waffles merupakan kafe modern yang menawarkan pengalaman bersantai dengan suasana hangat.",
    fullDescription:
      "Yoiki Kopi & Waffles merupakan kafe modern yang menawarkan pengalaman bersantai dengan suasana hangat dan estetik. Kafe ini menyajikan beragam menu kopi pilihan hasil racikan barista berpengalaman, dipadukan dengan waffle yang renyah dan topping variatif. Tempatnya nyaman untuk bekerja, belajar, atau sekadar berkumpul bersama teman. Dengan pelayanan yang ramah serta kualitas menu yang konsisten, Yoiki Kopi menjadi salah satu tempat nongkrong favorit di kawasan Ketintang.",
    address: "Jl. Ketintang No.42, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/9/thumbnail.png",
    gallery: [
      "/foto_umkm/9/pict_1.jpg",
      "/foto_umkm/9/pict_2.jpg",
      "/foto_umkm/9/pict_3.jpg",
      "/foto_umkm/9/pict_4.jpg",
      "/foto_umkm/9/pict_5.jpg",
      "/foto_umkm/9/pict_6.jpg",
      "/foto_umkm/9/pict_7.jpg",
      "/foto_umkm/9/pict_8.jpg",
      "/foto_umkm/9/pict_9.jpg",
      "/foto_umkm/9/pict_10.jpg",
      "/foto_umkm/9/pict_11.jpg",
      "/foto_umkm/9/pict_12.jpg",
    ],
    coordinates: { lat: -7.308414109132075, lng: 112.726133298967 },
    filter: "Kuliner",
  },
  {
    id: 10,
    name: "Es Cincau Daun Hijau",
    description: "Es Cincau Daun Hijau menjadi pilihan tepat untuk melepas dahaga di tengah panasnya kota Surabaya.",
    fullDescription:
      "Es Cincau Daun Hijau menjadi pilihan tepat untuk melepas dahaga di tengah panasnya kota Surabaya. Minuman ini menggunakan cincau alami yang lembut dengan sirup manis yang menyegarkan, disajikan dalam porsi pas dengan harga sangat terjangkau, hanya Rp5.000 per gelas. Rasanya yang ringan dan segar membuat Es Cincau Daun Hijau digemari oleh berbagai kalangan, terutama mahasiswa dan warga sekitar",
    address: "Jl. Ketintang No.33, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur 60231",
    image: "/foto_umkm/10/thumbnail.png",
    gallery: ["/foto_umkm/10/pict_1.png", "/foto_umkm/10/pict_2.png", "/foto_umkm/10/pict_3.png"],
    coordinates: { lat: -7.308175747285547, lng: 112.72573520464933 },
    filter: "Kuliner",
  },
];
