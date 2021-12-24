pragma solidity 0.8.2;
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
interface IEnergiToken {
  function setOwner(address _owner) external;
function mint(address recipient, uint amount) external;
function burn(address recipient, uint amount) external;
 
}
