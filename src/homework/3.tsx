import React, { useState, ChangeEvent } from 'react';
// Ви створюєте компонент форми у React. Ви маєте поле введення, в якому ви хочете відстежити зміни. Для цього ви 
// використовуєте обробник подій onChange. Ваше завдання – правильно типізувати подію, яка передається у цю функцію.

type Value = {
  value: string 
}

export function FormComponent() {
  const [value, setValue] = useState<Value | "">("");

  const handleChange = (event:ChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
