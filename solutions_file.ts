{
  //==
  function formatString(input: string, toUpper?: boolean): string {
    if (input && toUpper === true) {
      return input.toUpperCase();
    } else if (input && toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  const formatStringCheck = formatString("sumon");
  //   console.log(formatStringCheck);

  //==

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  const processValueCheck = processValue(10);
  console.log(processValueCheck);
}
