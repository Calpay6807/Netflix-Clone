# kütüphaneler

- reat-router-dom
  -@splidejs/react-splide
  -axios
  -redux
  -react-redux
  -redux-thunk

# kaynaklar

- APİ:
  https://www.themoviedb.org/settings/api/new/form?type=developer

- Resim Base Url: https://image.tmdb.org/t/p/original

# Yapılacaklar

- redux kurulumu yap
- popüler film verisini çek > stora aktar
- rastgele bir popüler filmi seç ve ve `Hero.jsx`de ekrana bas
- filmler,n kategorileri verisini çek stora aktar
- herbir kategori için ekrana o kategoriye ait filmleri listeleceyecek bir bileşen `ListMovies` bas
- bu bileşene listelencek kategorinin ismini listele

# yapılanlar

Özelleştirilmiş bir Netflix klonu geliştirdim! Bu projede React JS kullandım ve The Movie Database (TMDB) API'sinden film verilerini çektim. Redux kullanarak durum yönetimini sağladım ve Redux Thunk ile asenkron API çağrıları gerçekleştirdim.

Projenin stilini oluşturmak için Bootstrap'i tercih ettim ve Splide.js kütüphanesini kullanarak kullanıcıların kolayca film listelerini gezinmelerini sağladım. Sayfalar arası geçiş için React Router Dom entegrasyonu yaptım.

API'den çekilen verilere göre filmleri kategorilere göre sıraladım ve en popüler olanları sayfanın en üstünde gösterdim. Her filmin detay sayfasını, filmin benzersiz kimliğine (id) göre oluşturdum. Detay sayfasında filmle ilgili açıklama, oyuncu kadrosu, yazarlar ve fragman gibi bilgileri kullanıcılara sundum.

<h1>Proje Gif</h1>

<img src="../netflix/src/assets/netoo.gif"/>
