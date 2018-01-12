pragma solidity ^0.4.18;

contract SimpleStorage {

  //note reverse array notation
  //bytes[180][] is a dynamic array of 180 byte arrays.
  mapping(address => bytes32[]) public ideas;

  function storeIdea(bytes32 idea) public {
    ideas[msg.sender].push(idea);
  }

  function getIdeas() public view returns (bytes32[]) {
    return ideas[msg.sender];
  }
}
