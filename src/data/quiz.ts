import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      uz: "Aholi yashash joylarida (shaharda) yengil avtomobillarning eng yuqori ruxsat etilgan tezligi qancha?",
      ru: "Какова максимально разрешенная скорость легковых автомобилей в населенных пунктах?",
      en: "What is the maximum allowed speed limit for passenger cars in urban areas?",
      tr: "Şehir içi yerleşim yerlerinde binek araçlar için azami hız sınırı kaçtır?"
    },
    options: {
      uz: ["60 km/soat", "70 km/soat", "80 km/soat", "50 km/soat"],
      ru: ["60 км/ч", "70 км/ч", "80 км/ч", "50 км/ч"],
      en: ["60 km/h", "70 km/h", "80 km/h", "50 km/h"],
      tr: ["60 km/s", "70 km/s", "80 km/s", "50 km/s"]
    },
    correctIndex: 0,
    explanation: {
      uz: "O'zbekiston yo'l harakati qoidalariga ko'ra, aholi punktlarida tezlik 60 km/soat qilib belgilangan.",
      ru: "По ПДД Узбекистана в населенных пунктах максимальная скорость составляет 60 км/ч.",
      en: "According to traffic regulations in Uzbekistan, the urban speed limit is 60 km/h.",
      tr: "Özbekistan trafik kurallarına göre yerleşim yerlerinde hız sınırı 60 km/s olarak belirlenmiştir."
    }
  },
  {
    id: 2,
    question: {
      uz: "Dvigatel moyi har necha ming kilometrda almashtirilishi tavsiya etiladi?",
      ru: "Через сколько тысяч километров пробега рекомендуется менять моторное масло?",
      en: "Every how many thousand kilometers should engine oil be changed?",
      tr: "Motor yağı kaç bin kilometrede bir değiştirilmelidir?"
    },
    options: {
      uz: ["Har 7-10 ming km da", "Har 20-25 ming km da", "Har 30 ming km da", "Yiliga bir marta masofadan qat'i nazar"],
      ru: ["Каждые 7-10 тыс. км", "Каждые 20-25 тыс. км", "Каждые 30 тыс. км", "Раз в год независимо от пробега"],
      en: ["Every 7,000 - 10,000 km", "Every 20,000 - 25,000 km", "Every 30,000 km", "Once a year regardless of mileage"],
      tr: ["Her 7-10 bin km'de", "Her 20-25 bin km'de", "Her 30 bin km'de", "Yılda bir kez mesafeye bakılmaksızın"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Standart shahar sharoitida motor moyi o'z xususiyatlarini 7-10 ming km ichida saqlab turadi.",
      ru: "В условиях городской эксплуатации моторное масло сохраняет свойства в пределах 7-10 тыс. км.",
      en: "Under typical driving conditions, engine oil protects effectively up to 7,000 - 10,000 km.",
      tr: "Normal sürüş koşullarında motor yağı kalitesini 7-10 bin km boyunca korur."
    }
  },
  {
    id: 3,
    question: {
      uz: "Sariq miltillovchi svetofor signali nimani bildiradi?",
      ru: "Что означает мигающий желтый сигнал светофора?",
      en: "What does a flashing yellow traffic light indicate?",
      tr: "Fasılalı yanan sarı trafik ışığı ne anlama gelir?"
    },
    options: {
      uz: ["Chorrahada to'xtash shart", "Tartibga solinmagan chorraha, ehtiyotkorlik bilan harakatlanish", "Harakatlanish mutlaqo taqiqlanadi", "Faqat o'ngga burilish mumkin"],
      ru: ["Обязательная остановка", "Нерегулируемый перекресток, внимание и осторожность", "Движение строго запрещено", "Разрешен поворот только направо"],
      en: ["Mandatory full stop", "Uncontrolled intersection, proceed with caution", "Traffic completely prohibited", "Only right turns allowed"],
      tr: ["Zorunlu duruş", "Kontrolsüz kavşak, dikkatli geçiş", "Geçiş tamamen yasak", "Sadece sağa dönüş serbest"]
    },
    correctIndex: 1,
    explanation: {
      uz: "Sariq miltillovchi ishora chorraha tartibga solinmaganligini va ehtiyot bo'lish kerakligini bildiradi.",
      ru: "Мигающий желтый предупреждает о нерегулируемом перекрестке и требует повышенного внимания.",
      en: "A flashing yellow light warns that the intersection is unregulated; proceed with caution.",
      tr: "Fasılalı sarı ışık kavşağın kontrolsüz olduğunu bildirir ve dikkatli sürüş gerektirir."
    }
  },
  {
    id: 4,
    question: {
      uz: "Aylanma harakat (krug) chorrahasida ustunlik kimga tegishli (agar boshqa belgilar bo'lmasa)?",
      ru: "Кто имеет преимущество на перекрестке с круговым движением (при отсутствии знаков приоритета)?",
      en: "Who has right-of-way at a roundabout if no priority signs are present?",
      tr: "Dönel kavşakta geçiş üstünlüğü kimindir (farklı bir tabela yoksa)?"
    },
    options: {
      uz: ["Aylanada harakatlanayotgan avtomobillarga", "Aylanaga kirib kelayotgan avtomobillarga", "Katta va og'ir yuk mashinalariga", "O'ng tomondan kelayotgan piyodalarga"],
      ru: ["Автомобилям, движущимся по кругу", "Автомобилям, въезжающим на круг", "Грузовым автомобилям", "Пешеходам с правой стороны"],
      en: ["Vehicles already circulating inside the roundabout", "Vehicles entering the roundabout", "Heavy trucks and buses", "Pedestrians on the right"],
      tr: ["Kavşak içindeki araçlara", "Kavşağa giriş yapan araçlara", "Ağır vasıtalara", "Sağdaki yayalara"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Aylanma harakatda krug ichida bo'lgan transport vositasi ustunlikka ega bo'ladi.",
      ru: "Транспортные средства, уже находящиеся на кольце, имеют приоритет.",
      en: "Vehicles already within the roundabout circle hold the right-of-way.",
      tr: "Dönel kavşak içindeki araçlar öncelik hakkına sahiptir."
    }
  },
  {
    id: 5,
    question: {
      uz: "Shinalarda havo bosimi me'yoridan past bo'lsa nima sodir bo'ladi?",
      ru: "К чему приводит недостаточное давление воздуха в шинах?",
      en: "What happens when tire pressure is below the recommended level?",
      tr: "Lastik hava basıncı standarttan düşük olursa ne olur?"
    },
    options: {
      uz: ["Yoqilg'i sarfi oshadi va shinaning chetlari yeyiladi", "Yoqilg'i tejaladi va mashina tezlashadi", "Tormoz masofasi qisqaradi", "Hech narsa o'zgarmaydi"],
      ru: ["Растет расход топлива и изнашиваются края шины", "Экономится топливо и авто ускоряется", "Тормозной путь сокращается", "Никаких изменений"],
      en: ["Fuel consumption increases and tire edges wear out", "Fuel is saved and car speeds up", "Braking distance is shortened", "Nothing changes"],
      tr: ["Yakıt sarfiyatı artar ve lastik kenarları aşınır", "Yakıt tasarrufu sağlanır", "Fren mesafesi kısalır", "Hiçbir şey değişmez"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Past bosim yo'l bilan ishqalanishni oshiradi, bu esa yoqilg'i sarfini ko'paytiradi va shina chetini yeyadi.",
      ru: "Низкое давление увеличивает сопротивление качению, повышая расход топлива и износ боковин.",
      en: "Under-inflation increases rolling resistance, wasting fuel and wearing tire shoulders.",
      tr: "Düşük basınç yuvarlanma direncini artırır, yakıt tüketimini yükseltir ve lastiği yıpratır."
    }
  },
  {
    id: 6,
    question: {
      uz: "Yomg'ir paytida ho'l yo'lda tormoz masofasi qanday o'zgaradi?",
      ru: "Как изменяется тормозной путь на мокрой дороге во время дождя?",
      en: "How does braking distance change on a wet road in rainy conditions?",
      tr: "Yağmurlu havada ıslak yolda fren mesafesi nasıl değişir?"
    },
    options: {
      uz: ["Sezilarli darajada uzayadi", "Qisqaradi", "O'zgarmaydi", "Faqat ABS bo'lsa o'zgaradi"],
      ru: ["Значительно увеличивается", "Уменьшается", "Не изменяется", "Меняется только при наличии ABS"],
      en: ["Increases significantly", "Decreases", "Remains identical", "Only changes with ABS active"],
      tr: ["Belirgin şekilde uzar", "Kısalır", "Değişmez", "Sadece ABS varsa değişir"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Suv qatlami shinaning yo'l bilan tishlashishini pasaytiradi, shuning uchun tormoz masofasi 1.5-2 barobar uzayadi.",
      ru: "Водяная пленка уменьшает сцепление с асфальтом, тормозной путь может вырасти почти вдвое.",
      en: "Water reduces tire grip on the asphalt, increasing stopping distance by up to 2x.",
      tr: "Su tabakası lastiğin tutuşunu düşürür, bu nedenle fren mesafesi yaklaşık 2 kat uzar."
    }
  },
  {
    id: 7,
    question: {
      uz: "Avtomobilda xavfsizlik kamarini kimlar taqishi shart?",
      ru: "Кто в легковом автомобиле обязан быть пристегнут ремнем безопасности?",
      en: "Who in a passenger car is required to wear a seatbelt?",
      tr: "Binek araçta kimlerin emniyet kemeri takması zorunludur?"
    },
    options: {
      uz: ["Haydovchi va barcha yo'lovchilar", "Faqat haydovchi", "Faqat old o'rindiqdagi yo'lovchi", "Faqat 60 km/soatdan yuqori tezlikda"],
      ru: ["Водитель и все пассажиры", "Только водитель", "Только пассажир на переднем сиденье", "Только на скорости свыше 60 км/ч"],
      en: ["The driver and all passengers", "Driver only", "Front seat passenger only", "Only at speeds over 60 km/h"],
      tr: ["Sürücü ve tüm yolcular", "Sadece sürücü", "Sadece ön koltuktaki yolcu", "Sadece 60 km/s üzeri hızlarda"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Xavfsizlik kamari haydovchi va barcha yo'lovchilar hayotini asrash uchun majburiy talab hisoblanadi.",
      ru: "Ремень безопасности обязателен для водителя и всех пассажиров, оборудованных ремнями мест.",
      en: "Wearing seatbelts is legally required for both the driver and all passengers.",
      tr: "Emniyet kemeri hem sürücü hem de tüm yolcular için hayati zorunluluktur."
    }
  },
  {
    id: 8,
    question: {
      uz: "Qorong'i vaqtda yoki ko'rish cheklangan sharoitda qaysi chiroqlar yoqilishi shart?",
      ru: "Какие осветительные приборы обязательно должны быть включены в темное время суток?",
      en: "Which lights must be turned on when driving in darkness or low visibility?",
      tr: "Karanlıkta veya kısıtlı görüş şartlarında hangi farlar açık olmalıdır?"
    },
    options: {
      uz: ["Yaqinni yoki uzoqni yorituvchi fara chiroqlari", "Faqat avariya chiroqlari", "Faqat salondagi chiroq", "Hech qanday chiroq shart emas"],
      ru: ["Фары ближнего или дальнего света", "Только аварийная сигнализация", "Только освещение салона", "Фары не обязательны"],
      en: ["Low beam or high beam headlights", "Hazard warning flashers only", "Interior dome lights only", "No headlights required"],
      tr: ["Kısa veya uzun huzmeli farlar", "Sadece dörtlü flaşörler", "Sadece tavan lambası", "Far gerekmez"]
    },
    correctIndex: 0,
    explanation: {
      uz: "Qorong'i tushganda yoki tuman paytida xavfsizlik uchun faralar doimo yoqilgan bo'lishi shart.",
      ru: "В темное время суток и при тумане обязательно должны гореть фары ближнего или дальнего света.",
      en: "Proper headlights (low or high beam) are mandatory in low-light and nighttime conditions.",
      tr: "Karanlıkta ve sisli havalarda sürüş güvenliği için farların açık olması zorunludur."
    }
  }
];
