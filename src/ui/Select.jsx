function Select({ items, ...props }) {
  return (
    <select {...props}>
      {items.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
