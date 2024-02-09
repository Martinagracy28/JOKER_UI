import React,{useEffect,useState,createContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DashboardKyc from './KycDid/DashboardKyc'
import View from "./KycDid/View";
import CreateKyc from "./KycDid/CreateKyc";
import Approvepage from "./KycDid/Approvepage";
import LauchpadApp from "./components/DashboardNew/Launchpad";
import Burnvault from "./components/DashboardNew/BurnVault";
import StableswapApp from './components/DashboardNew/Stableswap';

import PoolNew from "./components/DashboardNew/poolNew";
import Home from './components/HomePageswap';
import SinglesideAmm from './components/HomePageswap';
import Analytics from './components/Dashboard/Analytics';
import FaucetApp from './components/DashboardNew/Faucet';
import ElementProtocol from './components/ElementProtocol';


// dashboard
import HotCollectionsApp from './components/DashboardNew/HotCollections'
import GenesisMarketApp from './components/DashboardNew/GenesisMarket'
import MyNFTApp from './components/DashboardNew/MyNFT'
import NFTDetailsApp from './components/DashboardNew/NFTDetails'
import CreateArtistsApp from './components/DashboardNew/CreateArtists'
import MintNFTApp from './components/DashboardNew/MintNFT'
// import EditArtists from "./components/DashboardNew/EditArtists";
import MyNFTCopy from "./components/DashboardNew/MyNFTCopy";
import TopCollections from "./components/DashboardNew/TopCollections";
import TopCategories from "./components/DashboardNew/TopCategories";
import MyNFTCopy2 from "./components/DashboardNew/MyNFTCopy2";
import TopCollectionsFractional from "./components/DashboardNew/TopCollectionsFractional";
import NFTDetailsFra from "./components/DashboardNew/NFTDetailsFra";
import TopCollectionsNFTN from "./components/DashboardNew/TopCollectionsNFTN";
import TopCollectionsAuction from "./components/DashboardNew/TopCollectionsAuction"
import NFTDetailsNFT from "./components/DashboardNew/NFTDetailsNFT";
import NFTDetailsAuction from "./components/DashboardNew/NFTDetailsAuction";
import Liquidity from "./components/DashboardNew/liquidity";
import DashboardNFT from "./components/DashboardNew/DashboardNFT";
import DashboardAMM from "./components/DashboardNew/DashboardAMM";
import firebase from "./NFTFolder/firebase";

//stablecoin

import FaucetStable from './components/DashboardNew/FaucetStable';
import BuybackApp from './components/DashboardNew/Buyback'
import RecollateralizeApp from './components/DashboardNew/Recollateralize'
import StablecoinApp from './components/DashboardNew/Stablecoin';
import MintingApp from './components/DashboardNew/MintCredit&DIME';
import SwapApp from './components/DashboardNew/SwapJoker';
import LiquidityApp from './components/DashboardNew/AddliquidityJoker';
import MintTauApp from './components/DashboardNew/MintTau';

import RedeemApp from './components/DashboardNew/StablecoinRedeem';
import DashboardApp from './components/DashboardNew/Dashboard';
import DashboardMainApp from './components/DashboardNew/DashboardJoker';
import DashboardAdminMainApp from './components/DashboardNew/DashboardJokerAdmin';
import DashboardJokerApp from './components/DashboardNew/DashboardJokerDashboard';
import DashboardCarbonixApp from './components/DashboardNew/DashboardCarbonix';
import DashboardTauApp from './components/DashboardNew/DashboardTau';

import DashboardStasApp from './components/DashboardNew/StatsPage';
import TauMintApp from './components/DashboardNew/TauMintpage';
import AdminPage from './components/DashboardNew/AdminPage';
import VaultPage from './components/DashboardNew/VaultPage';
import Stabilizer from './components/DashboardNew/Stabilizer';
import CarbonYield from './components/DashboardNew/CarbonYield';
import BondApp from './components/DashboardNew/Bonds';

export const DataContext = createContext();
function App() {    
  const[getValue,setValue]=useState([""]);      
  const dbcallProfile=async()=>{        
    let req = [];    
    firebase.auth().signInAnonymously().then((response)=>{      
      firebase.database().ref("pinatakey").on("value", (data) => {
        if (data) {
          data.forEach((d) => {                
          let value=d.val();              
                req.push(            
                    {
                      pinataapikey:value.pinataapikey,
                      pinatasecretkey:value.pinatasecretkey,  
                  })                 
            });        
          }
          setValue(req);
        });                 
    })                      
  }      
  useEffect(()=>{dbcallProfile()},[])      
  return (  
    <DataContext.Provider value={getValue}>
    <Router>
      <Switch> 
        {/* Stabecoin Start */} 
        <Route path="/dashboard">
          <DashboardApp />
        </Route>
        <Route path="/dashboardMain">
          <DashboardMainApp />
        </Route>
        <Route path="/dashboardAdmin">
          <DashboardAdminMainApp />
        </Route> 
        <Route path="/dashboardjoker">
          <DashboardJokerApp />
        </Route> 
        <Route path="/dashboardcarbonix">
          <DashboardCarbonixApp />
        </Route> 
        <Route path="/dashboardtau">
          <DashboardTauApp />
        </Route> 
        
        <Route path="/statspage">
          <DashboardStasApp />
        </Route> 
        <Route path="/tauMint">
          <TauMintApp />
        </Route> 
        <Route path="/stabilizer">
          <Stabilizer />
        </Route> 
        <Route path="/carbon-yield">
          <CarbonYield />
        </Route>
        <Route path="/dashboardAdmin">
          <DashboardAdminMainApp />
        </Route>        
        <Route path="/adminPage">
          <AdminPage />
        </Route>
        <Route path="/vault">
          <VaultPage />
        </Route>
        
        <Route path="/bond">
          <BondApp />
        </Route>
        <Route path="/mint">
          <StablecoinApp />
        </Route>
        <Route path="/minting">
          <MintingApp />
        </Route>
        <Route path="/swap">
          <SwapApp />
        </Route>
        <Route path="/addliquidity">
          <LiquidityApp />
        </Route>
        
        <Route path="/mintTau">
          <MintTauApp />
        </Route>
        <Route path="/redeem">
          <RedeemApp />
        </Route>     
        <Route path="/buyback">
          <BuybackApp />
        </Route>
        <Route path="/burnvault">
          <Burnvault />
        </Route>
        <Route path="/recollateralize">
          <RecollateralizeApp />
        </Route>   
        <Route path="/faucet">
          <FaucetStable />
        </Route>
        {/* Stabecoin end */}

        {/* New Dashboard */}
        <Route path="/liquidity">
          <Liquidity />
        </Route>                       
        <Route path="/hot-collections">
          <HotCollectionsApp />
        </Route>                       
        <Route path="/top-auctioncollection">
          <TopCollectionsAuction/>
        </Route>                       
        <Route path="/top-nftcollection">
          <TopCollectionsNFTN />
        </Route>                       
        <Route path="/top-fcollection">
          <TopCollectionsFractional />
        </Route>                       
        {/* <Route path="/top-collections">
          <TopCollections />
        </Route>                 */}
        <Route path="/top-categories">
          <TopCategories />
        </Route>                
        <Route path="/genesis-market">
          <GenesisMarketApp />
        </Route>                
        <Route path="/my-NFT">
          <MyNFTApp />
        </Route>                
        <Route path="/my-NFTcopy">
          <MyNFTCopy />
        </Route>                
        <Route path="/my-NFTcopyy">
          <MyNFTCopy2 />
        </Route>                        
        <Route path="/NFT-detailsfra">
          <NFTDetailsFra />
        </Route>                        
        <Route path="/NFT-details">
          <NFTDetailsApp />
        </Route>                        
        <Route path="/NFT-detailsauction">
          <NFTDetailsAuction />
        </Route>                        
        <Route path="/NFTn-details">
          <NFTDetailsNFT />
        </Route>                        
        <Route path="/create-artists">
          <CreateArtistsApp />
        </Route>                
        <Route path="/Mint-NFT">
          <MintNFTApp />
        </Route>                       
        <Route path="/launchpad">
          <LauchpadApp />
        </Route>                                                        
        <Route path="/dashboardd">
          <DashboardKyc/>
        </Route>     
        <Route path="/viewkyc">
          <View/>
        </Route> 
        <Route path="/createkyc">
          <CreateKyc/>
        </Route> 
        <Route path="/approvekyc">
          <Approvepage/>
        </Route>        
        <Route path="/kyc">
          <DashboardKyc />
        </Route>
        <Route path="/pool">
          <PoolNew />
        </Route>
        <Route path="/stableswap">
          <StableswapApp />
        </Route>
        <Route path="/singlesideAmm">
          <SinglesideAmm />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/faucet-stable">
          <FaucetApp />
        </Route>
        <Route path="/dashboardnft">
          <DashboardNFT/>
        </Route>  
        <Route path="/dashboardAMM">
          <DashboardAMM/>
        </Route>   
        <Route path="/">
          {/* <Home /> */}
          <ElementProtocol/>
        </Route>
        
      </Switch>
    </Router>    
    </DataContext.Provider>  
  );
}

export default App;