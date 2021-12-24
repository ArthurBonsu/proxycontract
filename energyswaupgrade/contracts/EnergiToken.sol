pragma solidity 0.8.2;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import '../contracts/interfaces/IEnergiToken.sol';
contract EnergiToken is  OwnableUpgradeable,ERC20Upgradeable  {
// Due to linearization of Inherited tokens, we have to make sure they match
// We have to avoid incompatibility since the storage address are set and to avoid storage collisions 
// We need to make state variable set in order  
uint256 private _totalSupply;
string private _tokenname;
string private _tokensymbol;   
address private _owner;
// We set an event for it to be easier to call sometimes admini
event EnergyiToken(address _energyownerset);
// We can call initialize any name, the aim is to initialize without since Upgradeable contracts like these do not have a constructor
// Constructors capture state variables upon first instance and are never called.We mimick with the initializer 
// Normal convention requires calling initializer keyword but that is not great for multiargument cases like this
function initialize(address __owner )   public    {
_owner = owner();
_owner = __owner;
// We do not set the parameters values outside the  function(at the top) but in the initializer so they can be captured
// We change the names to avoid state variable collisions
_tokenname ="ENERGYTOKENS";
_tokensymbol= "ENG";
// We set the initializers to the various tokens
__ERC20_init(_tokenname, _tokensymbol);
emit EnergyiToken(__owner);
}
// WE CAN CHOOSE TO IGNORE THIS
/*
function setOwner(address _owner) external {
owner = _owner;
}
*/
// These are standard ERC20 Contracts
function mint(address recipient, uint amount) external {
_mint(recipient, amount);
}
function burn(address recipient, uint amount) external {
_burn(recipient, amount);
}
}