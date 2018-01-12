var SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract('SimpleStorage', function(accounts) {

  it("...should store the idea string 'my idea'.", function() {
    return SimpleStorage.deployed().then(function(instance) {
      simpleStorageInstance = instance;
      return simpleStorageInstance.storeIdea('my idea', {from: accounts[0]});
    }).then(function() {
      return simpleStorageInstance.getIdeas.call();
    }).then(function(storedData) {
      //Monkey patching broken toAscii function
      //web3.toAscii(storedData).replace(/\u0000/g,'')
      assert.equal(web3.toAscii(storedData[0]).replace(/\u0000/g,''), 'my idea', "The value 'my idea' was not stored.");
    });
  });

  it("...should store a second idea string 'my second idea'.", function() {
    return SimpleStorage.deployed().then(function(instance) {
      simpleStorageInstance = instance;
      return simpleStorageInstance.storeIdea('my second idea', {from: accounts[0]});
    }).then(function() {
      return simpleStorageInstance.getIdeas.call();
    }).then(function(storedData) {
      //Monkey patching broken toAscii function
      //web3.toAscii(storedData).replace(/\u0000/g,'')
      assert.equal(web3.toAscii(storedData[1]).replace(/\u0000/g,''), 'my second idea', "The value 'my second idea' was not stored.");
    });
  });

});
