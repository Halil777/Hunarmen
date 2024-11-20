import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      tm: {
        translation: {
          hakimlik: "hakimligin yeri",
          gijeki: "Okuwlaryň gündizki we agşamky bölümleri bar.",
          resmi: "Resminamalar iýul aýynyň 01-den awgust aýynyň 28-ne çenli  ",
          dan: "-dan ",
          namalar: "çenli kabul edilýär.",
          resminamaSanaw: "Gerekli resminamalar:",
          list1: "pasportyň nusgasy",
          list2: "orta bilim hakynda attestat we onuň nusgasy",
          list3: "öňki okan ýa-da işlän ýerinden häsiýetnama",
          list4: "harby bilediň nusgasy",
          list5a: "ýaşaýan ýerinden güwänama",
          list5b: "(forma №3)",
          list6: "6 surat",
          list7: "lukmançylyk güwänamasy",
          homePage: "Baş sahypa",
          aboutUs: "Biz barada",
          raspisaniya: "Okuw hünärleri",
          raspisaniyaa: "Okuw hünärleri",
          contactUs: "Habarlaşmak üçin",
          title: "aşgabat şäher häkimliginiň 8-nji hünär-tehniki okuw mekdebi",
          titlee: "Aşgabat şäher häkimliginiň 8-nji ",
          titleee: "hünär-tehniki okuw mekdebi",
          titleeT:
            "Aşgabat şäher häkimliginiň 8-nji hünär-tehniki okuw mekdebi",
          adress: "Salgysy:",
          addres: "Aşgabat şäheri, Görogly köçesi, 91",
          addresss: "Aşgabat şäheri,",
          adresss: "Görogly köçesi, 91",
          mail: "Elektron poçta:",
          phone: "Telefon belgisi:",
          okuw: "OKUW HÜNÄRLERI",
          busDirection:
            "Biziň mekdebimiziň ýanyndaky teke bazar awtobus duralgasyna gelýän awtobuslar:",

          professia1: "Apparat we programma üpjünçiligini sazlaýjy",
          professia2: "Sanly maglumaty işläp taýýarlamak boýunça ussa",
          professia3: "Buhgalterçilik işi",
          professia4: "Kitaphana we arhiw işi",
          professia5: "Kompýuter tehnikalaryny bejeriji we hyzmat ediji ussa",
          professia6: "Iş ýörediji",
          professia7: "Tikinçi-biçimçi",
          professia8:
            "Konstruktor-modelýer, kompýuter grafikasyny öwrenmek bilen",
          professia9: "Çeper bezeg işlerini ýerine ýetiriji",
          professia10: "Awtomehanik ",
          professia11: "Kebşirleýji ",
          professia12: "(elektro kebşirleme we gaz bilen kebşirleme işleri)",
          professia13: "Geodeziýaçy",
          saytAdress: "Saýt salgysy:",
          professia14: "Ýaşaýyş-jemagat hojalygynyň ussasy",
          professia15: "Sowadyjylary we kondisionerleri bejeriji slesar",
          time: "\u00a0\u00a0\u00a0\u00a0\u00a01,5 ýyl\u00a0\u00a0\u00a0\u00a0\u00a0",
          timee:
            "\u00a0\u00a0\u00a0\u00a0\u00a010 aý\u00a0\u00a0\u00a0\u00a0\u00a0",
          come: "HOŞ GELDIŇIZ!",
          kontact: "HABARLAŞMAK üçin ",
        },
      },
      ru: {
        translation: {
          hakimlik: "dlya prowerka",
          kontact: "Наши контакты",
          okuw: "Сведения о специальностях",
          gijeki: "Занятия проводятся в дневное и в вечернее время",
          resmi: "Прием документов осуществляется с 01 июля по 28 августа с ",
          dan: " - ",
          namalar: "часов.",
          resminamaSanaw: "Перечень документов для поступления:",
          list1: "Копия паспорта ",
          list2: "Аттестат о среднем образовании и копия",
          list3: "Характеристика с последнего места работы или учебы",
          list4: "Копия военного билета",
          list5a: "Справка с места жительства ",
          list5b: "(форма №3)",
          list6: "6 фотографий",
          list7: "Справка о состоянии здоровья",
          homePage: "Главная",
          aboutUs: "О нас",
          raspisaniya: "Сведения о специальностях",
          raspisaniyaa: "Учебные планы",
          contactUs: "Наши контакты",
          title:
            "профессионально-техническая школа №8 хякимлика города ашгабат",
          titlee: "Профессионально-техническая школа №8",
          titleee: "хякимлика города Aшгабат",
          titleeT:
            "Профессионально-техническая школа №8 хякимлика города Aшгабат",
          adress: "Наш адрес:",
          addres: "гор. Ашгабат, улица Героглы, 91",
          addresss: "гор. Ашгабат,",
          adresss: " улица Героглы, 91",
          mail: "Электронная почта:",
          phone: "Телефон номер:",
          busDirection: "Автобусные маршруты:",
          professia1: "Наладчик аппаратного и программного обеспечения",
          professia2: "Мастер по обработке цифровой информации ",
          professia3: "Бухгалтерское дело",
          professia4: "Библиотека и архивное дело ",
          professia5: "Мастер по обслуживанию и ремонту компьютерной техники ",
          professia6: "Делопроизводитель ",
          professia7: "Закройщик-швея ",
          saytAdress: "Адрес сайта:",
          professia8: "Конструктор-модельер, с изучением компьютерной графики ",
          professia9: "Исполнитель художественно-оформительских работ ",
          professia10: "Автомеханик ",
          professia11: "Сварщик  ",
          professia12: "(электрогазосварщик)",
          professia13: "Геодезист",
          professia14: "Мастер жилищно-коммунального хозяйства ",
          professia15: "Слесарь по ремонту холодильников и кондиционеров",

          time: "\u00a0\u00a0\u00a0\u00a0\u00a01,5 годa\u00a0\u00a0\u00a0\u00a0\u00a0",
          timee:
            "\u00a0\u00a0\u00a0\u00a0\u00a010 месяц\u00a0\u00a0\u00a0\u00a0\u00a0",
          come: "Добро пожаловать!",
        },
      },
    },
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export { i18n };