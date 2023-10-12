import clsx from 'clsx';
import React from 'react';

const Select = ({
  label,
  options = [],
  register,
  errors,
  id,
  validate,
  style,
  fullWidth,
  defaultValue,
}) => {
  return (
    <div className={(clsx('flex flex-col gap-2'), style)}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        defaultValue={defaultValue}
        className={clsx('form-select', fullWidth && 'w-full', style)}
        id={id}
        {...register(id, validate)}
      >
        <option value="">---CHOOSE---</option>
        {options?.map((el) => (
          <option>{el.value}</option>
        ))}
      </select>
      {errors[id] && (
        <small className="text-xl text-red-500">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default Select;
