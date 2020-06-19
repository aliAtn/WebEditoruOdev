# WebEditoruOdev

BÖLÜM-2 PROJECT EULER

Soru : 8
Soru Adı: Largest product in a series

Art arda gelen 13 basamağın sayıları çarpımının alabileceği en büyük değer istenmiştir.

var strNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
var maxProduct = 1;
var element = "";

                for (var i = 0; i < strNum.length; i++) {
                    if (strNum.slice(i, i + 13).indexOf("0") === -1) {
                            var sliceStr = strNum.slice(i, i + 13);
                            var prod = 1;
                            for (var j = 0; j < sliceStr.length; j++) {
                                prod = prod * sliceStr[j];
                            }
                            element = maxProduct < prod ? sliceStr: element;
                            maxProduct = maxProduct < prod ? prod: maxProduct;
                    }
                }
                console.log(maxProduct);

CEVAP: 23514624000

---

Soru: 18
Soru Adı: Maximum path sum I

75, 95, 47, 87 şeklinde en üstten sağ alta doğru giden değerlerin toplamı istenmiştir.

const triangleStr = `75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;
const [sum] = triangleStr
.split("\n")
.map((row) => row.split(" ").map((el) => parseInt(el, 10)))  
 .reduceRight((lastRow, row) =>
row.map(
(el, idx) =>
el + (lastRow[idx] > lastRow[idx + 1] ? lastRow[idx] : lastRow[idx + 1])
)
);
console.log(sum);

CEVAP: 1074

---

Soru: 28
Soru Adı: Number spiral diagonals

1001x1001 sipiralindeki sayıların sol üstten sağ alta olan çaprazın ve sağ üstten sol alta olan çaprazın sayı değerlerinin toplamı istenmiştir.

var a = 1;
var d = 2;
var sum = 1;

for(var i = 1; i <= 500; i++)
{

for (var x = 1; x <= 4; x++)
{a = a + d
sum += a}

d = d + 2
}

console.log("Çaprazların toplamı: " + sum);

## CEVAP: 669171001

PROJE-3 LEETCODE

Soru: 28
Soru Adı: Implement strStr()

Girilen değerde istenen değer bulunması halinde bulunan değer sayısının yazılmasını, bulunmaması halinde -1 yazılması istenmiştir.

const strStr = (haystack, needle) => {
if (needle = = = '') return 0;
if (haystack.length < needle.length) return -1;
for (let i = 0; i < haystack.length - needle.length + 1; i+= 1) {
if (haystack.charAt(i) = = = needle.charAt(0)) {
let matches = true;
for (let j = 1; j < needle.length; j++) {
if (haystack.charAt(i + j) != = needle.charAt(j)) matches = false;
}
if (matches) return i;
}
}
return -1;
};

GİRDİ: “patates”
ARANAN: “ta”
ÇIKTI: 2

---

Soru: 938
Soru Adı: Range Sum of BST

Girilen değerler arasında sol ve sağ değerler arasındaki (kendileri de dahil) toplamı istemiştir. Tanımsız veya girilmeyen değerler 0 olarak hesaplanır.

var rangeSumBST = function(root, L, R) {
let sum = 0;
if (!root) {
return sum;
}
if (root.val >= L && root.val <= R) {
sum += root.val;
}
return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};

GİRDİ: [8,11,16,19,24,null,31,36,40 ] L=11 R=31
ÇIKTI: 101

---

Soru: 1108
Soru Adı: Defanging an IP Address

Girilen adres değerinde sadece “.” (nokta) olan değeri “[.]” olarak değiştirilmesi istenmiştir.

var defangIPaddr = function(address) {
var addressArray = address.split(".");
return addressArray.join('[.]');
};

GİRDİ: "1.1.1.1"
ÇIKTI: "1[.]1[.]1[.]1"

---

