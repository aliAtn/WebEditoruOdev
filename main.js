# WebEditoruOdev

//BÖLÜM-2 PROJECT EULER

//Soru : 8
//Soru Adı: Largest product in a series

//Art arda gelen 13 basamağın sayıları çarpımının alabileceği en büyük değer istenmiştir.

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

//CEVAP: 23514624000

------------------------------------------------------------------------------------------------------------------------------

//Soru: 18
//Soru Adı: Maximum path sum I

//75, 95, 47, 87 şeklinde en üstten sağ alta doğru giden değerlerin toplamı istenmiştir.

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

//CEVAP: 1074

-------------------------------------------------------------------------------------------------------------------------------

//Soru: 28
//Soru Adı: Number spiral diagonals

//1001x1001 sipiralindeki sayıların sol üstten sağ alta olan çaprazın ve sağ üstten sol alta olan çaprazın sayı değerlerinin toplamı istenmiştir.

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

 //CEVAP: 669171001

-----------------------------------------------------------------------------------------------------------------------------------
//Soru: 68 
//Soru Adı: Magic 5-gon ring

//1-10 arasındaki sayıları kullanarak ve düzenlemelere bağlı olarak, 16 ve 17 basamaklı dizeler oluşturmamız mümkündür. Bir beşgen halka için maksimum 16 haneli dizeyi istemiştir



const _in_ = (e, ...es) => es.indexOf(e) !== -1
let R = "0000000000000000" 
for (let s = 7; s <= 27; s++) { 
 let q = false
 for (let a = 1; a <= 10 && !q; a++)
  for (let b = 1; b <= 10; b++)
   if (!_in_(b, a))
    for (let c = 1; c <= 10; c++)
     if (!_in_(c, a, b) && a + b + c === s)
      for (let d = 1; d <= 10; d++)
       if (!_in_(d, a, b, c))
        for (let e = 1; e <= 10; e++)
         if (!_in_(e, a, b, c, d) && d + c + e === s)
          for (let f = 1; f <= 10; f++)
           if (!_in_(f, a, b, c, d, e))
            for (let g = 1; g <= 10; g++)
             if (!_in_(g, a, b, c, d, e, f) && f + e + g === s)
              for (let h = 1; h <= 10; h++)
               if (!_in_(h, a, b, c, d, e, f, g))
                for (let i = 1; i <= 10; i++)
                 if (!_in_(i, a, b, c, d, e, f, g, h) && h + g + i === s)
                  for (let j = 1; j <= 10; j++) { 
                   if (!_in_(j, a, b, c, d, e, f, g, h, i) && j + i + b === s) 
{ 
                    let r = [a, b, c, d, c, e, f, e, g, h, g, i, j, i, b].join("") 
                    q = true 
                    if (R.localeCompare(r) === -1) R = r 
                  }}} 

console.log(R)

//CEVAP: 6531031914842725
-------------------------------------------------------------------------------------------------------------------------------------
//Soru: 58
//Soru Adı: spiral primes
//Verilen spiralin etrafına bir tam yeni tabaka sarılırsa, yan uzunluğu 9 olan bir kare spiral oluşturulacaktır. Bu işleme devam edilirse, her iki diyagonal boyunca prim oranının ilk önce %10'un altına düştüğü kare spiralin yan uzunluğunu bulmamız istenmiştir.


var ms = Date.now();

const side = n => 2*n+1 
const corners = n => [side(n)*side(n) - 2*n,side(n)*side(n) - 4*n,side(n)*side(n) - 6*n] 
const primes = n => corners(n).filter(isprime).length 

function isprime(i) {
     for (var n=3;n*n<=i ;n+=2 ) if (i%n == 0) return false; 
     return true 
} 
var total=0,n=0 
do { 
      total += primes(++n) 
} 
while (10*total > 4*n+1); 

console.log(side(n)) 



//CEVAP: 26241
-------------------------------------------------------------------------------------------------------------------------------------


//PROJE-3 LEETCODE

//Soru: 28
//Soru Adı: Implement strStr()

//Girilen değerde istenen değer bulunması halinde bulunan değer sayısının yazılmasını, bulunmaması halinde -1 yazılması istenmiştir.

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

//GİRDİ: “patates”
//ARANAN: “ta”
//ÇIKTI: 2

-----------------------------------------------------------------------------------------------------------------------------

//Soru: 938
//Soru Adı: Range Sum of BST

//Girilen değerler arasında sol ve sağ değerler arasındaki (kendileri de dahil) toplamı istemiştir. Tanımsız veya girilmeyen değerler 0 olarak hesaplanır.

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

//GİRDİ: [8,11,16,19,24,null,31,36,40 ] L=11 R=31
//ÇIKTI: 101

-----------------------------------------------------------------------------------------------------------------------------------

//Soru: 1108
//Soru Adı: Defanging an IP Address

//Girilen adres değerinde sadece “.” (nokta) olan değeri “[.]” olarak değiştirilmesi istenmiştir.

var defangIPaddr = function(address) {
var addressArray = address.split(".");
return addressArray.join('[.]');
};

//GİRDİ: "1.1.1.1"
//ÇIKTI: "1[.]1[.]1[.]1"

--------------------------------------------------------------------------------------------------------------------------------

//Soru: 728
//Soru Adı: Self Dividing Numbers
//Verilen sol ve sağ değerler arasında öz bölünen sayıların bulunması istenmiştir. (öz bölünen: kendini oluşturan rakamlarla bölümünden kalan sıfır olan sayılardır. Örneğin 128 sayısı 1, 2 ve 8 rakamlarından oluşur ve bu rakamların 128’e bölümünden kalan 0’dır) 

var selfDividingNumbers = function(left, right) {
    
    let selfDividing = true;
    let result = [];

    for(left; left <= right; left++){
        let numbers = left.toString().split('');
        if (!numbers.includes('0')){         
            for (let k = 0; k < numbers.length; k++){
                if (left % parseInt(numbers[k]) !== 0) {
                    selfDividing = false;
                    break;
                }
            }
            if (selfDividing == true){
                result.push(left);
            }
            selfDividing = true;
        } 
    }
    
    return result;
};

//GİRDİ: sol değer:5 sağ değer:78
/ÇIKTI: [5,6,7,8,9,11,12,15,22,24,33,36,44,48,55,66,77] 
------------------------------------------------------------------------------------------------------------------------------------

//Soru: 1408
//Soru Adı: String Matching in an Array

//Kelime1 ve kelime2 olmak üzere iki ana kelime içinde diğer kelimelerin geçip geçmediğini kontrol eden bir kod yazılması istenmiştir. (örnek, salatalık ana kelimesinin içinde al kelimesi geçiyor ise o kelimeyi yazdırır. )

var stringMatching = function(words) {
    
    words.sort((a,b)=>a.length-b.length)
	
    let res =[]
    for(var i=0; i < words.length; i++){
        let target = words[i]
       for(var j = i+1; j <words.length;j++){
           if(words[j].includes(target)){
               res.push(target)
               break
           }
       }
    }
    console.log(res)
    return res
    
};


//GİRDİ: ["patates","ata","gel","gelinlik"]
//ÇIKTI: ["ata", "gel"]






