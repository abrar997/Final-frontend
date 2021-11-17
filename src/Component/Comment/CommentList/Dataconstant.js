import { Rating } from '@mui/material';
import React, { Component } from 'react'

const style = { color: "#db2d41" };

export class Dataconstant extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [
            {
              text: "The best investment of time and money was taking and learning this course. Thank You so much Mohsen for your wonderful teaching. and I hope you keep doing a Great Job in what you are doing. Cheers",
            },
            {
              text: "I went from trading in the negative to paying taxes on my substantial profit. All in one year. This drastically increased my learning curve. Highly recommend course.",
            },
            {
              text: " A  great introduction for someone only knew very little regarding stocks. Some lecture has some audio issue that degraded the experience a bit. Other than that, I would of also likes some basic introduction into options and such.",
            },
           
          ],
        };
    }
    render() {
        return (
            <div>
            {this.state.data.map((item,ind)=>{
         return (

           <div key={ind} className="col-lg-4 comment-style">
             <h6 style={{fontSize:"14px",fontWeight:"normal"}}>{item.text}</h6>
             <Rating
               name="half-rating-read"
               defaultValue={4.5}
               precision={0.5}
               readOnly
               style={style}
             />{" "}
           </div>
         );
            })}    
            </div>
        )
    }
}

export default Dataconstant
