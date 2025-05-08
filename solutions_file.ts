//
{
  function formatString(input: string, toUpper?: boolean) {
    if (input && toUpper === true) {
      return input.toUpperCase();
    } else if (input && toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  const formatStringCheck = formatString("sumon");
  console.log(formatStringCheck);
}
