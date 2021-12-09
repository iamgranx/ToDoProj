export const validateForm = (todoName) => {
    if (todoName.length === 0) {
      return "Поле обязательно";
    }
  
    if (todoName.length < 4) {
      return "Длина меньше 4";
    }
  
    if (todoName.length > 20) {
      return "Длина больше 20";
    }
  
    return "";
  };
  