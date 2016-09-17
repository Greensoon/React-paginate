import React ,{ Component,PropTypes} from 'react'
// import {log} from '../../utils/utils'
export default class Paginate extends Component{
  constructor(props){
    super(props)
    this.handlePre = this.handlePre.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleGo = this.handleGo.bind(this)
  }
  static propTypes = {
    pageSize : PropTypes.number,
    currentPage : PropTypes.number,
    goPage : PropTypes.func,
    total : PropTypes.number,
  }
  handlePre(){
    const {currentPage} = this.props
    this.handleGo(currentPage-1)
  }
  handleNext(){
    const {currentPage} = this.props
    this.handleGo(currentPage+1)
  }
  handleGo(page){
    const {goPage} = this.props
    goPage({
      currentPage : page
    })
  }
  render (){
    const {total,currentPage,pageSize}=this.props
    let pageCount = total<= pageSize ? 1 :Math.ceil(total/pageSize)
    const totalArr = pageCount ? Array(pageCount).join(' ').split(' ').map((e,i)=>i) : [100]
    if(total>0){
      let pageArr = []
      if(pageCount<10){
        totalArr.map((ele,i)=>{
          pageArr.push(
            <a key={'page_'+i} 
                className={(i+1)==currentPage?'page-num current-page':'page-num'} 
                href="javascript:;"
                disabled={(i+1)==currentPage?true:false}
                onClick={()=>{this.handleGo(i+1)}}
              >
              {i+1}
            </a>
          )
        })
      }else{
        pageArr = getPageArr(totalArr,currentPage,pageCount,this.handleGo)
      }
      
      return (
      	<div className="pagenate">
  				<a href="javascript:;" 
             disabled={total==0 || 1==currentPage ?true:false} 
             onClick={this.handlePre} 
             className={total==0 || 1==currentPage?'page-btn page-btn-disable':'page-btn enable' }
             >上一页</a>
  				{
  					pageArr
  				}
  				<a href="javascript:;" 
             disabled={total==0 || totalArr.length==currentPage?true:false} 
             onClick={this.handleNext} 
             className={total==0 || totalArr.length==currentPage?'page-btn page-btn-disable':'page-btn enable' }
             >下一页
          </a>
  	    </div>
    	)
    }else{
      return <div></div>
    }
  }
}
function getPageArr (totalArr,currentPage,total,handleGo){
  let pageArr = []
  if((currentPage-2)<=1){
    totalArr.map((e,i)=>{
      if(i==0 || i==(total-1)){
        pageArr.push(
          <a key={'page_'+i} 
            className={(i+1)==currentPage?'page-num current-page':'page-num'} 
            href="javascript:;"
            disabled={(i+1)==currentPage?true:false}
            onClick={()=>{handleGo(i+1)}}
          >
          {i+1}
          </a>
        )
      }else{
        if((currentPage-2)<=1){
          if(i<= (currentPage + 1) || i>=(total-3)){
            pageArr.push(
              <a key={'page_'+i} 
                 className={(i+1)==currentPage?'page-num current-page':'page-num'} 
                 href="javascript:;"
                 disabled={(i+1)==currentPage?true:false}
                 onClick={()=>{handleGo(i+1)}}
              >
                {i+1}
              </a>
            )
          }
        }
      }
    })
    let pa1 = pageArr.slice(0,-3)
    pa1.push(
      <span key={'page_...1'} className="page-more" >{'...'}</span>
    )
    let pa2 = pageArr.slice(-3)
    pageArr = pa1.concat(pa2)
    
  }else if(currentPage>(total-3)){
    totalArr.map((e,i)=>{
      if(i==0 || i==(total-1)){
        pageArr.push(
          <a key={'page_'+i} 
             className={(i+1)==currentPage?'page-num current-page':'page-num'} 
             href="javascript:;"
             disabled={(i+1)==currentPage?true:false}
             onClick={()=>{handleGo(i+1)}}
          >
            {i+1}
          </a>
        )
      }else{
        if(currentPage>(total-3)){
          if(i>(total-5) || i<3){
            pageArr.push(
              <a key={'page_'+i} 
                 className={(i+1)==currentPage?'page-num current-page':'page-num'} 
                 href="javascript:;"
                 disabled={(i+1)==currentPage?true:false}
                 onClick={()=>{handleGo(i+1)}}
              >
                {i+1}
              </a>
            )
          }
        }
      }
    })
    let pa1 = pageArr.slice(0,3)
    pa1.push(
      <span key={'page_...1'} className="page-more" >{'...'}</span>
    )
    let pa2 = pageArr.slice(3)
    pageArr = pa1.concat(pa2)
  }else{
    totalArr.map((e,i)=>{
      if(i==0 || i==(total-1)){
        pageArr.push(
          <a key={'page_'+i} 
             className={(i+1)==currentPage?'page-num current-page':'page-num'} 
             href="javascript:;"
             disabled={(i+1)==currentPage?true:false}
             onClick={()=>{handleGo(i+1)}}
          >
            {i+1}
          </a>
        )
      }else{
        if(currentPage> 3 && currentPage<=(total-3)){
          if((i< (currentPage + 2) && i>=(currentPage-3))){
            pageArr.push(
              <a key={'page_'+i} 
                 className={(i+1)==currentPage?'page-num current-page':'page-num'} 
                 href="javascript:;"
                 disabled={(i+1)==currentPage?true:false}
                 onClick={()=>{handleGo(i+1)}}
              >
                {i+1}
              </a>
            )
          }
        }
      }
    })
    let pa1 = pageArr.slice(0,1)
    pa1.push(
      <span key={'page_...1'} className="page-more" >{'...'}</span>
    )
    let pa2 = pageArr.slice(1,-1)
    pa2.push(
      <span key={'page_...2'} className="page-more" >{'...'}</span>
    )
    let pa3 = pageArr.slice(-1)
    pageArr = pa1.concat(pa2,pa3)
  }
  return pageArr
}
