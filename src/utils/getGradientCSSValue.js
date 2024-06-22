function getGradientCSSValue(gradient) {
  const gradientValue = gradient.colors.reduce((acc, color, index) => {
    return (
      acc +
      `${color.value} ${color.position}%${
        index + 1 !== gradient.colors.length ? "," : ""
      }`
    );
  }, "");

  return `linear-gradient(${gradient.angle}deg, ${gradientValue})`;
}

export default getGradientCSSValue;
