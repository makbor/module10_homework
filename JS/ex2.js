switch (typeof variable){
    case 'number':
      console.log(variable + ' – это число');
      break;
    case 'string':
      console.log(variable + ' – это строка');
      break;
    case 'boolean':  
      console.log(variable + ' – логический тип');
      break;
    default:
      console.log('Тип ' + variable + ' не определен');
  }