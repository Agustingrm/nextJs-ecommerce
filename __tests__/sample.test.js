function addValues(a, b) {
  const aNum = parseInt(a);
  const bNum = parseInt(b);
  return aNum + bNum;
}

describe('Sample test 101', () => {
  it('Works as expected', () => {
    // We run our expect statements to see if the test will pass
    expect(1).toEqual(1);
  });
  it('Add values function works', () => {
    expect(addValues(1, 4)).toEqual(5);
  });
  it('Add values works with strings', () => {
    expect(addValues('2', '4')).toBe(6);
  });
});
