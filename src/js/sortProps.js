export default function sortProps(obj, [...key]) {
  const sortKeyProperty = [];
  const usortProperty = []

  for(const prop in obj) {
    if (key.includes(prop)) {
      sortKeyProperty.push({key: prop, value: obj[prop]});
    } else {
      usortProperty.push({key: prop, value: obj[prop]});
    }
  }

  const sortOrderProperty = usortProperty.sort((a, b) => a.key < b.key ? -1 : 1);

  const result = [...sortKeyProperty, ...sortOrderProperty];
  return result;
}
