// SPDX-License-Identifier: MIT
pragma solidity 0.8.2;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
contract EnergyTokenUpgradeable is  OwnableUpgradeable,ERC20Upgradeable {
using SafeMathUpgradeable for uint256;
// We arrange them from a linerarization of state variables. Check must be made to avoid storage collisions
mapping (address => uint256) private _balances;
mapping (address => mapping (address => uint256)) private _allowances;
uint256 private _totalSupply;
string private _tokenname;
string private _tokensymbol;
address private _owner;
event Adminset(address _adminset);
function ownerpick(address __owner )   public    {
_owner = owner();
_owner = __owner;
_tokenname ="ENERGYTOKENS";
_tokensymbol= "ENG";
// __Ownable_init();
__ERC20_init(_tokenname, _tokensymbol);
emit Adminset(__owner);
}
// We make a custom funtion, eg. energidset
// We utilize public functions, we could use external functions
function energyidset(address  _energyid) public returns (address ) {
return(_energyid);
}
// Simple  ERC20Upgradeable function just to prove our concept
// This is the first version of the code
//We will write upgrade the upgrade to our contract 
//Some ERC20 Calls Here
function totalSupply() public view override returns (uint256) {
return _totalSupply;
}
function balanceOf(address account) public view override returns (uint256) {
return _balances[account];
}
function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
_transfer(_msgSender(), recipient, amount);
return true;
}
function allowance(address owner, address spender) public view virtual override returns (uint256) {
return _allowances[owner][spender];
}
function approve(address spender, uint256 amount) public virtual override returns (bool) {
_approve(_msgSender(), spender, amount);
return true;
}
function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
sender =_owner;
_transfer(sender, recipient, amount);
_approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "ERC20: transfer amount exceeds allowance"));
return true;
}
}