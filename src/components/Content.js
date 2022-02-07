import React, {Component} from 'react';
class Content extends Component {
  render() {
    return (
       <artcle>
          <h2> {this.props.title}</h2>
           {this.props.desc}
         </artcle>
    );
  }
}
export default Content;