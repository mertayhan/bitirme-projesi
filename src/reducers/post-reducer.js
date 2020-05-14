const INITIAL_STATE = [
  {
    id: 1,
    date: 'May 12',
    image: 'https://www.teknogolddepo.com/image/cache/catalog/cats/telefon_ekranlari-200x250.png',
    title: 'PlayStation 5 oyunları nasıl görünecek?',
    short: 'Xbox Series X rakibi PlayStation 5 için dikkat çeken bir Unreal Engine 5 gösterimi yapıldı. Burada adeta bir grafik şovu bizleri karşıladı.',
    details: [
      'Xbox Series X rakibi PlayStation 5 için dikkat çeken bir Unreal Engine 5 gösterimi yapıldı. Burada adeta bir grafik şovu bizleri karşıladı.',
      'PlayStation 5, bu aralar sık sık gündemde yer alıyor. Kısa süre önce yıl sonunda koronavirüs durumlarına rağmen çıkacağı aktarılan konsol, daha önce ise yüksek donanım maliyeti nedeniyle 499 dolar ila 549 dolar arasında bir fiyat etiketine sahip olacak haberleriyle ses getirmişti. Şimdi ise konsol için Unreal Engine 5 oyun motorunun Playstation 5’te çalışan demosu yayımladı. Direkt olarak yukarıda izleyebileceğiniz video, konsoldan gelen -demo olmasına rağmen- ilk oynayış içeriği konumunda yer alıyor ve genel olarak etkileyici görünüyor. Yeni nesile geçişi hissettiren bir içerikle karşımıza çıkan Unreal Engine 5, tahmin edebileceğiniz üzere PS5 için önümüzdeki yıl çıkacak birçok oyunda aktif olarak kullanılacak. Bu oyunların hemen hepsinin 4K 60 FPS çalışması bekleniyor ve bu her oyunda görsel seviye gerçekten nefes kesici olacak izlenimi oluşturuyor',
      'PlayStation 5 için teknik detaylar şöyle',
      'Yeni nesil konsol gücünü AMD’nin 3. jenerasyon Zen mimarisi üzerine kurulacak sekiz çekirdekli bir işlemciden alıyor. Grafik tarafında AMD imzalı Radeon Navi ailesini kullanan PS5, 4K oyunculuğu standart hale getiriyor, 8K seviyesine çıkış yapabiliyor. Işık efektlerine çağ atlatacak Ray tracing desteği dikkat çeken detayları arasında yer alıyor. Bu arada PlayStation 5 tarafıda ses konusunda yeni özel altyapılar üstüne kuruluyor. Yani yeni nesilde görsellik kadar işitsel deneyim de çağ atlıyor.',
    ],
  },
  {
    id: 2,
    date: 'May 13',
    image: 'https://m.media-amazon.com/images/I/51CNWcovPmL.jpg',
    title: 'Uzmanlar: Binlerce uygulama kişisel verileri sızdırdı',
    short: 'Uzmanların açıklamasına göre binlerce uygulama kişisel veriler üzerinde gizlice sızıntı yaptı. Ortaya çıkan haberlere göre Google‘ın sahip olduğu Firebase üzerinden veriler sızdı. Android kişisel veriler sızıntısıyla gündemde.',
    details: [
      'Uzmanların açıklamasına göre binlerce uygulama kişisel veriler üzerinde gizlice sızıntı yaptı. Ortaya çıkan haberlere göre Google‘ın sahip olduğu Firebase üzerinden veriler sızdı. Android kişisel veriler sızıntısıyla gündemde.',
      'Giderek artan internet ve uygulama kullanımında kişisel verilerin gizliliğine dikkat etmek gerekiyor. Bazı uygulamaların da halihazırda bilgileri sızdırdığı yapılan araştırmalar sonucunda ortaya çıkıyor.',
      'Mobil cihazlarda kullandığımız uygulamalarda açıklar çıkmaya devam ediyor. Son elde edilen bilgilere göre Google‘ın sahibi olduğu ve mobil ile web uygulama geliştirme platformu Firebase sebep oldu. Çünkü araştırmaya göre Firebase veritabanı üzerinde yapılan bir yanlış ayarlamanın, açık kapı bıraktığı fark edildi.',
      'Android uygulamaları barındıran Google Play Store’daki uygulamaların yüzde 30’unun Firebase ile geliştirildiği belirtiliyor. Halihazırda toplamda 515.735 uygulama Google Play Store’da indirilebilir durumda. Firebase kullanan 155.066 uygulama bulunuyor. Bu uygulamaların 4.282 tanesinin kişisel verileri sızdırdığı belirlendi. 9.014 uygulamanın da bu tehdit altında olduğu söyleniyor.',
      'Sızdırma yapan uygulamaların yüzde 40’kının oyun ve eğitim uygulamaları olduğu ve e-posta, kullanıcı adı, parolalar, telefon numaraları, konum, adres vb. bilgilerin alındığı belirlendi.',
      'Basit bir “.json” dosyasıyla erişilebilir olan kişisel veriler için Google harekete geçti. Yukarıda bahsedilen veritabanı ile bağlantı kesildi. Ancak tehlike hâlâ geçmiş değil. Çünkü daha önceden kaydedilen veritabanı bilgileriyle, uygulamalar verileri göndermeye devam ediyor olabilir. Bunun için uygulamalara manüel müdahale gerekiyor.',
      'Android kişisel veriler sızıntısı için açıklama yapan Google sözcüsü “Muhtemel yanlış ayarlamaya karşı geliştiricilere düzeltme yapması için bildirim gönderdik. Etkilenen uygulamalar için de çalışmalara devam ediyoruz. dedi.',
    ],
  },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
