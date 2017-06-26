


{
//             this.props.data.map(function(bill, index){
//                 return (
//                         <div key={index} className="panel panel-default">
//                             <div className="panel-heading">
//                               <h3 className="panel-title" >Bill Name: {bill.bill_id}</h3>
//                             </div>
//                               <h3 className="panel-body">{bill.title}</h3>
                             
//                               <button className=".btn-info" >
//                                 <a href={'https://openstates.org/' + bill.state + '/bills/' +bill.session + '/' +bill.bill_id + '/#billtext'} target="_blank" >View Bill Status</a>
//                               </button>

//                               <button className=".btn-info" >
//                                   <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + bill.session +'0'+ bill.bill_id} target="_blank" >View Current Bill Literature </a>
//                               </button>
                                
//                               <button className=".btn-info" >
//                                 <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + bill.session + bill.bill_id + 'is/pdf/BILLS-' + bill.session + bill.bill_id  + 'pdf'} target="_blank" >PDF</a>
//                               </button>

//                         </div>
//                 );
//             })
//           }
//{
                
//         this.props.data.map(function(bill, index){
//                 if(this.props.categories == "House" || "Senate"){
//                         return (
//                           <div key={index} className="panel panel-default">
//                             <div className="panel-heading">
//                               <h3 className="panel-title" >Bill Name: {bill.bill_id}</h3>
//                             </div>
//                               <h3 className="panel-body">{bill.title}</h3>
                             
//                               <button className=".btn-info" >
//                                 <a href={'https://openstates.org/' + bill.state + '/bills/' +bill.session + '/' +bill.bill_id + '/#billtext'} target="_blank" >View Bill</a>
//                               </button>

//                               <button className=".btn-info" >
//                                   <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + bill.session +'0'+ bill.bill_id} target="_blank" >View Current Bill Literature </a>
//                               </button>
                                
//                               <button className=".btn-info" >
//                                 <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + bill.session + bill.bill_id + 'is/pdf/BILLS-' + bill.session + bill.bill_id  + 'pdf'} target="_blank" >PDF</a>
//                               </button>

//                         </div>);
//                 }
              
              
//               else{
//                 return (<div key={index} className="panel panel-default">
//                           <div className="panel-heading">
//                           <h3 className="panel-title" > Name: {bill.full_name}</h3>
//                           </div>
                          
//                           <img src={bill.photo_url} class="img-rounded" alt={bill.full_name} width="304" height="236">
//                           <p className="panel-body">District: {bill.district} Party: {bill.party}</p>
//                           <p>Local Address: &nbsp;{bill.offices[1].address}</p>
//                           <p>Capital P.O Box: &nbsp;{bill.offices[0].address}</p>
//                           <p>Local Office Phone:  &nbsp;{bill.offices[1].phone}</p>
//                           <p>Capital Office Phone:  &nbsp;{bill.offices[0].phone}</p>
//                           <p>Email: &nbsp;{bill.offices[0].email}</p>
                          
//                           <button className=".btn-info" >
//                                 <a href={'http://www.gpo.gov/title=meeting&member=' + bill.last_name} target="_blank" >View Previous Meetings Attended</a>
//                               </button>

//                               <button className=".btn-info" >
//                                 <a href={'http://www.gpo.gov/title=meeting&member=' + bill.last_name} target="_blank" >View Previous Meetings Attended</a>
//                               </button>
                                
//                               <button className=".btn-info" >
//                                 <a href={'http://www.gpo.gov/' + bill.session + bill.bill_id + 'is/pdf/BILLS-' + bill.session + bill.bill_id  + 'pdf'} target="_blank" >View </a>
//                               </button>                          
//                           </div>

//                           );
//               }
//         })
// }

// //working
//   {
//             this.props.newCall.map(function(filteredBill, index){
//               return (
//                       <div key={index} className="panel panel-default">
//                           <div className="panel-heading">
//                               <h3 className="panel-title" >Bill Name: {filteredBill.bill_id} </h3>
//                           </div>
//                               <h3 className="panel-body">{filteredBill.title}</h3>
                                
//                                 <button className=".btn-info" >
//                                   <a href={'https://openstates.org/' + filteredBill.state + '/bills/' +filteredBill.session + '/' +filteredBill.bill_id + '/#billtext'} target="_blank" >View Status Bill</a>
//                                 </button>
                                
//                                 <button className=".btn-info" >
//                                   <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + filteredBill.session + filteredBill.bill_id} target="_blank" >View Current Bill Literature </a>
//                                 </button>
                                
//                                 <button className=".btn-info" >
//                                   <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + filteredBill.session + filteredBill.bill_id + 'is/pdf/BILLS-' + filteredBill.session + filteredBill.bill_id  + 'pdf'} target="_blank" >PDF</a>
//                                 </button>

//                       </div>
//               );
            
//             })
//           }
//           {
//             this.props.data.map(function(bill, index){
//                 return (
//                         <div key={index} className="panel panel-default">
//                             <div className="panel-heading">
//                               <h3 className="panel-title" >Bill Name: {bill.bill_id}</h3>
//                             </div>
//                               <h3 className="panel-body">{bill.title}</h3>
                             
//                               <button className=".btn-info" >
//                                 <a href={'https://openstates.org/' + bill.state + '/bills/' +bill.session + '/' +bill.bill_id + '/#billtext'} target="_blank" >View Bill Status</a>
//                               </button>

//                               <button className=".btn-info" >
//                                   <a href={'http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=' + bill.session +'0'+ bill.bill_id} target="_blank" >View Current Bill Literature </a>
//                               </button>
                                
//                               <button className=".btn-info" >
//                                 <a href={'https://www.gpo.gov/fdsys/pkg/BILLS-' + bill.session + bill.bill_id + 'is/pdf/BILLS-' + bill.session + bill.bill_id  + 'pdf'} target="_blank" >PDF</a>
//                               </button>

//                         </div>
//                 );
//             })
//           }