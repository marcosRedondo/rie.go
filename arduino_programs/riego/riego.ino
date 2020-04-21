// Variables Globales
const int LED_DUINO = 13;
int inputData = 0;



// Configuracion requerida
void setup() {
  
    /************************************/ 
   /** Configuracion del puerto serie **/
  /************************************/
  Serial.begin(9600);           // Configuracion de los baudios con el puerto (Frecuencia con la que se comunica el usb y el arduino)

  pinMode(LED_DUINO, OUTPUT);   // Configuramos el pin de arduino como salida
  digitalWrite(LED_DUINO, LOW); // Apagamos el led
  

}

// Loop del programa (Main en java)
void loop() {

  // Comprobamos si el puerto serie esta disponible
  if (Serial.available()>0){
    inputData = Serial.read();
    switch (inputData) {
      case '1':
          Serial.println("Pulsando 1, Encendiento el pin: 13, Posteriormente esto leera las medidas(Temperatura, Humedad Ambiente, Humedad suelo...");
          digitalWrite(LED_DUINO, HIGH);
          break;
      case '2':
          Serial.println("Pulsado 2, Apagando el pin: 13, Posteriormente esto encendera el rele para regar");
          digitalWrite(LED_DUINO, LOW);
          break;
       case '3':
          Serial.println("Pulsado 3, Posteriormente esto apagara el rele para regar");
          break;
      default:
          Serial.println("No se ha pulsado ningun numero");
          break;
     }
  }
  

}
