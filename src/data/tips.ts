import { Tip } from '../types';

export const tipsData: Tip[] = [
  {
    id: 'oil',
    iconName: 'Droplet',
    category: 'Moy tizimi',
    title: {
      uz: "Moy almashtirish",
      ru: "Замена моторного масла",
      en: "Engine Oil Change",
      tr: "Motor Yağı Değişimi"
    },
    sentence1: {
      uz: "Dvigatel moyini har 7-10 ming kilometrda almashtirish shart.",
      ru: "Меняйте моторное масло каждые 7-10 тысяч километров пробега.",
      en: "Change engine oil strictly every 7,000 to 10,000 kilometers.",
      tr: "Motor yağını her 7-10 bin kilometrede mutlaka değiştirin."
    },
    sentence2: {
      uz: "Eski moy motor detallarini tez eskirishiga olib keladi.",
      ru: "Старое масло приводит к ускоренному износу деталей двигателя.",
      en: "Old degraded oil causes severe premature wear on internal engine parts.",
      tr: "Eski yağ motor parçalarının erken aşınmasına neden olur."
    }
  },
  {
    id: 'warmup',
    iconName: 'Flame',
    category: 'Dvigatel',
    title: {
      uz: "Sovuqda motorni qizdirish",
      ru: "Прогрев мотора зимой",
      en: "Cold Engine Warm-up",
      tr: "Soğukta Motoru Isıtma"
    },
    sentence1: {
      uz: "Qish kunlarida harakatlanishdan oldin motorni 3-5 daqiqa qizdiring.",
      ru: "В холодное время года прогревайте двигатель 3-5 минут перед поездкой.",
      en: "Warm up your engine for 3-5 minutes before driving in cold weather.",
      tr: "Kışın hareket etmeden önce motoru 3-5 dakika rölantide ısıtın."
    },
    sentence2: {
      uz: "Moy yetib bormasdan gaz bosish dvigatelga jiddiy zarar yetkazadi.",
      ru: "Езда на холодном моторе без достаточной смазки повреждает поршни.",
      en: "Accelerating on a cold engine without oil pressure damages pistons.",
      tr: "Soğuk motora aniden gaz vermek piston ve yataklara zarar verir."
    }
  },
  {
    id: 'tire',
    iconName: 'Gauge',
    category: 'Shinalar',
    title: {
      uz: "Shinalar bosimi",
      ru: "Давление в шинах",
      en: "Tire Pressure",
      tr: "Lastik Basıncı"
    },
    sentence1: {
      uz: "Shinalar bosimini oyiga kamida bir marta manometrda tekshirib turing.",
      ru: "Проверяйте давление в шинах манометром не реже одного раза в месяц.",
      en: "Check your tire pressure with a gauge at least once every month.",
      tr: "Lastik basınçlarını ayda en az bir kez manometreyle ölçün."
    },
    sentence2: {
      uz: "Noto'g'ri bosim yoqilg'i sarfini oshiradi va shinani tez yediradi.",
      ru: "Неправильное давление увеличивает расход топлива и износ резины.",
      en: "Incorrect pressure increases fuel consumption and ruins tire tread.",
      tr: "Yanlış hava basıncı yakıt tüketimini artırır ve lastiği aşındırır."
    }
  },
  {
    id: 'wash',
    iconName: 'Sparkles',
    category: 'Kuzov parvarishi',
    title: {
      uz: "Mashinani yuvish",
      ru: "Мойка кузова",
      en: "Car Body Washing",
      tr: "Araç Yıkama"
    },
    sentence1: {
      uz: "Kuzovni haftada kamida bir marta toza suv bilan yuvib turing.",
      ru: "Мойте кузов чистой водой не реже одного раза в неделю.",
      en: "Wash the vehicle body with clean water at least once a week.",
      tr: "Aracın gövdesini haftada en az bir kez temiz suyla yıkayın."
    },
    sentence2: {
      uz: "Yig'ilgan loy va tuz qatlami bo'yoqni zanglashiga sabab bo'ladi.",
      ru: "Скопившаяся грязь и соли вызывают коррозию лакокрасочного покрытия.",
      en: "Accumulated dirt and winter salts cause body rust and corrosion.",
      tr: "Biriken çamur ve tuz boya tabakasının paslanmasına yol açar."
    }
  },
  {
    id: 'battery',
    iconName: 'Zap',
    category: 'Elektr tizimi',
    title: {
      uz: "Qishda akkumulyator",
      ru: "Аккумулятор зимой",
      en: "Winter Battery Care",
      tr: "Kışın Akü Bakımı"
    },
    sentence1: {
      uz: "Sovuq kunlarda akkumulyator quvvati sezilarli darajada pasayadi.",
      ru: "В сильные морозы емкость аккумулятора заметно снижается.",
      en: "Battery power drops significantly during freezing winter days.",
      tr: "Aşırı soğuk havalarda akünün gücü belirgin şekilde düşer."
    },
    sentence2: {
      uz: "Klemmalarni tozalang va elektrolit zichligini oldindan tekshirtiring.",
      ru: "Очищайте клеммы и заранее проверяйте плотность электролита.",
      en: "Clean terminals and check electrolyte density before winter sets in.",
      tr: "Kutup başlarını temizleyin ve elektrolit yoğunluğunu önceden ölçtürün."
    }
  },
  {
    id: 'brake',
    iconName: 'ShieldAlert',
    category: 'Xavfsizlik',
    title: {
      uz: "Tormoz tizimi",
      ru: "Тормозная система",
      en: "Brake System",
      tr: "Fren Sistemi"
    },
    sentence1: {
      uz: "Tormoz kolodkalari va tormoz suyuqligini har doim nazorat qiling.",
      ru: "Регулярно проверяйте толщину тормозных колодок и уровень жидкости.",
      en: "Consistently inspect brake pads and check brake fluid levels.",
      tr: "Fren balatalarını ve fren hidrolik sıvısını düzenli kontrol ettirin."
    },
    sentence2: {
      uz: "G'alati tovush yoki tebranish sezilsa darhol ustaga murojaat qiling.",
      ru: "При посторонних шумах или биении сразу обращайтесь к мастеру.",
      en: "Visit a mechanic immediately if you hear squeaks or feel vibration.",
      tr: "Olağandışı ses veya titreşim hissederseniz vakit kaybetmeden ustaya gidin."
    }
  }
];
