import React from 'react'
import { ReactComponent as Edit} from '../resources/edit.svg';
import { ReactComponent as Laptop} from '../resources/laptop.svg';
import { ReactComponent as Link} from '../resources/link.svg';
import { ReactComponent as News} from '../resources/news.svg';
import { ReactComponent as Social} from '../resources/social-network.svg';
import { ReactComponent as Boy} from '../resources/boy.svg';
import ClientRR from '../resources/rr1.jpeg';

const list=<div class="list">
<div class="list-preview">
  <h2>High Volume Low Value </h2>
</div>
<div class="list-info">
  <h2>
  The group consists of guitarist Max Schad, bassist Raad Soudani, vocalists Myke Terry and Michael Barr, and drummer Nick Ursich. The group was founded in 2009 and debuted with their first EP, The Concept of Dreaming in 2010. 
    </h2>
</div>
</div>

const icons=<div class="flex-container">
        <div style={{'flexGrow': 1}}><Edit style={{'width':'70px','height':'40px'}}/></div>
        <div style={{'flexGrow': 1}}><Laptop  style={{'width':'70px','height':'40px'}}/></div>
        <div style={{'flexGrow': 1}}><Link  style={{'width':'70px','height':'40px'}}/></div>
        <div style={{'flexGrow': 1}}><News  style={{'width':'70px','height':'40px'}}/></div>
        <div style={{'flexGrow': 1}}><Social  style={{'width':'70px','height':'40px'}}/></div>
      </div>
export default function home() {
    return (
        <div>
            {icons}
      <Boy style={{'width':'180px','height':'240px','marginTop':'20px'}}/>
      <img alt ='asd'src={ClientRR}  style={{'marginLeft':'-35px','width':'400px','height':'100px','marginTop':'20px'}}/>
      <div style={{'width':'90%','margin':'0 auto','marginTop':'50px'}}>
        {list}
        {list}
        {list}
      </div>
        </div>
    )
}
