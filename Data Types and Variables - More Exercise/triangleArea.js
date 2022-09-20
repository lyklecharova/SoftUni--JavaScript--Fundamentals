function triangleArea(firstSide, secondSide, thirdSide) {
    let sideArea = (firstSide + secondSide + thirdSide) / 2;
    let area = Math.sqrt(sideArea * (sideArea - firstSide) * (sideArea - secondSide) * (sideArea - thirdSide));
    console.log(area);
}
