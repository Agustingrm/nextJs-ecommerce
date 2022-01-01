import formatMoney from '../lib/formatMoney';

describe('Format money function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(156)).toEqual('$1.56');
  });
  it('Leaves out cents when its whole dollars', () => {
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(400)).toEqual('$4');
    expect(formatMoney(19700)).toEqual('$197');
  });
  it('Works with whole and fractional dollars', () => {
    expect(formatMoney(140)).toEqual('$1.40');
    expect(formatMoney(588)).toEqual('$5.88');
    expect(formatMoney(921)).toEqual('$9.21');
    expect(formatMoney(1234567890)).toEqual('$12,345,678.90');
  });
});
