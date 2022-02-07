import React, {Component} from 'react';
class Toc extends Component {
  render() {
    let lists = [];
    let i = 0;
    let data = this.props.data;

    while(i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a href={data[i].id+'.html'}  
            onClick = { function(id,e){
                      e.preventDefault();
                      debugger;
                    this.props.onChangePage(id);}.bind(this,data[i].id)}
        > {data[i].title}</a>
        </li>);
      i=i+1;
    }
    
    return (
        <nav>
          <ol>
            {lists}
          </ol>
        </nav>
    )
  }
}
export default Toc;