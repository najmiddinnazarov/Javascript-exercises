// Prefix and Postfix
let a = 1,
  b = 1;

let c = ++a; // 2
// Chunki a ni qiymatini birinchi oshirib keyin consolega chiqaryapdi.
let d = b++; // 1
// Chunki b ni birinchi chiqarib keyin qiymatini oshiradi.Agar yana bir marta b ni console ga chaqirsak. O'shanda b ni qiymati oshganini ko'rishimiz mumkin.

// ======================
// Assignment result
let x = 2;
let resultOne = 1 + (x *= 2); //5
// Chunki x ni qiymatini 2 ga ko'paytirib va x ga tenglashtirib qo'yayapdi. Keyin 1 ni qo'shyapdi.

// ======================
//Type conversation
console.log("" + 1 + 0); // "10"
// Chunki string va number qo'shilganda, string numberni ham stringga aylantirib qo'yadi.
console.log("" - 1 + 0); // -1
// Chunki bu yerda bo'sh string false qiymat bo'lganligi uchun 0 ga aylanib qoladi.
console.log(true + false); // 1
// Chunki true rost qiymat bo'lganli uchun 1 raqamiga o'zgaradi. False esa 0. 1 + 0 = 1
console.log(6 / "3"); // 2;
// Chunki javascriptda faqat + operatori xato ishlaydi. Yani stringni numberga qo'shsangiz. To'g'ridan-to'g'ri qo'shib qo'yadi. Lekin qolgan operatorlari to'g'ri ishlaydi. Yani numberni stringga bo'lsangiz. Ikkalasini bo'lib to'g'ri javobni chiqaradi.
console.log("2" * "3"); // 6
// Chunki javascriptda faqat + operatori xato ishlaydi. Yani stringni numberga qo'shsangiz. To'g'ridan-to'g'ri qo'shib qo'yadi. Lekin qolgan operatorlari to'g'ri ishlaydi. Yani stringni stringga ko'paytirsangiz. Ikkalasini ko'paytmasini chiqaradi.
console.log(4 + 5 + "px"); // "9px"
// Chunki string oxirida kelganligi uchun birinchi, ikkita numberni qo'shib olayapdi keyin stringga aylantirib qo'yayapdi.
console.log("$" + 4 + 5); // "$45"
// Chunki string boshida kelganligi uchun yonidagi qolgan numberlarni stringga aylantirib qo'yayapdi.
console.log("4" - 2); // 2
// Chunki javascriptda faqat + operatori xato ishlaydi. Yani stringni numberga qo'shsangiz. To'g'ridan-to'g'ri qo'shib qo'yadi. Lekin qolgan operatorlari to'g'ri ishlaydi. Yani stringni numberdan ayirsangiz. To'g'ri ayirib javobni chiqaradi.
console.log("4px" - 2); // NaN
// Chunki stringni ichida harf kiritilganligi uchun bu stringni songa aylantiraolmayapdi. Shuning uchun raqam emas(NaN) deb qaytarayapdi.
console.log(" -9 " + 5); // " -9 5"
// Chunki birinchisi string bo'lganligi uchun yonidagi ni ham stringga aylantirib qo'yayapdi. Va to'g'ridan-to'g'ri qo'shib qo'yayapdi.
console.log(" -9 " - 5); // -14;
// Chunki javascriptda faqat + operatori xato ishlaydi. Yani stringni numberga qo'shsangiz. To'g'ridan-to'g'ri qo'shib qo'yadi. Lekin qolgan operatorlari to'g'ri ishlaydi. Yani stringni numberdan ayirsangiz. To'g'ri ayirib javobni chiqaradi.
console.log(null + 1); // 1
// Chunko null 0 ga teng.
console.log(undefined + 1); // NaN
// Chunki undefined ni numberga aylantirsak NaN qaytaradi.
console.log(" \t \n" - 2); // -2
// Chunki stringni numberga aylantirganimizda bizga nol qaytaradi.

// ======================
console.log(5 > 4); // true
// Chunki 5 rostanham 4 dan katta bo'lganligi uchun bizga boolean qiymat qaytaradi.
console.log("apple" > "pineapple"); // false
// Chunki ASCII kodlar jadvalida a harfi 97, p harfi esa 112 deb belgilangan. 97 > 112; Faqat boshidagi harflarni tekshirayapdi. Agar boshidagi harflar berilgan shartni qanoatlantirsa. Qolganini tekshirib o'tirmaydi.
console.log("2" > "12"); // true
// Chunki ASCII kodlar jadvalida 2 soni 50 raqamda turibdi, 1 esa 49 raqamda. 50 > 49; Faqat boshidagi sonlarni tekshirayapdi. Agar boshidagi sonlar berilgan shartni qanoatlantirsa. Qolganini tekshirib o'tirmaydi.
console.log(undefined == null); // true
// Chunki ikkitalik tenglikda tekshirayotganligimiz uchun NaN == 0 desa teng deb qaytarayapdi.
console.log(undefined === null); // false
// Chunki uchtalik(qat'iy) tenglikda tekshirayotganligimiz uchun NaN === 0 desa yo'q deb qaytarayapdi.
console.log(null == "\n0\n"); // false
// Chunki null == 0 ga tenglashtirsak false qaytaradi. Null faqat undefined ga teng qolganiga false qaytaradi.
console.log(null === +"\n0\n"); // false
// Chunki null === 0 ga tenglashtirsak false qaytaradi. Null faqat undefined ga teng qolganiga false qaytaradi.

// ======================
// If,  else
if ("0") {
  console.log("Hello");
}
// Chunki string ichida bitta probel bo'lsa ham bizga true qiymat qaytaradi. If hardoim true qiymat qabul qiladi.

// const askUser = prompt(`What's the "official" name of JavaScript?`);
// if (askUser == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert(`You don't know? “ECMAScript”!`);
// }

// const askUserNumber = Number(prompt("Enter a number!"));
// if (askUserNumber > 0) {
//   alert(1);
// } else if (askUserNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result;
// let i = 0;
// let k = 1;
// if (i + k < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
// i + k < 4 ? (result = "Below") : (result = "Over");
// console.log(result);
