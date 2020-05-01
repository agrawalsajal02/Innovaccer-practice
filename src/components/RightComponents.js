import React from 'react'
import "./RightComponent.css"
import "./RightComponent/Agenda"
import "./RightComponent/Message"
import "./RightComponent/Referals"
import "./RightComponent/Scorecard"


import CareSummary from "./RightComponent/CareSummary"
import Insights from "./RightComponent/Insights"
import Meet from "./RightComponent/Meet"
import Referrals from "./RightComponent/Referrals"
import { Route, Switch ,Link, Router} from "react-router-dom";

function RightComponents() {
    return (
        <div>
          <div class="main_header">
<div class="main_section">
    <a class="icon_Setting">
<i class="fas fa-align-justify inside_Section"></i>
<h2 class="icon_message">Agenda</h2>
</a>
<a  class="icon_Setting">
<i class="far fa-envelope inside_Section"></i>
<h2  class="icon_message">Messages</h2>
</a>
<a  class="icon_Setting">
<i class="far fa-id-card inside_Section"></i>
<h2  class="icon_message">Scorecard</h2>

</a>
<a  class="icon_Setting">
<i class="fas fa-walking inside_Section"></i>
<h2  class="icon_message" >Referrals</h2>

</a>

 </div>
          </div>
          
          <div class="main_name">
         <h2>Lawson,Joy</h2>
         <div>High Risk</div>     
         <i class="fas fa-chevron-down down"></i>
          </div>
          
          <div class="main_detail_options">
        
    <Link  to="/user/insight" class="main_detail_options_icon_Setting">
<h4 class="main_detail_options_icon_message">Insights</h4>
</Link>

<Link  to="/user/caresummary"  class="main_detail_options_icon_Setting">
<h4  class="main_detail_options_icon_message">Care Summary</h4>
</Link>

<Link  to="/user/referrals"  class="main_detail_options_icon_Setting">
<h4  class="main_detail_options_icon_message">Referrals</h4>

</Link>
<Link  to="/user/meet"  class="main_detail_options_icon_Setting">
<h4  class="main_detail_options_icon_message" >meet</h4>

</Link>

          </div>


{/*  HEre comes the details page */}
          <div class='main_details'>
<Switch>
    <Route  exact path='/user/caresummary' component={CareSummary}></Route>
    <Route  exact path='/user/referrals' component={Referrals}></Route>
    <Route  exact path='/user/meet' component={Meet}></Route>
    <Route exact path='/user/insight' component={Insights}></Route>
    <Route path="*" component={Insights}></Route>
</Switch>



          </div>
        </div>
    )
}

export default RightComponents
