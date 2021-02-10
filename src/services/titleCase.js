const titleCase = (name) =>
  name.replace(/(^|-)(\w)/g, (input) => {
    return input.toUpperCase();
  });

export default titleCase;


