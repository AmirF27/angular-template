import { IntPipe } from './int.pipe';

describe('IntPipe', () => {
  it('create an instance', () => {
    const pipe = new IntPipe();
    expect(pipe).toBeTruthy();
  });
});
