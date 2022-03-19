console.log("HOLA MUNDO");

//Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();
//Código del Triángulo 
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triángulo miden: " 
+ ladoTriangulo1 
+ "cm, "
+ ladoTriangulo2 
+ "cm, "
+baseTriangulo 
+ "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm" );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm" );

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del Círculo 
console.group("Círculos");

const PI = Math.PI;
console.log("PI es igual a: " + PI + "cm");

const radioCirculo = 4;
console.log("El  radio del círculo es de: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es de: " + diametroCirculo + "cm");

const perimetroaCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es de: " + perimetroaCirculo+ "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();