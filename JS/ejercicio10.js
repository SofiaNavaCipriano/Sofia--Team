const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      albumTitle: 'Secreto de Amor',
      artist: 'Joan Sebastian',
      tracks: ['Un Idiota', 'Me Gustas']
    },
    5439: { 
      albumTitle: 'Vicente Fernandez para siempre',
      artist: 'Vicente Fernandez',
      tracks: ['Un Millon de Primaveras', 'El Chofer']
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      // Si el valor es una cadena vacía, borra la propiedad "prop" del album.
      delete records[id][prop];
    } else if (prop !== "tracks") {
      // Si prop no es "tracks" y value no es una cadena vacía, asigna value a la propiedad "prop".
      records[id][prop] = value;
    } else {
      // Si prop es "tracks" y value no es una cadena vacía.
      records[id][prop] = records[id][prop] || []; // Si no existe la propiedad "tracks", crea un arreglo vacío.
      records[id][prop].push(value); // Añade "value" al final del arreglo.
    }
  
    return records;
  }
  
  //Ejemplo
  // Ejemplo de uso:
  const updatedRecords =updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
  console.log(updatedRecords);