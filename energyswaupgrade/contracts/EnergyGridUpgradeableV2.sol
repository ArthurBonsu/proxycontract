pragma solidity 0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '../contracts/libraries/StringUtils.sol';
import '../contracts/libraries/SafeMath.sol';
// This is the main building block for smart contracts.
contract EnergyGridUpgradeableV2 is    Ownable,ERC20 {
using SafeMath for uint256;
// We set the 3 options players are required to choose
// We set it to constant to avoid wrong typo, safer for the contract
//user type 
//basic , premium or hybrid user
string    basic = "basic";
string   premium = "premium";
string   hybrid = "hybrid";
bool   basicchosen = false;
bool   premiumchosen = false;
bool   hybridchosen = false;
string userchoicename;
bool   setprevrewards = false;
string  servicechosen;
// We assign state variables here 
string private _tokenname ="ENERGYTOKENS";
string private _tokensymbol= "ENG";
address private _owner;
uint256 randNonce =0;
uint256 modulus =0;
uint256 _payfee=0;
uint256 maxWaitTime = 100;
uint256 amounttostake; 
uint256 prev_gridstaked;    
//  address  owner; 
// We decide to use the mapping instead of the struct approach
// We set a struct for each grid, the users of the grid and then the information on what user information in each grid
struct Grid {
uint256  gridid; 
uint256 gridcount;
}
struct Users {
address payable useraddress;
string username;
uint256 userpoint;
uint256 userbalance;
}
struct UserInEnergyGridInfo{
uint256 energygridid;
address payable usersingridaddress;
bool gridfunctioning;    
uint256 gridreputationscore; 
uint256 griduserscount;
uint256 duration;
}
// The fixed amount of tokens stored in an unsigned integer type variable.
uint256 public _totalSupply = 1000000;
// An address type variable is used to store ethereum accounts taken from Ownable.sol
// address public owner;
// A mapping is a key/value map. Here we store each account balance.
// We store values that can be easy to have when we want to index values
mapping(address => uint256) balances;
mapping(address => mapping(address => uint256)) private _allowances;
// We have a grid check, a previous reward and the user grid info here
mapping(address => mapping(bytes32 => bool)) useringridcheck;
mapping(uint256 => mapping(address => uint256)) prev_rewards;
mapping(uint256 => mapping(address => uint256)) usersingridinfodetail;     
mapping(uint256 => uint256) gridsused;
mapping(address => address) usersinallgrid;
mapping(address => bool)paidforgridusage;
//We set into memory for cheaper access
// Mapping for carrying the infors
mapping(uint256=>Grid) public _energygrids;
mapping(address=>Users)public userlist;
mapping(uint256=>UserInEnergyGridInfo) public usersingridlist;
// We set the object for our tracks
Grid  newenergygrid;
Users  newuserregistered;
UserInEnergyGridInfo  useringridinfo;
// We push into storage 
Grid[] public energygridregistered;
Users[] public usersregistered;
UserInEnergyGridInfo[] public usersingridinfo;
/**npn
* Contract initialization.
*
* The `constructor` is executed only once when the contract is created.
*/
// modifier to check if caller is owner
constructor(address __owner) ERC20(_tokenname, _tokensymbol ) {
_owner =__owner;
// Full initializations
// we set the owner from Ownable
_owner = owner();
_owner = __owner;
balances[_owner] = _totalSupply; 
}
/*
modifier isOwner() {
// If the first argument of 'require' evaluates to 'false', execution terminates and all
// changes to the state and to Ether balances are reverted.
// This used to consume all gas in old EVM versions, but not anymore.
// It is often a good idea to use 'require' to check if functions are called correctly.
// As a second argument, you can also provide an explanation about what went wrong.
require(msg.sender == _owner , "Caller is not owner");
}
*/  
/**
* A function to transfer tokens.
*
* The `external` modifier makes a function *only* callable from outside
* the contract.
*/
// We make ppayment to participate in the grid
function payfee(address payable sender, uint256 amount) external payable returns(bool, bytes memory){
// Call returns a boolean value indicating success or failure.
// This is the current recommended method to use.
_owner =owner();
require ( amount >= 10, "Amount not enough to play!");
// (bool sent, bytes memory data) = msg.sender.call{value: _payfee}("");
//   require(sent, "Failed to send Ether");
(bool success,bytes memory data ) = _owner.call{value: _payfee}("");
require(success, "Check the amount sent as well"); 
paidforgridusage[sender]= true;
return (success,data);
}
//Eventing everything
function registerenergyusername(string memory _username, address payable _useraddress) external  returns(string memory, address){
//If we dont want to use the modifier from Ownable.sol
require(msg.sender == _owner , "Caller is not owner");
if (paidforgridusage[_useraddress] == true){
uint256 userbalance =0;
userbalance = balanceOf(_useraddress);
if(usersinallgrid[_useraddress] != _useraddress){
//for player who has ever played before
usersinallgrid[_useraddress] =_useraddress ;
// for registered player
// Storing to memory
newuserregistered = Users(_useraddress,_username, 0,userbalance ); 
userlist[_useraddress].useraddress = _useraddress;
userlist[_useraddress].username = _username;
userlist[_useraddress].userpoint = 0;
userlist[_useraddress].userbalance = userbalance;
// Storing to storage
usersregistered.push(newuserregistered);                        
return (_username,_useraddress );
}
}
}
// Registration for grid
function registergrid(uint256 _energygridid) external  returns(uint256){
uint256 i =0;
i++;
require(msg.sender == _owner , "Caller is not owner");
uint256 energygridcount = 0;
if(gridsused[_energygridid] != _energygridid){
gridsused[_energygridid] = _energygridid;
newenergygrid = Grid(_energygridid,energygridcount );
// Store into memory 
_energygrids[_energygridid].gridid = _energygridid;
_energygrids[_energygridid].gridcount = i;
energygridregistered.push(newenergygrid);
return (_energygridid);
}
}
// set the grid for the user        
function setenergygridwithuser(uint256 _energygridid, address payable _energyuseraddress) internal returns(uint, address) {
uint256 _energyusercount =0;
_energyusercount++;
require(msg.sender == _owner , "Caller is not Energy Grid owner");
uint256 __energygridid =0;
__energygridid = _energygridid;
// We set the nonce to any random number
// We can set any random variable
randNonce; 
modulus= 100000000000;
__energygridid = uint256(keccak256(abi.encodePacked(block.timestamp,
msg.sender,
randNonce))) % 
modulus; 
require(msg.sender == _owner, "Caller is not owner");
// The list of players must be less than two
require( usersingridlist[_energygridid].griduserscount < 50 == true, "Only 50 users in each energy grid");       
require(usersingridinfodetail[_energygridid][_energyuseraddress] == _energygridid, "User is already a member of grid");      
// We check if user is registered within id
usersingridinfodetail[_energygridid][_energyuseraddress] = _energygridid;
uint256 _duration = block.number + maxWaitTime;
useringridinfo = UserInEnergyGridInfo(_energygridid, _energyuseraddress, false, 0,0, _duration);
usersingridlist[__energygridid].energygridid = _energygridid;
usersingridlist[__energygridid].usersingridaddress = _energyuseraddress;
usersingridlist[__energygridid].gridfunctioning = false;
usersingridlist[__energygridid].gridreputationscore = 0;
usersingridlist[__energygridid].griduserscount = 0;
usersingridlist[__energygridid].duration = _duration;
// Setting into storage
usersingridinfo.push(useringridinfo);
return(_energygridid, _energyuseraddress);  
}
function _checkuserregistered(address payable _useraddress) public returns (bool ) {
require(usersinallgrid[_useraddress] == _useraddress );
return(true);
}
function _checkgridregistered(uint256 _energygridid) public returns (bool) {
require(_energygrids[_energygridid].gridid== _energygridid,"Energy grid id does not exist" );
return(true);
} 
function _checkuseringrid(uint256  _energygridid,address _useraddress ) public returns (bool){
require( usersingridlist[_energygridid].usersingridaddress == _useraddress,"User not fouund in grid");
return (true);
}
// We can choose each service 
function selectBasic( ) public virtual  returns(bool)
{ 
if (basicchosen){
basicchosen = true;
return (basicchosen); 
}else{
basicchosen = false;
return (basicchosen);
}         
}
function selectPremium() public virtual  returns(bool)
{ if (premiumchosen){
premiumchosen = true; 
return (premiumchosen);
}else{
premiumchosen = false;
return (premiumchosen);
}         
}
function selectHybrid(  ) public virtual  returns(bool){
if (hybridchosen){
hybridchosen = true;
return (hybridchosen); 
}else{
hybridchosen = false;
return (hybridchosen);
}         
}
// We can stake previous rewards gotten in the grid
function stakeprevrewards( ) public virtual  returns(bool) {
if(setprevrewards) {
setprevrewards =true;
}else{
setprevrewards =false;
}
return (setprevrewards);
}
function choosegridtostake(uint256 energygridid,address payable _useraddress, uint256 _amount ) public virtual   returns(uint256){
prev_gridstaked =0;
prev_gridstaked=energygridid;
if (stakeprevrewards( ) ==true ){
amounttostake =0;
amounttostake=_amount;
uint256 winnings =0;
winnings  =    prev_rewards[energygridid][_useraddress];
require( winnings > amounttostake, " The amount requested is not enough in this grid,please check in another grid");
transfer(_owner, amounttostake);
return( amounttostake);
}
}
//Now time to connect to grid 
event connectogridevent(uint256  eventenergygridid, address payable _eventuseraddress, string   _eventservicechosen);
function connecttogrid(uint256 _energygridid, address payable _energyuseraddresss) internal returns(uint256, address, string memory){
string memory _servicechosen; 
// Access Controls
require(msg.sender == _owner , "Caller is not owner");
_checkuserregistered(_energyuseraddresss);
_checkgridregistered( _energygridid);
_checkuseringrid( _energygridid ,_energyuseraddresss ); 
choosegridtostake(prev_gridstaked, _energyuseraddresss,amounttostake );
servicechosen = _servicechosen;
if (selectBasic() == true ){
premiumchosen = false;
hybridchosen = false;
servicechosen = "basic" ;
}
if (selectPremium()== true ){
basicchosen = false;
hybridchosen = false;
servicechosen = "premium" ;
}
if (selectHybrid()== true ){
basicchosen =false;
premiumchosen =false;
servicechosen = "hybrid" ;
}
// We set a shuffler to generate a random number    
uint256 shuffler = 0;
shuffler= 100000000;
uint256 _energyindex = 0;
// We set a random number, well there has to be a better way of doing this thing
randNonce++; 
_gameindex =   uint256(keccak256(abi.encodePacked(block.timestamp,
msg.sender,
randNonce))) % 
shuffler; 
string memory premiumpackage = "premium";    
if (StringUtils.equal(servicechosen, premiumpackage)== true ){
approve( _energyuseraddresss, 100);
transfer(_energyuseraddresss,100);
// _owner.transfer(_theplayeraddress,10000);
balanceOf(_energyuseraddresss);
prev_rewards[_energygridid][_energyuseraddresss] +=100; 
// Whatever energy business model is necessary to be built 
}        
emit connectogridevent( _energygridid,  _energyuseraddresss,  servicechosen);
return ( _energygridid,  _energyuseraddresss,  servicechosen);
}
// We inherit some ERC20 calls 
function balanceOf(address account) public view override  returns (uint256) {
return (balances[account]);
}
function owner() public view virtual override returns (address) {
return (_owner);
}
function mint (address account, uint256 amount) external   virtual  returns (address, uint256 ) {
_mint( msg.sender,  amount);
return(  account,  amount);
}
function burn (address account, uint256 amount) external   virtual returns (address, uint256 ) {
_burn( msg.sender ,  amount);
return(  account,  amount);
}
function totalSupply() public view virtual override  returns (uint256) {
return (_totalSupply);
}
function transferFrom(
address sender,
address recipient,
uint256 amount
) public virtual override returns (bool) {
// Just in case we have not transferred to sender
// sender =_owner;
_transfer(sender, recipient, amount);
// setting allowance value here
uint256 allowallowance =  _allowances[sender][_msgSender()];
// 90 percent of owners balance allowed
uint256 senderbalance = balances[sender];
uint256 allownacevalue =90;
uint256 ninetypercent = allownacevalue /100;
uint256 maximumallowance = ninetypercent * senderbalance;
// We set the current allowance as that figure
//  uint256 currentAllowance = _allowances[sender][_msgSender()];
allowallowance =maximumallowance;
uint256 currentAllowance = allowallowance;
require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
unchecked {
_approve(sender, _msgSender(), currentAllowance - amount);
}
return true;
}
function allowance(address owner, address spender) public view virtual override returns (uint256) {
return _allowances[owner][spender];
}
}