import React, {useState, useEffect} from 'react';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Layout from './LayoutT';
import AreaChart from './snippets/AreaChart';
import AreaChartTau from './snippets/AreaChartTau';
import AreaChartasaswap from './snippets/AreaChartASAswap';
import AreaChartMintFeeTau from './snippets/AreaChartMintFeeTau';
import BarChartMarketcap from './snippets/BarChartMarketcap';
import BarCharttreasuryvalue from './snippets/BarChartTreasuryvalue';
import AreaCharttotalsupply from './snippets/AreaCharttotalsupply';
import BarChartPrice from './snippets/BarChartPrice';
import AreaChartElemReserve from './snippets/AreaChartElemReserve';
import AreaChartMintFeeEinr from './snippets/AreaChartMintFeeEinr';
import AreaChartRedeemFee from './snippets/AreaChartRedeemFee';
import AreaChartTauCollateral from './snippets/AreaChartTauCollateral';
import AreaChartEinrCollateral from './snippets/AreaChartEinrCollateral';
import LineChart from './snippets/LineChart';
import PieChartElem from './snippets/PieChartStable';
import PieChartBurnVault from './snippets/PieChartBurnVault';
import PieChartBurnVault1 from './snippets/PieChartBurnVault1';
import PieChartEinr from './snippets/PieChartStable';
import node from './nodeapi.json';
import dashboardDetails from '../Dashboard/stablecoin-only.json';
import config from '../../NFTFolder/config.json'
import axios from 'axios';

import jokercoin from '../../assets/images/Jokercoin.png';
import stasiscoin  from '../../assets/images/stasiscoin.png';
import creditscoin from '../../assets/images/creditscoin.png';
import reabseTimer from '../../assets/images/rebseTimer.png';


import AreaChartNFT from './snippets/AreaChartNFT'
import Logo from '../../assets/images/algorand-logo.png';
import { ethers } from 'ethers';
import { JOKERAddress,CREDITAddress,CreditcontractAbi,JOKERCOntractABI,BlackAbi, BondAbi, BondAddress, CommunityWallet, DAIAddress, DIMEAddress, DaiAbi, DimeAbi, JUSDAbi, JUSDAddress, JUSDPoolAbi, JUSDPoolAddress, TreasuryAddress,DIMEChainlinkAddress,CREDITChainlinkAddress,JOKERChainlinkAddress,ChainLinkABi,CreditpolicyAbi,CreditPolicyContractAddress,DimeContractABI,ECOReserveAddress,ECOReserveABI, DAOReserveAddress, USDCAddress, USDCContractABI, USDCChainlinkAddress } from '../../abi/abi';
import PieChart from './snippets/PieChartStable';
import BarChartTreasuryvalue from './snippets/BarChartTreasuryvalue';

// const algosdk = require('algosdk');
const Dashboard = () => {

    useEffect(() => {
        document.title = "JOKER | Dashboard"
    }, [])

    const [einrCir, setEinrCir] = useState("");
    const [elemCir, setElemCir] = useState("");
    const [tauCir, setTauCir] = useState("");
    const [usdcFee, setUsdcFee] = useState("");
    const [tauFee, setTauFee] = useState("");
    const [einrFee, setEinrFee] = useState("");
    const [elemBalance, setElemBalance] = useState("");
    const [elemReserveBalance, setElemReserveBalance] = useState("");
    const [tauBalance, setTauBalance] = useState("");
    const [usdcTauBalance, setUsdcTauBalance] = useState("");
    const [einrBalance, setEinrBalance] = useState("");
    const [usdcEinrBalance, setUsdcEinrBalance] = useState("");
    const [nftBalance, setnftBalance] = useState("");
    const[asaswapelembalance,setasaswapelembalance] = useState("");
    const [jokerMarketCap, setJokerMarketCap] = useState(0);
    const [creditMarketCap, setCreditMarketCap] = useState(0);
    const [dimeMarketCap, setDimeMarketCap] = useState(0);

  

    const [CreditPrice, setCreditPrice] = useState("");
    const [DimePrice, setDimePrice] = useState("");
    const [JokerPrice, setJokerPrice] = useState("");
    const [TreasuryPrice, setTreasuryPrice] = useState("");
    const [Colratio, setColratio] = useState("");


    const [TrDaiBalance, setTrDaiBalance] = useState("");
    const [TrDimeBalance, setTrDimeBalance] = useState("");
    const [TrJokerBalance, setTrJokerBalance] = useState("");
    const [ComDimeBalance, setComDimeBalance] = useState("");
    const [nextrebasetime, setnextrebasetime] = useState("");
    const [nextrebasetimedime, setnextrebasetimeDime] = useState("");
    const[timecf,settime]= useState("");
    const[map1,setMap]= useState([]);
    const[day,setTime4]= useState("");
    const[hour,setTim1]= useState("");
    const[min,setTim2]= useState("");
    const[sec,setTim3]= useState("");
    const[lock,setlock]= useState(""); 
    const[date,setdate]= useState("");

    const[timecdime,settimedime]= useState("");
    const[daydime,setTime4dime]= useState("");
    const[hourdime,setTim1dime]= useState("");
    const[mindime,setTim2dime]= useState("");
    const[secdime,setTim3dime]= useState("");
    const[lockdime,setlockdime]= useState(""); 
    const[datedime,setdatedime]= useState("");
    const[TotalSupply,setTotalSupply] = useState("");
    const[JokerTotalSupply,setJokerTotalSupply] = useState("");
    const[CreditTotalSupply,setCreditTotalSupply] = useState("");
    const[LiquidityValue,setLiquidity] = useState("");
    const[DAOValue,setDAOValue] = useState("");
    const[BondValue,setBondValue] = useState("");



    

    useEffect(() => {
        const fetchData = async () => {
            await cir();
        };
    
        fetchData();
    }, []);
    
    const cir =async () =>
    {
        const url = "https://sepolia.infura.io/v3/886e9a53b5da4f6286230678f7591bde";
        const provider = new ethers.providers.JsonRpcProvider(url);
        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        // console.log("Connected Successfully", account);

        // Create contract instance with the correct order of arguments
        // const jusdpoolcontract = new ethers.Contract(JUSDPoolAddress, JUSDPoolAbi, provider);
        const dimepricedashboard = new ethers.Contract(DIMEChainlinkAddress,ChainLinkABi,provider);
        const jokerpricedashboard = new ethers.Contract(JOKERChainlinkAddress,ChainLinkABi,provider);
         const creditpricedashboard = new ethers.Contract(CREDITChainlinkAddress,ChainLinkABi,provider);
        let dimeprice =  ethers.utils.formatUnits(await dimepricedashboard.getChainlinkDataFeedLatestAnswer(),0);
      
        let jokerprice =  ethers.utils.formatUnits(await jokerpricedashboard.getChainlinkDataFeedLatestAnswer(),0);
        let creditprice =  ethers.utils.formatUnits(await creditpricedashboard.getChainlinkDataFeedLatestAnswer(),0);
       
        setCreditPrice(creditprice);
        setDimePrice(dimeprice);
        setJokerPrice(jokerprice*10);
     

        const Creditcontract = new ethers.Contract(CreditPolicyContractAddress,CreditpolicyAbi, provider);
       
        let lastepoch = ethers.utils.formatUnits(await Creditcontract.lastRebaseTimestampSec(),0);
        console.log("lastepo1",lastepoch);
        let epochhours = ethers.utils.formatUnits(await Creditcontract.minRebaseTimeIntervalSec(),0);
       
        let added = parseInt(lastepoch) + parseInt(epochhours)
        console.log("lastepoch",lastepoch,epochhours,added)
        setnextrebasetime(added)
        console.log("lastepore",nextrebasetime);
        const Dimecontract = new ethers.Contract(DIMEAddress,DimeContractABI, provider);
        const Jokercontract = new ethers.Contract(JOKERAddress,JOKERCOntractABI, provider);
        const CreditTokencontract = new ethers.Contract(CREDITAddress,CreditcontractAbi, provider);
        let lastepochdime = ethers.utils.formatUnits(await Dimecontract.lastEpoch(),0);

        let totalsupply = ethers.utils.formatUnits(await Dimecontract.totalSupply(),0);
        setTotalSupply(totalsupply)
     
        let jokertotalsupply = ethers.utils.formatUnits(await Jokercontract.totalSupply(),0);
        setJokerTotalSupply(jokertotalsupply)

        let credittotalsupply = ethers.utils.formatUnits(await CreditTokencontract.totalSupply(),0);
        setCreditTotalSupply(credittotalsupply)
        console.log("credit",credittotalsupply)

        setLiquidity(ethers.utils.formatUnits(await Jokercontract.balanceOf(JOKERAddress),0))

        let epochhoursdime = ethers.utils.formatUnits(await Dimecontract.epochHours(),0);
        let addeddime = parseInt(lastepochdime) + parseInt(epochhoursdime)
        console.log("lastepochdime",addeddime)
        setnextrebasetimeDime(addeddime)
        console.log("lastepore",nextrebasetimedime);
        const Ecoreservecontract = new ethers.Contract(ECOReserveAddress,ECOReserveABI, provider);
        let Credittotalbalance = ethers.utils.formatUnits(await Ecoreservecontract.getTreasuryBalanceCredit(),9);
        console.log("creditvalue1",creditvalue);
        let creditvalue =Credittotalbalance * creditprice;
        console.log("creditvalue",creditvalue);
        let dimetotalbalance = ethers.utils.formatUnits(await Ecoreservecontract.getTreasuryBalanceDime(),9);
        let dimevalue =dimetotalbalance*dimeprice;
        let jokertotalbalance = ethers.utils.formatUnits(await Ecoreservecontract.getTreasuryBalanceJoker(),9);
        let jokervalue =jokertotalbalance*jokerprice;
        setTreasuryPrice(creditvalue + dimevalue +jokervalue);

        let jokerBalance = ethers.utils.formatUnits(await Jokercontract.balanceOf(DAOReserveAddress),9);
        let creditBalance = ethers.utils.formatUnits(await CreditTokencontract.balanceOf(DAOReserveAddress),9);
        let dimeBalance = ethers.utils.formatUnits(await Dimecontract.balanceOf(DAOReserveAddress),9);

        const USDCcontract = new ethers.Contract(USDCAddress,USDCContractABI,provider);
        const usdcpricedashboard = new ethers.Contract(USDCChainlinkAddress,ChainLinkABi,provider);
        let usdcprice =  ethers.utils.formatUnits(await usdcpricedashboard.getChainlinkDataFeedLatestAnswer(),0);
        let dimeBalance1 = ethers.utils.formatUnits(await Dimecontract.balanceOf(TreasuryAddress),9);
        let usdcBalance1 = ethers.utils.formatUnits(await USDCcontract.balanceOf(TreasuryAddress),9);

        setDAOValue(jokerBalance*jokerprice + creditBalance*creditprice + dimeBalance*dimeprice);
        setBondValue(dimeBalance1*dimeprice + usdcBalance1*usdcprice)



        // const jokercontract = new ethers.Contract(JOKERAddress, JOKERCOntractABI, provider);
        // let totalSupplyOfJoker = ethers.utils.formatUnits(await jokercontract.totalSupply(),0);
        // const jokerMarketCap = JokerPrice * totalSupplyOfJoker; // Replace totalSupplyOfJoker with the actual total supply
       
        // const creditcontract = new ethers.Contract(CreditAddress, CreditcontractAbi, provider);
        // let totalSupplyOfCredit = ethers.utils.formatUnits(await creditcontract.totalSupply(),0);
        // const creditMarketCap = CreditPrice * totalSupplyOfCredit; // Replace totalSupplyOfCredit with the actual total supply
        
    //     const dimecontract = new ethers.Contract(DIMEAddress, DimeContractABI, provider);
    //     let totalSupplyOfDime = ethers.utils.formatUnits(await dimecontract.totalSupply(),0);
    //     const dimeMarketCap = DimePrice * totalSupplyOfDime; // Replace totalSupplyOfDime with the actual total supply
   
    //    setJokerMarketCap(jokerMarketCap);
    //    setCreditMarketCap(creditMarketCap);
    //    setDimeMarketCap(dimeMarketCap);
      

        

        // let trdaiBalance = ethers.utils.formatUnits(await daicontract.balanceOf(TreasuryAddress),18);
        // let trdimeBalance = ethers.utils.formatUnits(await dimecontract.balanceOf(TreasuryAddress),18);
        // let trjokerBalance = ethers.utils.formatUnits(await jokercontract.balanceOf(TreasuryAddress),9);
        // let communitydimeBalance = ethers.utils.formatUnits(await dimecontract.balanceOf(CommunityWallet),18);

        // setTrDaiBalance(trdaiBalance);
        // setTrDimeBalance(trdimeBalance);
        // setTrJokerBalance(trjokerBalance);
        // setComDimeBalance(communitydimeBalance);

        




    }

    useEffect(async() => {
        await first()
    }, [nextrebasetime]);
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    
    const first = async () => {
    console.log("lasteporebase",nextrebasetime);
        var us= nextrebasetime;
        var ff=new Date(us);
    setdate(ff.toDateString());
    var hours = ff.getHours();
      var minutes = ff.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      settime( hours + ':' + minutes + ' ' + ampm);
    //settime(lock);
    var countDowndate   =us * 1000;
    //// console.log(countDowndate);
    // var countDownDate = new Date().getTime() + (lock * 1000) ;
    //alert(time);
        var x = setInterval(function() {
           var now = new Date().getTime();
          var distance = countDowndate - now ;
        //   // console.log("-------------------now", distance);
         // // console.log(now);
          // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          console.log("date e", day);
          console.log("hour e", hour);
          console.log("min e", minutes);
          console.log("sec e", seconds);
    
          // Output the result in an element with id="demo"
         // document.getElementById("demo").innerHTML = hours + "h "
         // + minutes + "m " + seconds + "s ";
        setTime4(days);
        setTim1(hours);
        setTim2(minutes);
        setTim3(seconds);
    
    
        
        
        
        
          // If the count down is over, write some text 
          if (distance < 0) {
                clearInterval(x);
                setlock(false);
    
               // // console.log('CountDown Finished');
            }
            else{
             setlock(true);
            }
    
        
          
        }, 1000);
       
    
    }
  
   useEffect(async() => {
        await dimerebase()
    }, [nextrebasetimedime]);
    
   
    
    const dimerebase = async () => {
    console.log("lasteporebase",nextrebasetime);
        var us= nextrebasetimedime;
        var ff=new Date(us);
    setdatedime(ff.toDateString());
    var hours = ff.getHours();
      var minutes = ff.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      settimedime( hours + ':' + minutes + ' ' + ampm);
    //settime(lock);
    var countDowndate   =us * 1000;
    //// console.log(countDowndate);
    // var countDownDate = new Date().getTime() + (lock * 1000) ;
    //alert(time);
        var x = setInterval(function() {
           var now = new Date().getTime();
          var distance = countDowndate - now ;
        //   // console.log("-------------------now", distance);
         // // console.log(now);
          // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          console.log("date e", day);
          console.log("hour e", hour);
          console.log("min e", minutes);
          console.log("sec e", seconds);
    
          // Output the result in an element with id="demo"
         // document.getElementById("demo").innerHTML = hours + "h "
         // + minutes + "m " + seconds + "s ";
        setTime4dime(days);
        setTim1dime(hours);
        setTim2dime(minutes);
        setTim3dime(seconds);
    
    
        
        
        
        
          // If the count down is over, write some text 
          if (distance < 0) {
                clearInterval(x);
                setlockdime(false);
    
               // // console.log('CountDown Finished');
            }
            else{
             setlockdime(true);
            }
    
        
          
        }, 1000);
       
    
    }

    const TransactionTable = ({ transactions }) => {
        return (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={tableCellStyle}>S.no</th>
                <th style={tableCellStyle}>Txnhash</th>
                <th style={tableCellStyle}>From</th>
                <th style={tableCellStyle}>To</th>
                <th style={tableCellStyle}>Time</th>
                <th style={tableCellStyle}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td style={tableCellStyle}>{index + 1}</td>
                  <td style={tableCellStyle}>{transaction.txnHash}</td>
                  <td style={tableCellStyle}>{transaction.from}</td>
                  <td style={tableCellStyle}>{transaction.to}</td>
                  <td style={tableCellStyle}>{transaction.time}</td>
                  <td style={tableCellStyle}>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
      
      const tableCellStyle = {
        border: '1px solid black',
        padding: '8px',
      };
      
      const tableRowStyle = {
        textAlign: 'center',
      };
      
      const transactions = [
        {
          txnHash: '0x123456789',
          from: 'Sender 1',
          to: 'Receiver 1',
          time: '2024-02-09 10:30:00',
          amount: '$100',
        },
        {
          txnHash: '0x987654321',
          from: 'Sender 2',
          to: 'Receiver 2',
          time: '2024-02-09 11:45:00',
          amount: '$150',
        },
        // Add more transactions as needed
      ];
      
      
    return (
        <Layout>
            <Container>
                <Row>
                  
                    <Col md={3}>
                   
                    <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple"><img src={jokercoin} width={35} height={35}></img>&nbsp;TAU   
                           
                            </div>
                            </Col>
                            <hr className='mb-20 mt-0' />
                           
                            </Row>
                           

                              <div className='mb-20'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h6 className='sub-heading mb-0'>
                                        Price
                                    </h6>
                                    {/* <h4 className='mb-2'>${parseFloat(JokerPrice/1e8)?parseFloat(JokerPrice/1e8).toFixed(3):"0"}</h4> */}
                                </div>
                                {/* <div>
                                    <h6 className='sub-heading mb-0'>
                                        MarketCap
                                    </h6>
                                    <h4 className='mb-2'>${parseFloat(JokerTotalSupply / 1e8) ? parseFloat((JokerTotalSupply*JokerPrice) / 1e17).toFixed(3) : "0"}</h4>
                                </div> */}

                                <div>
                                {/* <h6 className='sub-heading mb-0'>
                                 Liquidity Value
                                </h6> */}
                                 <h4 className='mb-2'>${parseFloat(LiquidityValue / 1e8) ? parseFloat((LiquidityValue*JokerPrice) / 1e17).toFixed(3) : "0"}</h4>
                                   
                                </div>

                               
                            </div>
                        </div>                    
                        </Card>  
                    </Col>
                    <Col md={3}>
                   
                   <Card className='card-dash border-0 mb-4'>
                           <Row>
                               <Col>
                           <div className="text-md mb-20 font-semibold leading-7 text-purple">
                                {/* <img src={stasiscoin} width={35} height={35}></img>&nbsp; DIME   */}
                           {/* <h6 className='sub-heading mb-0'> */}
                                       Circulatingsupply
                                   {/* </h6> */}
                           </div>
                           </Col>
                           <hr className='mb-20 mt-0' />
                          
                           </Row>
                           <div className='mb-20'>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              
                              

                               <div>
                               
                               <h4 className='mb-2'>${parseFloat(DimePrice / 1e8) ? parseFloat(DimePrice / 1e8).toFixed(3) : "0"}</h4>
                                  
                               </div>

                              
                           </div>
                       </div>
               
                       </Card>
                   </Col>
                    <Col md={3}>
                   
                   <Card className='card-dash border-0 mb-4'>
                           <Row>
                               <Col>
                           <div className="text-md mb-20 font-semibold leading-7 text-purple">
                                {/* <img src={stasiscoin} width={35} height={35}></img>&nbsp; DIME   */}
                           {/* <h6 className='sub-heading mb-0'> */}
                                       MarketCap
                                   {/* </h6> */}
                           </div>
                           </Col>
                           <hr className='mb-20 mt-0' />
                          
                           </Row>
                           <div className='mb-20'>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              
                              

                               <div>
                               
                               <h4 className='mb-2'>${parseFloat(DimePrice / 1e8) ? parseFloat(DimePrice / 1e8).toFixed(3) : "0"}</h4>
                                  
                               </div>

                              
                           </div>
                       </div>
               
                       </Card>
                   </Col>
                   <Col md={3}>
                   
                   <Card className='card-dash border-0 mb-4'>
                           <Row>
                               <Col>
                           <div className="text-md mb-20 font-semibold leading-7 text-purple">
                                {/* <img src={stasiscoin} width={35} height={35}></img>&nbsp; DIME   */}
                           {/* <h6 className='sub-heading mb-0'> */}
                                     Treasury Price
                                   {/* </h6> */}
                           </div>
                           </Col>
                           <hr className='mb-20 mt-0' />
                          
                           </Row>
                           <div className='mb-20'>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              
                              

                               <div>
                               
                               <h4 className='mb-2'>${parseFloat(DimePrice / 1e8) ? parseFloat(DimePrice / 1e8).toFixed(3) : "0"}</h4>
                                  
                               </div>

                              
                           </div>
                       </div>
               
                       </Card>
                   </Col>
                   
                </Row>
            
                <Row>
                <div>
      <h1>Transaction History</h1>
      <TransactionTable transactions={transactions} />
    </div>
                </Row>
            </Container>
        </Layout>
    );
};

export default Dashboard;