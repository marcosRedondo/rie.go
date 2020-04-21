String data = "";

void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);

  // Configuracion del serial
  Serial.begin(9600);
  Serial.setTimeout(50);

}


void loop()
{
  
  while (Serial.available())
  {
    char character = Serial.read();
    if (character != '\n'){
      data.concat(character);
    } 
    
    if (data != "on" && data != "off"){
      Serial.println("Introduzca un caracter validos (on / off) (delay de 10000ms");
      delay(10000);
    }else {
      Serial.println("on o off pulsado");
     delay (100000);
    }
    

  }
}
