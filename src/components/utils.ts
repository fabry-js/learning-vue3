export const transformNames = (res: { data: string[] }) => {
  const originData: string[] = res.data;
  const finalArr: string[] = [];

  originData.forEach((charName) => {
    let _uppedName = charName.replace(charName[0], charName[0].toUpperCase());
    let finalName = "";
    if (_uppedName.includes("-") === true) {
      const _dashNameArray = _uppedName.replace("-", " ").split(" ");
      const _dashNameFirstUppedPortion = _dashNameArray[0];
      const _dashNameLowerPortion = _dashNameArray[1];
      const _uppedLowerPortion = _dashNameLowerPortion.replace(
        _dashNameLowerPortion[0],
        _dashNameLowerPortion[0].toUpperCase()
      );

      finalName = `${_dashNameFirstUppedPortion} ${_uppedLowerPortion}`;
    } else {
      finalName = _uppedName;
    }
    finalArr.push(finalName);
  });
  return finalArr;
};
