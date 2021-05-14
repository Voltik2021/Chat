import React, {PureComponent} from 'react';

class MessChat extends PureComponent {
    
    render() {
        return (            
              <div className = "masslist">
                  {this.props.arrMess.map((item) => <div key = {item.id}><p>{item.name}</p><p>{item.text}</p></div>)}
              </div>            
        )
    }

                
}
export default MessChat