import React, { Component } from 'react';
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import Content from "./components/Content";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        mode:'welcome',
        selected_contents_id:2,
        subject:{title:'Web', desc:'World Wide Web'},
        welcome:{title:'Welcome', desc:'Hello React'},
        contents: [
          {id:1, title:'html', desc:'html is for information'},
          {id:2, title:'css', desc:'css is for design'},
          {id:3, title:'javascript', desc:'javascript is for interaction'},
          {id:4, title:'react', desc:'react is web framework'}
        ]
      }
    
  }
  
  render() {
    let _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.subject.title;
      _desc = this.state.subject.desc;

    } else if(this.state.mode === 'read'){
      let i=0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
     
    }

    return (
      <div className="App">
        <div className="Spp">
          <Subject 
            title={this.state.subject.title} 
            desc={this.state.subject.desc}
            onChangePage={function(){
              this.setState({mode:'welcome}'});
            }.bind(this)}
            >
        </Subject>
          </div>
       <Toc 
        data={this.state.contents}
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_contents_id:Number(id)
          });
        }.bind(this)}
       
       ></Toc>

       <Content title={_title} desc={_desc}></Content>
        
      </div>
    );
  }
}  
export default App;
