describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  
  it('returns a sorted array', function(){
    expect( bubbleSort([5,8,1]) ).toEqual( [1,5,8] );
    expect( bubbleSort([5,7,6,3,2,4]) ).toEqual( [2,3,4,5,6,7] );
  });
  
});
