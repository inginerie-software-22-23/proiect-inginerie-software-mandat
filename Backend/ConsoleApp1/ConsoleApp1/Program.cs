using System.Security.Cryptography;

const int SaltSize = 16; //128 bits
const int KeySize = 32; //256 bits
const int Iterations = 10000;
string input = "parola";

var algorithm = new Rfc2898DeriveBytes(input, SaltSize, Iterations, HashAlgorithmName.SHA512);

var hash = Convert.ToBase64String(algorithm.GetBytes(KeySize));
var salt = Convert.ToBase64String(algorithm.Salt);



Console.WriteLine($"{Iterations}.{salt}.{hash}");
//10000.iA6FVoYbPVZA0B8spu1tCg==.vNM1yfUokKIH5wiZQnD2JDT2/Y+tB2TtgOSdubS6wds=

