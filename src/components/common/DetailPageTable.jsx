import {share,Video,view,checkbox, adduser, eye, pencil, deletclrred , JobActive, exporticon, deletegray} from "../../helper/Icons/Icon";
import Statusbtn from "../../components/common/Statusbtn";
import { Table,Form } from "react-bootstrap";
import { CustomRating } from "../../components/form";
import { CustomButton } from "../../components/form/index";
import { Link } from "react-router-dom";
const DetailPageTable=({modelopen})=>{
   return (
    <>
    
    <Table className="table" style={{ width: "1900px" }}>
      <thead>
        <tr>
          <th style={{width:"15px"}}><span><Form.Check type="checkbox" /></span></th>
          <th style={{width:"160px"}}><span>Quick Action</span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Candidate" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Email" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Candidate" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Email" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Phone Number" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Status" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Job Name" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Status" /></span></th>
          <th style={{minWidth:"100px",width:"200px"}}><span><Form.Control type="text" placeholder="Rating" /></span></th>

        </tr>
      </thead>

      <tbody className="tabel-body">
      
        <tr>
          <td><Form.Check type="checkbox" /></td>
     
          <td>
            <div className="quick-action">
            <span  className="cursor"  onClick={modelopen} >{Video}</span>
            <span  className="cursor" >{pencil}</span>
            <span  className="cursor" >{deletclrred}</span>
            <span  className="cursor" >{share}</span>
            <span  className="cursor" >{view}</span>
              
          
            </div>
          </td>
          <td><a href="#">Arthur Stevenson</a></td>
          <td>abc@gmail.com</td>
          <td>+1 888 888 8884</td>
          <td><Statusbtn className="Invite-Scheduled status" text="Invite Scheduled" /></td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>

          <td><a href="#">Senior Frontend Developer</a></td>
          

          <td>{<CustomRating/>}</td>
        </tr>
        <tr>
          <td><Form.Check type="checkbox" /></td>
     
          <td>
            <div className="quick-action">
            <span  className="cursor"  onClick={modelopen} >{Video}</span>
            <span  className="cursor" >{pencil}</span>
            <span  className="cursor" >{deletclrred}</span>
            <span  className="cursor" >{share}</span>
            <span  className="cursor" >{view}</span>
              
          
            </div>
          </td>
          <td><a href="#">Arthur Stevenson</a></td>
          <td>abc@gmail.com</td>
          <td>+1 888 888 8884</td>
          <td><Statusbtn className="Invite-Scheduled status" text="Invite Scheduled" /></td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>

          <td><a href="#">Senior Frontend Developer</a></td>
          

          <td>{<CustomRating/>}</td>
        </tr>
        <tr>
          <td><Form.Check type="checkbox" /></td>
     
          <td>
            <div className="quick-action">
            <span  className="cursor"  onClick={modelopen} >{Video}</span>
            <span  className="cursor" >{pencil}</span>
            <span  className="cursor" >{deletclrred}</span>
            <span  className="cursor" >{share}</span>
            <span  className="cursor" >{view}</span>
              
          
            </div>
          </td>
          <td><a href="#">Arthur Stevenson</a></td>
          <td>abc@gmail.com</td>
          <td>+1 888 888 8884</td>
          <td><Statusbtn className="Invite-Scheduled status" text="Invite Scheduled" /></td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>
          <td>03-22-2023  6:20pm</td>

          <td><a href="#">Senior Frontend Developer</a></td>
          

          <td>{<CustomRating/>}</td>
        </tr>
        
      </tbody>
                       </Table>
    </>)
}

export default DetailPageTable;