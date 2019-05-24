# Schedule-Tool-API
Schedule Tool Api es una herramienta que se usa para cargar el JSON de horarios en la página web Schedule Tool, 
además se usa para llevar un registro de los posibles fallos que se puedan generar en la web.
### Formato del JSON: 
```json
{  
  "GRUPOS":{  
    "NombreDelGrupo":{  
      "NombreDeLaAsignatura":{  
        "InicialDiaDeLaSemana":["HoraDeInicioDeLaClase"]  
      }  
    }  
  },  
  "ORGANIZACION":{  
    "NombreDelGrado":{  
      "Curso":["NombreDelGrupo1", "NombreDelGrupo2", "..."]  
    }  
  }  
}  
```
### EJEMPLO DEL JSON:
```json
{
  "GRUPOS":{
       "GM11":{
          "FS": {"J":[9,10]},
          "A": {"J":[11,12],"M":[11,12],"V":[13]},
          "ED": {"M":[9,10],"X":[13,14]},
          "AS": {"M":[13,14]},
          "FI": {"V":[9,10],"X":[9,10]},
          "EC": {"V":[11,12],"X":[11,12]}
          },
     "GM12":{ 
        "FI": {"J":[9,10],"M":[9,10]},
        "EC": {"J":[11,12],"M":[11,12]},
        "ED": {"J":[13,14],"X":[9,10]},
        "A": {"M":[13],"V":[11,12],"X":[13,14]},
        "FS": {"V":[9,10]},
        "AS": {"X":[11,12]}
     }
  }, 
  "ORGANIZACION":{
     "Software":{
        "Primero":["GM11", "GM12", "GM13", "GM14", "GM15", "GT11", "GT12", "GT13"],
        "Segundo":["GM21", "GM22", "GM23", "GT21", "GT22"],
        "Tercero": ["GIWM31", "GIWT31"],
        "Cuarto":["GMOPT41", "GMOPT41a", "GMOPT41b", "GTOPT41", "GTOPT42"]
        }, 
     "Computadores":{
        "Primero":["GM11", "GM12", "GM13", "GM14", "GM15", "GT11", "GT12", "GT13"],
        "Segundo":["GM21", "GM22", "GM23", "GT21", "GT22"],
        "Tercero":["GCOM31"],
        "Cuarto":["GMOPT41", "GMOPT41a", "GMOPT41b", "GTOPT41", "GTOPT42"]
        },
  }
}
```
### Cargar Nuevo JSON:
Peticion POST a la dirección **http://localhost:3000/profile** (Cambiar localhost por su direccion IP)
del tipo **form-data** donde seleccionamos el JSON que hemos creado.
### Leer el JSON almacenado:
Peticion GET a la direccion **http://localhost:3000/json**  (Cambiar localhost por su direccion IP)
### Mandar un error a la API de la  páina:
Peticion POST a la dirección **http://localhost:3000/tracelog** (Cambiar localhost por su direccion IP)
del tipo **x-www-form-urlencoded** donde le pasamos los siguientes parametros:
**errorName**, **errorFile**, **errorLine**, **errorFolder**

API for the schedule tool

INSTALLS

npm install --save multer

npm install --save nodemon

npm install --save express

