describe('extend', function() {
  it('when given an empty destination and an object to be extended with then the destination object contains source properties', function() {
    var me = {};
    var him = { name: 'Serban', job: 'programmer' };
    extend(me, him);
    expect(me.name).toBe('Serban');
    expect(me.job).toBe('programmer');
  });

  it('when given a destination and a source that has the same keys as destination then those key values will be overridden', function() {
    var me = { name: 'Serban', job: 'programmer' };
    var him = { name: 'Bob', job: 'artist' };
    extend(me, him);
    expect(me.name).toBe('Bob');
    expect(me.job).toBe('artist');
  });

  it('when given a source that have more fields that the destination then the destination will inherit new source fields', function() {
    var me = {name: 'Serban', age: 32, sex: 'male'};
    var him = {name: 'Serban', age: 33};
    extend(him, me);
    expect(him.sex).toBeDefined();
    expect(him.sex).toBe('male');
  });
});